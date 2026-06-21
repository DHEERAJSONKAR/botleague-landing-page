import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { FiCheck } from "react-icons/fi";
import type { EcosystemRole, EcosystemFormErrors, EcosystemFormState } from "../types";

interface EcosystemFormCardProps {
  role: EcosystemRole;
  index: number;
}

const initialState: EcosystemFormState = { name: "", location: "", enroll: "" };

function validate(form: EcosystemFormState): EcosystemFormErrors {
  const errors: EcosystemFormErrors = {};

  if (!form.name.trim()) {
    errors.name = "Enter your full name.";
  } else if (form.name.trim().length < 2) {
    errors.name = "Name must be at least 2 characters.";
  }

  if (!form.location.trim()) {
    errors.location = "Enter your city or state.";
  }

  if (!form.enroll) {
    errors.enroll = "Choose an option to continue.";
  }

  return errors;
}

/** A single ecosystem signup card (Judge / Volunteer / Community) with validated form. */
export default function EcosystemFormCard({ role, index }: EcosystemFormCardProps) {
  const [form, setForm] = useState<EcosystemFormState>(initialState);
  const [errors, setErrors] = useState<EcosystemFormErrors>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const Icon = role.icon;

  const handleChange = (field: keyof EcosystemFormState, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    const validationErrors = validate(form);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setIsSubmitted(true);
    }
  };

  const inputBaseClasses =
    "w-full bg-bg-secondary border px-4 py-2.5 text-sm text-text-white placeholder:text-text-gray/60 transition-colors duration-200 focus:outline-none";

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-bg-card border border-border p-6 sm:p-7 flex flex-col"
    >
      <div className="flex items-center justify-center w-12 h-12 bg-bg-secondary border border-border mb-5">
        <Icon size={20} className="text-red-arena" />
      </div>
      <h3 className="font-display text-xl font-semibold uppercase mb-2">{role.title}</h3>
      <p className="text-sm text-text-gray leading-relaxed mb-6">{role.description}</p>

      {isSubmitted ? (
        <div
          role="status"
          className="mt-auto flex items-center gap-3 bg-bg-secondary border border-blue-accent/40 px-4 py-4"
        >
          <span className="flex items-center justify-center w-8 h-8 bg-blue-accent shrink-0">
            <FiCheck className="text-text-white" />
          </span>
          <p className="text-sm text-text-white">
            Thanks, {form.name.split(" ")[0]}! Your application has been received.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} noValidate className="mt-auto flex flex-col gap-4">
          <div>
            <label htmlFor={`${role.id}-name`} className="sr-only">
              Full name
            </label>
            <input
              id={`${role.id}-name`}
              type="text"
              placeholder="Full name"
              value={form.name}
              onChange={(e) => handleChange("name", e.target.value)}
              aria-invalid={Boolean(errors.name)}
              aria-describedby={errors.name ? `${role.id}-name-error` : undefined}
              className={`${inputBaseClasses} ${errors.name ? "border-red-arena" : "border-border focus:border-blue-accent"}`}
            />
            {errors.name && (
              <p id={`${role.id}-name-error`} className="mt-1.5 text-xs text-red-arena">
                {errors.name}
              </p>
            )}
          </div>

          <div>
            <label htmlFor={`${role.id}-location`} className="sr-only">
              Location
            </label>
            <input
              id={`${role.id}-location`}
              type="text"
              placeholder="City, State"
              value={form.location}
              onChange={(e) => handleChange("location", e.target.value)}
              aria-invalid={Boolean(errors.location)}
              aria-describedby={errors.location ? `${role.id}-location-error` : undefined}
              className={`${inputBaseClasses} ${errors.location ? "border-red-arena" : "border-border focus:border-blue-accent"}`}
            />
            {errors.location && (
              <p id={`${role.id}-location-error`} className="mt-1.5 text-xs text-red-arena">
                {errors.location}
              </p>
            )}
          </div>

          <div>
            <label htmlFor={`${role.id}-enroll`} className="sr-only">
              Area of interest
            </label>
            <select
              id={`${role.id}-enroll`}
              value={form.enroll}
              onChange={(e) => handleChange("enroll", e.target.value)}
              aria-invalid={Boolean(errors.enroll)}
              aria-describedby={errors.enroll ? `${role.id}-enroll-error` : undefined}
              className={`${inputBaseClasses} appearance-none ${errors.enroll ? "border-red-arena" : "border-border focus:border-blue-accent"}`}
            >
              <option value="" disabled>
                Select an area of interest
              </option>
              {role.enrollOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            {errors.enroll && (
              <p id={`${role.id}-enroll-error`} className="mt-1.5 text-xs text-red-arena">
                {errors.enroll}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="mt-2 w-full py-2.5 font-display text-sm font-semibold uppercase tracking-wide bg-red-arena text-text-white hover:bg-red-arena/90 transition-colors duration-200"
          >
            {role.ctaLabel}
          </button>
        </form>
      )}
    </motion.div>
  );
}
