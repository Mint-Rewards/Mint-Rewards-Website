import { useState, type FormEvent } from "react";
import { ArrowRight } from "lucide-react";

/**
 * The business enquiry form, ported from Ahsan's build.
 *
 * NOT WIRED TO A BACKEND, DELIBERATELY. His posts to an Express API in his
 * Replit workspace; this site is a static Vite build with no server of its
 * own, and where these leads should land is still an open decision — most
 * likely `sales_partners` in DRAFT, so a rep sees them in the pipeline they
 * already work in.
 *
 * Until that exists, submitting says so plainly rather than showing a success
 * message. A form that appears to send and quietly discards the enquiry is the
 * worst of the three options: the visitor believes they have been in touch,
 * and nobody finds out until a lead is missed. Validation runs regardless, so
 * the field behaviour is real and testable now.
 */

type Service = "general" | "waste-management" | "rewards" | "impact";

type Values = {
  name: string;
  company: string;
  workEmail: string;
  phone: string;
  city: string;
  message: string;
  privacyConsent: boolean;
  /** Honeypot. Named innocuously, hidden off-screen, never shown to a human. */
  website: string;
};

const EMPTY: Values = {
  name: "",
  company: "",
  workEmail: "",
  phone: "",
  city: "",
  message: "",
  privacyConsent: false,
  website: "",
};

export default function EnquiryForm({
  service = "general",
  showServicePicker = false,
  title = "Talk to our team",
}: {
  service?: Service;
  showServicePicker?: boolean;
  title?: string;
}) {
  const [values, setValues] = useState<Values>({ ...EMPTY });
  const [chosenService, setChosenService] = useState<Service>(service);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [notice, setNotice] = useState("");

  const update = (key: keyof Values, value: string | boolean) =>
    setValues((v) => ({ ...v, [key]: value }));

  /** His rules, unchanged. */
  function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const next: Record<string, string> = {};
    if (values.name.trim().length < 2)
      next.name = "Enter your name (at least 2 characters).";
    if (values.company.trim().length < 2)
      next.company = "Enter your company name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.workEmail))
      next.workEmail = "Enter a valid work email address.";
    if (values.message.trim().length < 10)
      next.message =
        "Please add a little more detail (at least 10 characters).";
    if (!values.privacyConsent)
      next.privacyConsent =
        "Please confirm you agree to be contacted about this enquiry.";

    setErrors(next);
    setNotice("");
    if (Object.keys(next).length) {
      document.getElementById(`field-${Object.keys(next)[0]}`)?.focus();
      return;
    }
    // See the note at the top of this file: no endpoint yet, so say so.
    setNotice(
      "This form is not connected yet. Please email us directly while we finish setting it up — nothing has been sent.",
    );
  }

  const field = (
    key: "name" | "company" | "workEmail" | "phone" | "city",
    label: string,
    opts: { required?: boolean; type?: string; full?: boolean } = {},
  ) => (
    <div className={`field${opts.full ? " full" : ""}`}>
      <label htmlFor={`field-${key}`}>
        {label}
        {opts.required && " *"}
      </label>
      <input
        id={`field-${key}`}
        type={opts.type ?? "text"}
        value={values[key]}
        onChange={(e) => update(key, e.target.value)}
        aria-invalid={!!errors[key]}
      />
      <span className="field-error">{errors[key]}</span>
    </div>
  );

  return (
    <section id="enquiry" className="form-section">
      <div className="container form-grid">
        <div className="form-intro">
          {/* A div, not a p — see the note on Eyebrow in Business.tsx. */}
          <div className="eyebrow">Start a conversation</div>
          <h2>Let's find the right fit for your business.</h2>
          <p>
            Tell us what you are working on. Our team will follow up to
            understand your requirements and next steps.
          </p>
          <div className="form-contact">
            No commitment required.
            <br />
            Your details are used only to respond to this enquiry.
          </div>
        </div>

        <form className="enquiry-form" onSubmit={submit} noValidate>
          <div className="form-title">
            <h3>{title}</h3>
            <span>Fields marked * are required</span>
          </div>

          {notice && (
            <div className="form-error" role="alert">
              {notice}
            </div>
          )}

          <div className="form-fields">
            {showServicePicker && (
              <div className="field full">
                <label htmlFor="service-interest">Service of interest</label>
                <select
                  id="service-interest"
                  value={chosenService}
                  onChange={(e) =>
                    setChosenService(e.target.value as Service)
                  }
                >
                  <option value="general">Not sure yet</option>
                  <option value="waste-management">
                    Industrial waste management — RecovLoop
                  </option>
                  <option value="rewards">Rewards partnership</option>
                  <option value="impact">Impact solutions</option>
                </select>
              </div>
            )}

            {field("name", "Your name", { required: true })}
            {field("company", "Company", { required: true })}
            {field("workEmail", "Work email", {
              required: true,
              type: "email",
            })}
            {field("phone", "Phone", { type: "tel" })}
            {field("city", "City")}

            <div className="field full">
              <label htmlFor="field-message">How can we help? *</label>
              <textarea
                id="field-message"
                value={values.message}
                onChange={(e) => update("message", e.target.value)}
                aria-invalid={!!errors.message}
                placeholder="Share a little about your needs, goals or timeline."
              />
              <span className="field-error">{errors.message}</span>
            </div>

            {/* Honeypot: off-screen and hidden from assistive technology, so
                only something filling every field will touch it. */}
            <div
              className="field"
              aria-hidden="true"
              style={{ position: "absolute", left: "-9999px" }}
            >
              <label htmlFor="field-website">Website</label>
              <input
                id="field-website"
                tabIndex={-1}
                autoComplete="off"
                value={values.website}
                onChange={(e) => update("website", e.target.value)}
              />
            </div>
          </div>

          <label className="consent">
            <input
              type="checkbox"
              checked={values.privacyConsent}
              onChange={(e) => update("privacyConsent", e.target.checked)}
            />{" "}
            <span>
              I agree that Mint Rewards may contact me regarding this enquiry.
              We will use these details only to respond.
            </span>
          </label>
          {errors.privacyConsent && (
            <div className="field-error" role="alert">
              {errors.privacyConsent}
            </div>
          )}

          <button className="submit-btn" type="submit">
            Send enquiry <ArrowRight size={15} />
          </button>
          <p className="privacy-copy">
            Your information is handled with care and is not displayed publicly.
          </p>
        </form>
      </div>
    </section>
  );
}
