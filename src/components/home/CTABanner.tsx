import { Button } from "@/components/shared/Button";
import { siteConfig } from "@/data/site-config";

export function CTABanner() {
  return (
    <section className="bg-navy py-16 md:py-20">
      <div className="container-site text-center">
        <h2 className="text-white">Let&apos;s Talk About Your Requirements</h2>
        <p className="mx-auto mt-4 max-w-2xl text-body-lg text-gray-medium">
          Whether you have a detailed technical brief or just an idea, we&apos;re ready to
          listen and advise. Honest feasibility assessment, no sales pressure.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button href="/get-quote" variant="primary" className="min-w-[200px]">
            Start the Conversation
          </Button>
        </div>
        <div className="mt-6 flex flex-col items-center gap-2 text-body-sm text-gray-medium sm:flex-row sm:justify-center sm:gap-6">
          <a href={`mailto:${siteConfig.email}`} className="hover:text-teal transition-colors">
            {siteConfig.email}
          </a>
          <span className="hidden sm:inline">|</span>
          <a href={`tel:${siteConfig.phone.replace(/\D/g, "")}`} className="hover:text-teal transition-colors">
            {siteConfig.phone}
          </a>
        </div>
      </div>
    </section>
  );
}