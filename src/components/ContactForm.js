"use client";

import { useRef, useState } from "react";

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const initial = { firstName: "", lastName: "", email: "", phone: "", message: "" };

function validate(values) {
  const errors = {};
  if (!values.firstName.trim()) errors.firstName = "Enter your first name.";
  if (!values.lastName.trim()) errors.lastName = "Enter your last name.";
  if (!values.email.trim()) errors.email = "Enter your email address.";
  else if (!EMAIL.test(values.email.trim())) errors.email = "Enter an email address like name@example.com.";
  if (values.phone.trim() && !/^[+\d][\d\s()-]{5,}$/.test(values.phone.trim())) errors.phone = "Use digits, spaces and an optional leading +.";
  if (!values.message.trim()) errors.message = "Write a short message.";
  return errors;
}

// Local-only demo form: validates in the browser, transmits nothing and keeps nothing.
export default function ContactForm() {
  const [values, setValues] = useState(initial);
  const [errors, setErrors] = useState({});
  const [sentName, setSentName] = useState("");
  const formRef = useRef(null);
  const doneRef = useRef(null);

  function change(event) {
    const { name, value } = event.target;
    setValues((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: undefined }));
  }

  function submit(event) {
    event.preventDefault();
    const found = validate(values);
    setErrors(found);
    const firstInvalid = Object.keys(found)[0];
    if (firstInvalid) {
      formRef.current?.querySelector(`[name="${firstInvalid}"]`)?.focus();
      return;
    }
    setSentName(values.firstName.trim());
    setValues(initial); // nothing is kept once the demo confirmation shows
    requestAnimationFrame(() => doneRef.current?.focus());
  }

  if (sentName) {
    return (
      <div className="form-done" ref={doneRef} tabIndex={-1} role="status">
        <h3>Thank you, {sentName}. This was a demo.</h3>
        <p>
          Your message was checked in the browser and then discarded. It was not sent to Podpadi, and no copy was stored. To reach the
          property for real, use its own channels.
        </p>
        <button type="button" className="button" onClick={() => setSentName("")}>
          Write another message
        </button>
      </div>
    );
  }

  const field = (name, label, props = {}) => (
    <div className={`field${errors[name] ? " has-error" : ""}`}>
      <label htmlFor={`cf-${name}`}>
        {label}
        {props.required ? "" : <span className="field__optional"> (optional)</span>}
      </label>
      {props.as === "textarea" ? (
        <textarea id={`cf-${name}`} name={name} rows={5} value={values[name]} onChange={change} aria-invalid={Boolean(errors[name])} aria-describedby={errors[name] ? `cf-${name}-error` : undefined} />
      ) : (
        <input
          id={`cf-${name}`}
          name={name}
          type={props.type || "text"}
          autoComplete={props.autoComplete}
          value={values[name]}
          onChange={change}
          aria-invalid={Boolean(errors[name])}
          aria-describedby={errors[name] ? `cf-${name}-error` : undefined}
        />
      )}
      {errors[name] && (
        <p className="field-error" id={`cf-${name}-error`}>
          <span aria-hidden="true">! </span>
          {errors[name]}
        </p>
      )}
    </div>
  );

  return (
    <form className="contact-form" ref={formRef} onSubmit={submit} noValidate>
      <div className="contact-form__row">
        {field("firstName", "First name", { required: true, autoComplete: "given-name" })}
        {field("lastName", "Last name", { required: true, autoComplete: "family-name" })}
      </div>
      {field("email", "Email", { required: true, type: "email", autoComplete: "email" })}
      {field("phone", "Phone", { type: "tel", autoComplete: "tel" })}
      {field("message", "Message", { required: true, as: "textarea" })}
      <button type="submit" className="button">
        Check and send (demo)
      </button>
      <p className="contact-form__note">Demo form: nothing leaves your browser.</p>
    </form>
  );
}
