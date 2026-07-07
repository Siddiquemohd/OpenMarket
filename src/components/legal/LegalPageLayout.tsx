import React from "react";

interface LegalPageLayoutProps {
  title: string;
  lastUpdated: string;
  intro: React.ReactNode;
  children: React.ReactNode;
}

export function LegalPageLayout({ title, lastUpdated, intro, children }: LegalPageLayoutProps) {
  return (
    <main className="flex-grow bg-white text-slate-700">
      <article className="mx-auto w-full max-w-[880px] px-6 py-8 md:py-12">
        <header className="mb-10 border-b border-slate-200 pb-8">
          <p className="mb-3 text-sm font-bold uppercase tracking-wide text-brand-green">
            Last updated: {lastUpdated}
          </p>
          <h1 className="text-4xl font-black tracking-tight text-brand-navy md:text-5xl">
            {title}
          </h1>
          <div className="mt-5 space-y-4 text-base font-medium leading-8 text-slate-600 md:text-lg">
            {intro}
          </div>
        </header>

        <div className="space-y-9 leading-7">
          {children}
        </div>
      </article>
    </main>
  );
}

interface LegalSectionProps {
  title: string;
  children: React.ReactNode;
}

export function LegalSection({ title, children }: LegalSectionProps) {
  return (
    <section className="scroll-mt-24">
      <h2 className="mb-3 text-xl font-black leading-snug text-brand-navy md:text-2xl">
        {title}
      </h2>
      <div className="space-y-3 text-[15px] font-medium leading-7 text-slate-600 md:text-base">
        {children}
      </div>
    </section>
  );
}
