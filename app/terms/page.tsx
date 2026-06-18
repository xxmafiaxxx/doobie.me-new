import type { Metadata } from "next";
import LegalLayout, { LegalSection } from "@/components/layout/LegalLayout";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "The terms that govern your use of the Doobie Drone Deliveries website and our early-access waitlist.",
  alternates: { canonical: "/terms" },
  robots: { index: true, follow: true },
};

export default function TermsPage() {
  return (
    <LegalLayout
      title="Terms of Service"
      description="The terms for using our website and joining the early-access waitlist."
      slug="terms"
      updated="June 18, 2026"
    >
      <LegalSection heading="Acceptance of terms">
        <p>
          By accessing or using the Doobie Drone Deliveries website at doobie.me (the
          &ldquo;Site&rdquo;), you agree to these Terms of Service. If you do not agree, please do
          not use the Site.
        </p>
      </LegalSection>

      <LegalSection heading="Use of the Site">
        <p>
          You may use the Site for lawful purposes only. You agree not to misuse the Site, submit
          false information, attempt to disrupt its operation, or use it to send unsolicited
          communications.
        </p>
      </LegalSection>

      <LegalSection heading="Early-access waitlist">
        <p>
          Joining our waitlist expresses interest in receiving drone delivery services. It does not
          guarantee service availability, pricing, or a delivery date. Launch details, coverage
          areas, and perks may change as we develop our service.
        </p>
      </LegalSection>

      <LegalSection heading="Intellectual property">
        <p>
          The Site content — including text, graphics, logos, and software — is owned by or
          licensed to Doobie and protected by intellectual-property laws. You may not copy,
          reproduce, or redistribute it without our permission.
        </p>
      </LegalSection>

      <LegalSection heading="User content">
        <p>
          Any information you submit through our forms is provided voluntarily. You grant us a
          limited right to use that information to respond to you and provide our services.
        </p>
      </LegalSection>

      <LegalSection heading="Disclaimers">
        <p>
          The Site and any forward-looking statements about our service are provided &ldquo;as
          is.&rdquo; We make no guarantees about availability, timing, or features until services
          are formally launched.
        </p>
      </LegalSection>

      <LegalSection heading="Limitation of liability">
        <p>
          To the maximum extent permitted by law, Doobie is not liable for any indirect,
          incidental, or consequential damages arising from your use of the Site.
        </p>
      </LegalSection>

      <LegalSection heading="Changes to these terms">
        <p>
          We may revise these terms from time to time. Continued use of the Site after changes are
          posted constitutes acceptance of the updated terms.
        </p>
      </LegalSection>

      <LegalSection heading="Governing law">
        <p>
          These terms are governed by the laws of the State of New York, United States, without
          regard to conflict-of-law principles.
        </p>
      </LegalSection>
    </LegalLayout>
  );
}
