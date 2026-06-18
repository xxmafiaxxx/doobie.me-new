"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle2, Loader2, AlertCircle } from "lucide-react";
import clsx from "clsx";

type Status = "idle" | "loading" | "success" | "error";

interface FormState {
  email: string;
  name: string;
  zip: string;
  interest: string;
}

const initial: FormState = { email: "", name: "", zip: "", interest: "Personal delivery" };

export default function WaitlistForm({ compact = false }: { compact?: boolean }) {
  const [values, setValues] = useState<FormState>(initial);
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string>("");

  const update = (key: keyof FormState) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
    setValues((v) => ({ ...v, [key]: e.target.value }));

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setError("");
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error ?? "Something went wrong. Please try again.");
      }
      setStatus("success");
      setValues(initial);
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-accent-200 bg-accent-50 p-8 text-center">
        <CheckCircle2 className="mx-auto h-12 w-12 text-accent-600" aria-hidden="true" />
        <h3 className="mt-4 text-xl font-semibold text-ink">You're on the list!</h3>
        <p className="mt-2 text-sm text-slate-600">
          Thanks for joining the Doobie early-access waitlist. We'll be in touch
          with launch perks as coverage rolls out to your area.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4" noValidate>
      {!compact && (
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="wl-name" className="mb-1.5 block text-sm font-medium text-slate-700">
              Name <span className="text-slate-400">(optional)</span>
            </label>
            <input
              id="wl-name"
              type="text"
              autoComplete="name"
              value={values.name}
              onChange={update("name")}
              className="field"
              placeholder="Alex Rivera"
            />
          </div>
          <div>
            <label htmlFor="wl-zip" className="mb-1.5 block text-sm font-medium text-slate-700">
              ZIP code <span className="text-slate-400">(for priority coverage)</span>
            </label>
            <input
              id="wl-zip"
              type="text"
              inputMode="numeric"
              autoComplete="postal-code"
              value={values.zip}
              onChange={update("zip")}
              className="field"
              placeholder="10017"
            />
          </div>
        </div>
      )}

      <div>
        <label htmlFor="wl-email" className="mb-1.5 block text-sm font-medium text-slate-700">
          Email address
        </label>
        <input
          id="wl-email"
          type="email"
          required
          autoComplete="email"
          value={values.email}
          onChange={update("email")}
          className="field"
          placeholder="you@email.com"
        />
      </div>

      {!compact && (
        <div>
          <label htmlFor="wl-interest" className="mb-1.5 block text-sm font-medium text-slate-700">
            I'm interested in
          </label>
          <select id="wl-interest" value={values.interest} onChange={update("interest")} className="field">
            <option>Personal delivery</option>
            <option>Business / partner delivery</option>
            <option>Investing</option>
            <option>Press / media</option>
          </select>
        </div>
      )}

      {status === "error" && (
        <p className="flex items-center gap-2 rounded-lg bg-red-50 px-4 py-3 text-sm text-red-700" role="alert">
          <AlertCircle className="h-4 w-4 shrink-0" aria-hidden="true" />
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className={clsx("btn-primary w-full", compact && "mt-0")}
      >
        {status === "loading" ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
            Joining…
          </>
        ) : (
          <>
            Join the waitlist
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </>
        )}
      </button>
      <p className="text-center text-xs text-slate-500">
        We'll only use your email to share launch updates. No spam, ever.
      </p>
    </form>
  );
}
