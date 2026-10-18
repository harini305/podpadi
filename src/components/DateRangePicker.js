"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { addDays, fromISO, toISO, today } from "@/lib/booking";

const WEEKDAYS = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"];
const monthName = new Intl.DateTimeFormat("en-GB", { month: "long", year: "numeric" });
const dayLabel = new Intl.DateTimeFormat("en-GB", { weekday: "long", day: "numeric", month: "long", year: "numeric" });
const MAX_MONTHS_AHEAD = 18;

function startOfMonth(date) {
  return new Date(date.getFullYear(), date.getMonth(), 1);
}

function addMonths(date, n) {
  return new Date(date.getFullYear(), date.getMonth() + n, 1);
}

function monthDays(month) {
  const first = startOfMonth(month);
  const lead = (first.getDay() + 6) % 7; // Monday-first grid
  const count = new Date(month.getFullYear(), month.getMonth() + 1, 0).getDate();
  const cells = Array.from({ length: lead }, () => null);
  for (let d = 1; d <= count; d += 1) cells.push(new Date(month.getFullYear(), month.getMonth(), d));
  return cells;
}

/*
 * Accessible two-month range calendar. Days are buttons with full-date labels; one day is in
 * the tab order and arrow keys move between days (roving tabindex), PageUp/PageDown by month.
 */
export default function DateRangePicker({ checkIn, checkOut, onChange, idPrefix = "dates" }) {
  const minDate = useMemo(() => today(), []);
  const maxDate = useMemo(() => addMonths(minDate, MAX_MONTHS_AHEAD), [minDate]);
  const [view, setView] = useState(() => startOfMonth(checkIn ? fromISO(checkIn) : minDate));
  const [focusISO, setFocusISO] = useState(checkIn || toISO(minDate));
  const gridRef = useRef(null);
  const moveFocus = useRef(false);

  useEffect(() => {
    if (!moveFocus.current) return;
    moveFocus.current = false;
    gridRef.current?.querySelector(`[data-date="${focusISO}"]`)?.focus();
  }, [focusISO, view]);

  const canPrev = view > startOfMonth(minDate);
  const canNext = addMonths(view, 1) < startOfMonth(maxDate);

  function select(iso) {
    if (!checkIn || checkOut || iso <= checkIn) {
      onChange({ checkIn: iso, checkOut: null });
    } else {
      onChange({ checkIn, checkOut: iso });
    }
    setFocusISO(iso);
  }

  function onKeyDown(event) {
    const steps = { ArrowLeft: -1, ArrowRight: 1, ArrowUp: -7, ArrowDown: 7 };
    let next;
    const current = fromISO(focusISO);
    if (steps[event.key] !== undefined) next = addDays(current, steps[event.key]);
    else if (event.key === "PageUp") next = new Date(current.getFullYear(), current.getMonth() - 1, current.getDate());
    else if (event.key === "PageDown") next = new Date(current.getFullYear(), current.getMonth() + 1, current.getDate());
    else return;
    event.preventDefault();
    if (next < minDate) next = minDate;
    if (next > maxDate) next = maxDate;
    const nextMonth = startOfMonth(next);
    if (nextMonth < view) setView(nextMonth);
    else if (nextMonth > addMonths(view, 1)) setView(addMonths(nextMonth, -1));
    moveFocus.current = true;
    setFocusISO(toISO(next));
  }

  const months = [view, addMonths(view, 1)];

  return (
    <div className="calendar" ref={gridRef}>
      <div className="calendar__nav">
        <button type="button" className="calendar__step" onClick={() => setView(addMonths(view, -1))} disabled={!canPrev} aria-label="Previous month">
          <span aria-hidden="true">←</span>
        </button>
        <button type="button" className="calendar__step" onClick={() => setView(addMonths(view, 1))} disabled={!canNext} aria-label="Next month">
          <span aria-hidden="true">→</span>
        </button>
      </div>
      <div className="calendar__months">
        {months.map((month, index) => (
          <div className={`calendar__month${index === 1 ? " calendar__month--second" : ""}`} key={toISO(month)}>
            <p className="calendar__title" id={`${idPrefix}-m${index}`} aria-live={index === 0 ? "polite" : undefined}>
              {monthName.format(month)}
            </p>
            <table className="calendar__grid" role="grid" aria-labelledby={`${idPrefix}-m${index}`} onKeyDown={onKeyDown}>
              <thead>
                <tr>
                  {WEEKDAYS.map((d) => (
                    <th key={d} scope="col" abbr={d}>
                      {d}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {chunk(monthDays(month), 7).map((week, w) => (
                  <tr key={w}>
                    {week.map((day, i) => {
                      if (!day) return <td key={i} />;
                      const iso = toISO(day);
                      const disabled = day < minDate || day > maxDate;
                      const isStart = iso === checkIn;
                      const isEnd = iso === checkOut;
                      const inRange = checkIn && checkOut && iso > checkIn && iso < checkOut;
                      const cls = ["calendar__day", isStart && "is-start", isEnd && "is-end", inRange && "is-range"].filter(Boolean).join(" ");
                      return (
                        <td key={iso}>
                          <button
                            type="button"
                            className={cls}
                            data-date={iso}
                            disabled={disabled}
                            tabIndex={iso === focusISO ? 0 : -1}
                            aria-pressed={isStart || isEnd || Boolean(inRange)}
                            aria-label={`${dayLabel.format(day)}${isStart ? ", check-in" : ""}${isEnd ? ", check-out" : ""}`}
                            onClick={() => select(iso)}
                            onFocus={() => setFocusISO(iso)}
                          >
                            {day.getDate()}
                          </button>
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ))}
      </div>
    </div>
  );
}

function chunk(list, size) {
  const rows = [];
  for (let i = 0; i < list.length; i += size) {
    const row = list.slice(i, i + size);
    while (row.length < size) row.push(null);
    rows.push(row);
  }
  return rows;
}
