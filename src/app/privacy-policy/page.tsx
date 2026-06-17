import type { Metadata } from "next";
import { LegalPageLayout, LegalSection } from "@/components/legal/LegalPageLayout";
import { legalConfig } from "@/lib/legalConfig";

const {
  brandName,
  companyLegalName,
  supportEmail,
  contactNumber,
  registeredAddress,
  lastUpdated,
} = legalConfig;

export const metadata: Metadata = {
  title: `Privacy Policy | ${brandName}`,
  description: `Learn how ${brandName} collects, uses, stores, and protects personal information.`,
  alternates: {
    canonical: "/privacy-policy",
  },
  openGraph: {
    title: `Privacy Policy | ${brandName}`,
    description: `Learn how ${brandName} collects, uses, stores, and protects personal information.`,
    url: "/privacy-policy",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyPolicyPage() {
  return (
    <LegalPageLayout
      title="Privacy Policy"
      lastUpdated={lastUpdated}
      intro={
        <>
          <p>
            This Privacy Policy explains how {brandName}, operated by {companyLegalName}, collects, uses, stores, and shares personal
            information when you visit the website, join the waitlist, verify a mobile number, or interact with related services.
          </p>
          <p>
            It covers information you provide directly, information collected through verification and website technologies, and choices you
            may have in relation to your personal information.
          </p>
        </>
      }
    >
      <LegalSection title="1. Information We Collect">
        <p>
          We may collect personal information needed to operate the website, manage waitlist registrations, verify mobile numbers, improve the
          service, and communicate with interested users.
        </p>
      </LegalSection>

      <LegalSection title="2. Information Provided Directly by Users">
        <p>Information you voluntarily submit may include:</p>
        <ul className="list-disc space-y-2 pl-6">
          <li>Mobile number.</li>
          <li>Communication preferences.</li>
          <li>Business or profile information you choose to provide.</li>
          <li>Messages, feedback, or other information voluntarily submitted by you.</li>
        </ul>
      </LegalSection>

      <LegalSection title="3. Mobile Number and OTP Information">
        <p>
          We may collect your mobile number, OTP verification status, and related verification events. OTPs are used for verification and
          security, including confirming that the number belongs to or is controlled by the person registering interest.
        </p>
      </LegalSection>

      <LegalSection title="4. Automatically Collected Information">
        <p>
          When you use the website, we may collect IP address, device and browser information, waitlist registration date, basic analytics data,
          pages viewed, interaction data, and technical information such as approximate timestamps and error events.
        </p>
      </LegalSection>

      <LegalSection title="5. Cookies and Similar Technologies">
        <p>
          We may use cookies, local storage, or similar technologies to support website functionality, improve performance, remember basic
          preferences, protect the service, and understand aggregate usage patterns.
        </p>
      </LegalSection>

      <LegalSection title="6. How We Use Personal Information">
        <p>We may use personal information to:</p>
        <ul className="list-disc space-y-2 pl-6">
          <li>Register and manage waitlist interest.</li>
          <li>Send and verify OTP codes.</li>
          <li>Provide launch updates and service communications.</li>
          <li>Improve website performance, usability, security, and reliability.</li>
          <li>Detect duplicate, invalid, fraudulent, abusive, or unauthorised activity.</li>
          <li>Respond to enquiries and maintain business records.</li>
        </ul>
      </LegalSection>

      <LegalSection title="7. Legal Basis for Processing, Where Applicable">
        <p>
          Where a legal basis is required, we may process personal information based on your consent, steps taken at your request, our legitimate
          interests in operating and securing the platform, contractual necessity, or compliance with applicable legal obligations.
        </p>
      </LegalSection>

      <LegalSection title="8. Communications and Launch Updates">
        <p>
          We may use your mobile number or submitted contact details to send verification messages, launch updates, service information, and
          related communications. You may request to stop receiving non-essential communications where applicable.
        </p>
      </LegalSection>

      <LegalSection title="9. How We Share Information">
        <p>
          We do not sell personal information to advertisers. We may share information where needed to operate the service, protect users,
          comply with law, complete business operations, or with your consent.
        </p>
      </LegalSection>

      <LegalSection title="10. Service Providers">
        <p>
          We may share limited information with necessary service providers, such as OTP delivery, hosting, database, analytics, communication,
          and security providers. We do not name specific providers here unless they are actually present in the project or service materials.
        </p>
      </LegalSection>

      <LegalSection title="11. Data Retention">
        <p>
          Retention periods depend on operational, security, contractual, and legal requirements. We keep personal information only for as long
          as reasonably needed for the purposes described in this policy, unless a longer period is required or permitted by applicable law.
        </p>
      </LegalSection>

      <LegalSection title="12. Data Security">
        <p>
          We use reasonable organisational and technical measures designed to protect personal information. However, no internet-based system,
          transmission, or storage method can guarantee absolute security.
        </p>
      </LegalSection>

      <LegalSection title="13. International Data Transfers">
        <p>
          Depending on the service providers used to operate the website, personal information may be processed or stored outside your region.
          Where applicable, we aim to use appropriate safeguards for such transfers.
        </p>
      </LegalSection>

      <LegalSection title="14. User Privacy Rights">
        <p>
          Depending on applicable law, you may request access to, correction of, deletion of, or a copy of your personal information. You may
          also object to or restrict certain processing where applicable.
        </p>
      </LegalSection>

      <LegalSection title="15. Withdrawal of Consent">
        <p>
          Where processing is based on consent, you may withdraw that consent where applicable. Withdrawal may affect our ability to provide
          certain services, such as waitlist updates or mobile verification.
        </p>
      </LegalSection>

      <LegalSection title="16. Children’s Privacy">
        <p>
          {brandName} is intended for business users and is not directed to children. We do not knowingly collect personal information from
          children. If you believe a child has provided information, please contact us.
        </p>
      </LegalSection>

      <LegalSection title="17. Third-Party Links">
        <p>
          The website may contain links to third-party websites or services. Their privacy practices are governed by their own policies, and we
          are not responsible for their content or handling of personal information.
        </p>
      </LegalSection>

      <LegalSection title="18. Changes to This Privacy Policy">
        <p>
          We may update this Privacy Policy from time to time. The updated version will be posted on this page with a revised last updated date.
          Please review it periodically.
        </p>
      </LegalSection>

      <LegalSection title="19. Contact Information">
        <p>For privacy questions or requests, contact us at:</p>
        <p>
          {companyLegalName}
          <br />
          {registeredAddress}
          <br />
          Email: <a className="text-brand-green underline underline-offset-2" href={`mailto:${supportEmail}`}>{supportEmail}</a>
          <br />
          Phone: <a className="text-brand-green underline underline-offset-2" href="tel:+919320012345">{contactNumber}</a>
        </p>
      </LegalSection>
    </LegalPageLayout>
  );
}
