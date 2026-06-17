import Link from "next/link";

interface LegalConsentNoticeProps {
  className?: string;
  tone?: "light" | "dark";
}

export function LegalConsentNotice({ className = "", tone = "light" }: LegalConsentNoticeProps) {
  const textClass = tone === "dark" ? "text-emerald-100/75" : "text-slate-500";
  const linkClass =
    tone === "dark"
      ? "text-white underline decoration-white/60 underline-offset-2 hover:decoration-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/80"
      : "text-brand-green underline decoration-brand-green/40 underline-offset-2 hover:text-brand-dark-green hover:decoration-brand-dark-green focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-green/40";

  return (
    <p className={`text-[11px] font-semibold leading-relaxed ${textClass} ${className}`}>
      By continuing, you agree to our{" "}
      <Link href="/terms-and-conditions" className={linkClass}>
        Terms and Conditions
      </Link>{" "}
      and acknowledge our{" "}
      <Link href="/privacy-policy" className={linkClass}>
        Privacy Policy
      </Link>
      .
    </p>
  );
}
