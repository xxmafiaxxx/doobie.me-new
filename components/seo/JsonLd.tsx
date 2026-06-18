/**
 * JsonLd — renders a JSON-LD <script> for structured data.
 * Server component; safe to drop multiple on a page. Used for Organization,
 * LocalBusiness, WebSite, Service, FAQPage, BreadcrumbList, BlogPosting, etc.
 *
 * @see https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data
 */
interface JsonLdProps {
  /** A schema.org object, or an array of them (for @graph). */
  data: Record<string, unknown> | Record<string, unknown>[];
}

export default function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      // Data is assembled server-side from trusted constants; never user input.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
