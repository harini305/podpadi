// Client-side state for the simulated booking flow. It lives in sessionStorage only, holds no
// personal data, and is never sent anywhere.

const KEY = "podpadi-demo-booking";

export const MAX_GUESTS = 14;
export const emptyBooking = { checkIn: null, checkOut: null, adults: 2, villa: null, reference: null };

export function loadBooking() {
  try {
    const raw = window.sessionStorage.getItem(KEY);
    return raw ? { ...emptyBooking, ...JSON.parse(raw) } : { ...emptyBooking };
  } catch {
    return { ...emptyBooking };
  }
}

export function saveBooking(state) {
  try {
    window.sessionStorage.setItem(KEY, JSON.stringify(state));
  } catch {
    // Storage can be unavailable (private mode); the flow still works for this page view.
  }
}

export function clearBooking() {
  try {
    window.sessionStorage.removeItem(KEY);
  } catch {}
}

// Dates are handled as local "YYYY-MM-DD" strings so time zones never shift a day.
export function toISO(date) {
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  return `${date.getFullYear()}-${m}-${d}`;
}

export function fromISO(iso) {
  const [y, m, d] = iso.split("-").map(Number);
  return new Date(y, m - 1, d);
}

export function addDays(date, days) {
  const next = new Date(date);
  next.setDate(next.getDate() + days);
  return next;
}

export function today() {
  const now = new Date();
  return new Date(now.getFullYear(), now.getMonth(), now.getDate());
}

export function nightsBetween(checkIn, checkOut) {
  if (!checkIn || !checkOut) return 0;
  return Math.round((fromISO(checkOut) - fromISO(checkIn)) / 86400000);
}

const longFormat = new Intl.DateTimeFormat("en-GB", { weekday: "short", day: "numeric", month: "short", year: "numeric" });

export function formatDate(iso) {
  return iso ? longFormat.format(fromISO(iso)) : "—";
}

export function datesValid(state) {
  return Boolean(state.checkIn && state.checkOut && nightsBetween(state.checkIn, state.checkOut) > 0);
}

export function makeReference() {
  const alphabet = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  let code = "";
  for (let i = 0; i < 5; i += 1) code += alphabet[Math.floor(Math.random() * alphabet.length)];
  return `DEMO-${code}`;
}
