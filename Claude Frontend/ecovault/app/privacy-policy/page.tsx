// ─── Privacy Policy ──────────────────────────────────────────────────────────
import type { Metadata } from 'next'
import { PageHero } from '@/components/layout/PageHero'
import { Container, Section } from '@/components/ui/index'
import { SITE_NAME } from '@/constants'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: `${SITE_NAME} Privacy Policy — how we collect, use, and protect your data.`,
}

const SECTIONS = [
  {
    heading: '1. Information We Collect',
    body: `We collect information you provide directly to us, such as when you create an account, request a pickup, fill out a contact form, or communicate with us. This may include your name, email address, phone number, service address, and billing information. We also automatically collect certain usage information when you visit our website, including your IP address, browser type, and pages visited.`,
  },
  {
    heading: '2. How We Use Your Information',
    body: `We use collected information to provide, maintain, and improve our services; process transactions; send service confirmations, invoices, and important notices; respond to your inquiries; send marketing communications (where you have opted in); and comply with legal obligations. We do not sell or rent your personal information to third parties.`,
  },
  {
    heading: '3. Information Sharing',
    body: `We may share your information with trusted third-party service providers who assist in operating our website and delivering services, subject to confidentiality agreements. We may also disclose information when required by law, to protect our rights, or in connection with a merger or acquisition.`,
  },
  {
    heading: '4. Data Retention',
    body: `We retain personal information for as long as necessary to fulfil the purposes for which it was collected, including to satisfy legal, accounting, or reporting requirements. When data is no longer needed, we securely delete or anonymise it.`,
  },
  {
    heading: '5. Your Rights',
    body: `Depending on your jurisdiction, you may have the right to access, correct, or delete your personal data; object to or restrict certain processing; and data portability. To exercise these rights, please contact us at hello@ecovault.com. We will respond within 30 days.`,
  },
  {
    heading: '6. Cookies',
    body: `Our website uses cookies and similar technologies to enhance your experience, analyse traffic, and personalise content. You can control cookies through your browser settings. Note that disabling cookies may affect some features of our website.`,
  },
  {
    heading: '7. Security',
    body: `We implement industry-standard technical and organisational security measures to protect your personal information against unauthorised access, alteration, disclosure, or destruction. However, no method of transmission over the Internet is 100% secure.`,
  },
  {
    heading: '8. Changes to This Policy',
    body: `We may update this Privacy Policy periodically. When we make material changes, we will notify you via email or a prominent notice on our website. Your continued use of our services after changes become effective constitutes acceptance of the revised policy.`,
  },
  {
    heading: '9. Contact',
    body: `If you have questions about this Privacy Policy or our data practices, please contact our Privacy Team at hello@ecovault.com or write to us at EcoHaul, 348 Industrial Parkway, Green Valley, NY 10023.`,
  },
]

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero
        title="Privacy Policy"
        subtitle={`Last updated: January 1, 2025`}
        breadcrumbs={[{ label: 'Privacy Policy' }]}
      />
      <Section className="bg-white">
        <Container size="md">
          <div className="prose prose-lg max-w-none">
            <p className="text-body-lg text-neutral-700 leading-relaxed mb-10">
              {SITE_NAME} ("we," "us," or "our") is committed to protecting your privacy.
              This Privacy Policy explains how we collect, use, disclose, and safeguard your
              information when you use our website and services.
            </p>
            {SECTIONS.map(({ heading, body }) => (
              <div key={heading} className="mb-8">
                <h2 className="font-display font-bold text-forest text-heading-lg mb-4">{heading}</h2>
                <p className="text-neutral-700 text-body-md leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>
    </>
  )
}
