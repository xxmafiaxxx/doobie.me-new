import type { Metadata } from "next";
import LegalLayout, { LegalSection } from "@/components/layout/LegalLayout";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Doobie Drone Deliveries collects, uses, and protects your personal information when you use our website and drone delivery services.",
  alternates: { canonical: "/privacy" },
  robots: { index: true, follow: true },
};

export default function PrivacyPage() {
  return (
    <LegalLayout
      title="Privacy Policy"
      description="Your privacy matters. This policy explains what we collect and how we use it."
      slug="privacy"
      updated="June 18, 2026"
    >
      <LegalSection heading="Overview">
        <p>
          Doobie Drone Deliveries (&ldquo;Doobie,&rdquo; &ldquo;we,&rdquo; &ldquo;us&rdquo;) respects your
          privacy. This policy describes what information we collect through our website at
          doobie.me, how we use it, and the choices you have.
        </p>
      </LegalSection>

      <LegalSection heading="Information we collect">
        <p>We collect information you provide directly, such as:</p>
        <ul className="ml-5 list-disc space-y-1">
          <li>Contact details (name, email, phone) when you submit a form.</li>
          <li>Location details (like a ZIP code) you share for service-area priority.</li>
          <li>Messages you send us through our contact form.</li>
        </ul>
        <p>
          We also collect basic, non-identifying analytics about how the site is used, such as
          pages visited and approximate region, through our analytics provider.
        </p>
      </LegalSection>

      <LegalSection heading="How we use information">
        <ul className="ml-5 list-disc space-y-1">
          <li>To respond to your inquiries and provide early-access updates.</li>
          <li>To notify you when drone delivery becomes available in your area.</li>
          <li>To improve our website, services, and content.</li>
          <li>To comply with legal obligations.</li>
        </ul>
      </LegalSection>

      <LegalSection heading="Cookies and analytics">
        <p>
          We use cookies and similar technologies to understand site usage and improve your
          experience. We use a tag manager and analytics tools to collect aggregate, non-personal
          data. You can control cookies through your browser settings.
        </p>
      </LegalSection>

      <LegalSection heading="Sharing your information">
        <p>
          We do not sell your personal information. We may share data with trusted service
          providers (such as analytics or email tools) who process it on our behalf under
          appropriate safeguards, or where required by law.
        </p>
      </LegalSection>

      <LegalSection heading="Your choices">
        <p>
          You can unsubscribe from our emails at any time using the link in any message, or by
          emailing us. You may also request access to, correction of, or deletion of your personal
          information by contacting us.
        </p>
      </LegalSection>

      <LegalSection heading="Data retention">
        <p>
          We keep your information only as long as needed for the purposes described here or as
          required by law, then delete or anonymize it.
        </p>
      </LegalSection>

      <LegalSection heading="Children's privacy">
        <p>
          Our services are not directed to children under 13, and we do not knowingly collect
          personal information from them.
        </p>
      </LegalSection>

      <LegalSection heading="Changes to this policy">
        <p>
          We may update this policy from time to time. We'll post the updated version here with a
          revised date.
        </p>
      </LegalSection>
    </LegalLayout>
  );
}
