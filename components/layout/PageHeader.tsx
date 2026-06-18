import clsx from "clsx";

interface PageHeaderProps {
  eyebrow?: React.ReactNode;
  title: string;
  description?: string;
  align?: "left" | "center";
  children?: React.ReactNode;
}

/**
 * Consistent interior-page header block. Renders a semantic <header> with an
 * eyebrow, single <h1>, and supporting description — good for SEO + layout.
 */
export default function PageHeader({
  eyebrow,
  title,
  description,
  align = "center",
  children,
}: PageHeaderProps) {
  return (
    <header
      className={clsx(
        "mx-auto max-w-3xl",
        align === "center" ? "text-center" : "text-left"
      )}
    >
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h1 className="mt-4 text-4xl font-bold tracking-tight text-ink sm:text-5xl">
        {title}
      </h1>
      {description && (
        <p
          className={clsx(
            "mt-4 text-lg leading-relaxed text-slate-600",
            align === "center" && "mx-auto"
          )}
        >
          {description}
        </p>
      )}
      {children && <div className="mt-8">{children}</div>}
    </header>
  );
}
