import Link from "next/link";
import { Home, ArrowRight, Plane } from "lucide-react";

export default function NotFound() {
  return (
    <section className="container flex min-h-[60vh] flex-col items-center justify-center py-20 text-center">
      <span className="grid h-16 w-16 place-items-center rounded-2xl bg-brand-50 text-brand-600 animate-float">
        <Plane className="h-8 w-8 -rotate-45" aria-hidden="true" />
      </span>
      <p className="mt-8 font-display text-6xl font-bold tracking-tight text-ink">404</p>
      <h1 className="mt-3 text-2xl font-bold tracking-tight text-ink sm:text-3xl">
        This route never took off
      </h1>
      <p className="mt-3 max-w-md text-slate-600">
        The page you're looking for doesn't exist or has moved. Let's get you back on course.
      </p>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        <Link href="/" className="btn-primary">
          <Home className="h-4 w-4" aria-hidden="true" />
          Back home
        </Link>
        <Link href="/get-started" className="btn-secondary">
          Get early access
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Link>
      </div>
    </section>
  );
}
