/**
 * Analytics — injects Google Tag Manager (GTM-TP87XKZ, carried over from the
 * original site) via Next.js Script. The GTM id is sourced from lib/site so it
 * stays single-sourced. AdSense was removed (not appropriate for this startup).
 *
 * Renders only in production to keep dev fast and avoid skewing analytics.
 */
import Script from "next/script";
import { site } from "@/lib/site";

export default function Analytics() {
  if (process.env.NODE_ENV !== "production") return null;
  const id = site.gtmId;
  if (!id) return null;

  return (
    <>
      <Script id="gtm-base" strategy="afterInteractive">
        {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${id}');`}
      </Script>
      {/* noscript fallback */}
      <noscript>
        <iframe
          src={`https://www.googletagmanager.com/ns.html?id=${id}`}
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }}
          title="gtm"
        />
      </noscript>
    </>
  );
}
