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
  governingJurisdiction,
} = legalConfig;

export const metadata: Metadata = {
  title: `Terms and Conditions | ${brandName}`,
  description: `Read the terms governing access to and use of ${brandName}, including waitlist registration and mobile verification.`,
  alternates: {
    canonical: "/terms-and-conditions",
  },
  openGraph: {
    title: `Terms and Conditions | ${brandName}`,
    description: `Read the terms governing access to and use of ${brandName}, including waitlist registration and mobile verification.`,
    url: "/terms-and-conditions",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function TermsAndConditionsPage() {
  return (
    <LegalPageLayout
      title="Terms and Conditions"
      lastUpdated={lastUpdated}
      intro={
        <>
          <p>
            These Terms and Conditions apply to your access to and use of {brandName}, a platform operated by {companyLegalName}.
          </p>
          <p>
            By using this website, joining the waitlist, verifying a mobile number, or using any related service, you agree to these terms.
            If you do not agree, please do not use the website or submit your information.
          </p>
        </>
      }
    >
      <LegalSection title="1. Acceptance of the Terms">
        <p>
          These terms form an agreement between you and {companyLegalName} for your use of {brandName}. They apply to website visitors,
          waitlist registrants, and users who interact with mobile number verification or launch-related services.
        </p>
      </LegalSection>

      <LegalSection title="2. Eligibility">
        <p>
          You should use {brandName} only if you are able to enter into a valid agreement and provide accurate information. If you use the
          platform on behalf of a business, you confirm that you are authorised to share information for that business.
        </p>
      </LegalSection>

      <LegalSection title="3. Waitlist Registration">
        <p>
          Waitlist registration helps us understand interest in {brandName} and communicate launch updates. Joining the waitlist does not
          guarantee access, availability, pricing, launch timing, benefits, rewards, membership, or any specific service feature.
        </p>
      </LegalSection>

      <LegalSection title="4. Mobile Number and OTP Verification">
        <p>
          You are responsible for providing a valid mobile number that you are authorised to use. We may send a one-time password or similar
          verification code to confirm the number and protect the waitlist process. OTP codes are private and must not be shared with anyone.
        </p>
      </LegalSection>

      <LegalSection title="5. Accuracy of Information">
        <p>
          You agree that information you submit will be accurate, current, and not misleading. We may reject, suspend, or remove waitlist
          registrations that appear invalid, fraudulent, abusive, duplicate, or inconsistent with these terms.
        </p>
      </LegalSection>

      <LegalSection title="6. Permitted Use">
        <p>
          You may use the website and waitlist features for lawful, personal, or legitimate business purposes related to learning about
          {brandName}, registering interest, and receiving relevant launch communications.
        </p>
      </LegalSection>

      <LegalSection title="7. Prohibited Activities">
        <p>You agree not to misuse the website or services. Prohibited activities include:</p>
        <ul className="list-disc space-y-2 pl-6">
          <li>Submitting false, unauthorised, abusive, or duplicate registrations.</li>
          <li>Attempting to interfere with OTP verification, security features, or platform availability.</li>
          <li>Using automated tools to scrape, spam, overload, or probe the website.</li>
          <li>Impersonating another person, business, or representative.</li>
          <li>Using the website for unlawful, harmful, or misleading activity.</li>
        </ul>
      </LegalSection>

      <LegalSection title="8. Intellectual Property Rights">
        <p>
          The {brandName} name, logo, website content, design elements, text, graphics, and related materials are owned by or licensed to
          {companyLegalName}. You may not copy, modify, distribute, or use them commercially without written permission, except as allowed by law.
        </p>
      </LegalSection>

      <LegalSection title="9. User Communications and Notifications">
        <p>
          By joining the waitlist or verifying a mobile number, you agree that we may contact you about verification, service updates, launch
          information, and related communications. You may request to stop receiving non-essential communications where applicable.
        </p>
      </LegalSection>

      <LegalSection title="10. Third-Party Services and Links">
        <p>
          The website may rely on third-party services for functions such as hosting, OTP delivery, analytics, database operations, communication,
          and security. The website may also link to third-party websites. We are not responsible for third-party content, policies, or services.
        </p>
      </LegalSection>

      <LegalSection title="11. Availability of the Platform">
        <p>
          We aim to keep the website and related services available, but access may be interrupted, delayed, changed, or discontinued due to
          maintenance, technical issues, business decisions, or events outside our reasonable control.
        </p>
      </LegalSection>

      <LegalSection title="12. Disclaimer of Warranties">
        <p>
          The website, waitlist, and related services are provided on an as-is and as-available basis. We do not promise that the website will be
          uninterrupted, error-free, or suitable for every specific purpose.
        </p>
      </LegalSection>

      <LegalSection title="13. Limitation of Liability">
        <p>
          To the extent permitted by applicable law, {companyLegalName} will not be liable for indirect, incidental, special, consequential, or
          punitive losses arising from your use of, or inability to use, the website or waitlist services.
        </p>
      </LegalSection>

      <LegalSection title="14. Indemnification">
        <p>
          You agree to reasonably cooperate with and indemnify {companyLegalName} against claims, losses, liabilities, and expenses arising from
          your misuse of the website, your violation of these terms, or information you submit unlawfully or without authorisation.
        </p>
      </LegalSection>

      <LegalSection title="15. Suspension or Termination">
        <p>
          We may suspend, restrict, or remove access to the website, waitlist, or related communications if we reasonably believe a registration
          or activity is invalid, fraudulent, abusive, duplicate, harmful, or inconsistent with these terms.
        </p>
      </LegalSection>

      <LegalSection title="16. Changes to the Terms">
        <p>
          We may update these terms from time to time. The updated version will be posted on this page with a revised last updated date. Continued
          use of the website or services after changes are posted means you accept the updated terms.
        </p>
      </LegalSection>

      <LegalSection title="17. Governing Law and Jurisdiction">
        <p>
          These terms are governed by the laws of {governingJurisdiction}. Courts or forums in {governingJurisdiction} will have jurisdiction,
          subject to applicable law.
        </p>
      </LegalSection>

      <LegalSection title="18. Contact Information">
        <p>If you have questions about these terms, you can contact us at:</p>
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
