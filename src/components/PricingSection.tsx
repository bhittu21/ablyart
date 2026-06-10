"use client";

import { useState, type ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { OFFICIAL_LINKS } from "@/constants/links";

type BillingTerm = "oneMonth" | "fourMonth";

export type PricingPackage = {
  name: string;
  description: string;
  oneMonth: string;
  oneMonthNote?: string;
  fourMonth: string;
  fourMonthNote?: string;
  bestFor?: string;
  features: string[];
  recommendedBudget?: string;
  bestOutcome?: string;
  badge?: "Most Selected" | "Best Value";
};

type PricingCategory = {
  label: string;
  heading?: string;
  subheading?: string;
  description?: ReactNode;
  supportingDescription?: string;
  note?: string;
  packages: PricingPackage[];
};

type PricingCategoryKey = "growth-marketing" | "performance-marketing" | "social-media" | "seo";

export const pricingData: Record<PricingCategoryKey, PricingCategory> = {
  "growth-marketing": {
    label: "Growth Marketing",
    heading: "Strategic Growth",
    subheading: "Investments",
    description:
      "Choose a focused growth system for visibility, content, outreach, conversion, and campaign improvement.",
    note: "Paid ads management included where listed. Ad spend is paid separately by the client. No hidden media spend inside our pricing.",
    packages: [
      {
        name: "Starter",
        description: "For brands that need the right growth foundation.",
        oneMonth: "$499/mo",
        oneMonthNote: "Best for a fast audit, setup, and first campaign launch.",
        fourMonth: "$399/mo",
        fourMonthNote: "Best for building basic visibility and early lead flow.",
        features: [
          "1 social platform",
          "8 posts/month",
          "1 SEO blog/month",
          "Basic SEO fixes",
          "500 outreach emails/month on 4-month plan",
          "Landing page review",
          "Paid ads setup guidance",
          "Monthly report",
        ],
      },
      {
        name: "Growth Engine",
        description: "For brands ready to build a consistent pipeline.",
        oneMonth: "$999/mo",
        oneMonthNote: "Best for launching a focused growth system.",
        fourMonth: "$749/mo",
        fourMonthNote: "Best for improving content, outreach, ads, and conversion over time.",
        features: [
          "2 social platforms",
          "12 posts/month",
          "2 SEO blogs/month",
          "1 topic cluster/month",
          "On-page and technical SEO",
          "1,500 outreach emails/month on 4-month plan",
          "1 landing page or funnel improvement/month",
          "Paid ads management for 1 platform",
          "Monthly strategy call",
        ],
        badge: "Most Selected",
      },
      {
        name: "Market Domination",
        description: "For brands ready to scale across multiple channels.",
        oneMonth: "$1,799/mo",
        oneMonthNote: "Best for serious growth setup and multi-channel launch.",
        fourMonth: "$1,299/mo",
        fourMonthNote: "Best for scaling the channels that prove traction.",
        features: [
          "3 social platforms",
          "20 posts/month",
          "4 SEO blogs/month",
          "2 topic clusters/month",
          "Technical SEO and Core Web Vitals support",
          "3,500 outreach emails/month on 4-month plan",
          "1 landing page build or major optimization/month",
          "Paid ads management for up to 2 platforms",
          "Weekly update",
          "Monthly dashboard",
        ],
      },
    ],
  },
  "performance-marketing": {
    label: "Performance Marketing",
    heading: "Performance",
    subheading: "Marketing",
    description: "Turn ad spend into tracked leads, sales, and revenue.",
    supportingDescription:
      "Run paid campaigns with clear targeting, better tracking, sharper creatives, and monthly performance improvement.",
    note: "Ad spend is paid separately by the client. No hidden media spend inside our pricing.",
    packages: [
      {
        name: "Scale Starter",
        description: "For validating one paid channel and finding what converts.",
        oneMonth: "$699/mo",
        fourMonth: "$549/mo",
        bestFor: "New campaigns, small ad budgets, and businesses testing paid acquisition.",
        features: [
          "1 ad platform - Google or Meta",
          "Campaign setup or account cleanup",
          "Basic conversion tracking setup",
          "4 static ad creatives/month",
          "2 ad copy variations/month",
          "Landing page review",
          "Weekly campaign checks",
          "Monthly performance report",
        ],
        recommendedBudget: "$500-$2,000/month",
        bestOutcome: "Find the right audience, offer, and campaign angle before scaling.",
      },
      {
        name: "Market Dominator",
        description: "For brands ready to test, improve, and scale paid campaigns.",
        oneMonth: "$1,299/mo",
        fourMonth: "$999/mo",
        bestFor:
          "Businesses with a working offer that want better leads, lower waste, and stronger campaign structure.",
        features: [
          "2 ad platforms - Google, Meta, or LinkedIn",
          "Campaign setup and optimization",
          "Conversion tracking setup",
          "Pixel and CAPI guidance",
          "8 static ad creatives/month",
          "2 short motion or animated creatives/month",
          "4 ad copy variations/month",
          "Audience testing",
          "Offer and landing page feedback",
          "Weekly performance optimization",
          "Bi-weekly strategy update",
          "Monthly ROI report",
        ],
        recommendedBudget: "$2,000-$8,000/month",
        bestOutcome: "Improve cost per lead, conversion quality, and campaign consistency.",
        badge: "Most Selected",
      },
      {
        name: "Enterprise Performance",
        description:
          "For brands with larger ad budgets, multiple paid channels, and advanced tracking needs.",
        oneMonth: "Starts at $2,499/mo",
        fourMonth: "Starts at $1,999/mo",
        bestFor:
          "Established brands that need deeper campaign control, better attribution, and stronger scaling decisions.",
        features: [
          "3+ ad platforms - Google, Meta, LinkedIn, TikTok, or Native Ads",
          "Full campaign structure and optimization",
          "Advanced conversion tracking review",
          "Server-side tracking and CAPI guidance",
          "Creative testing system",
          "Landing page and funnel feedback",
          "Custom performance dashboard",
          "Weekly performance review",
          "Monthly strategy call",
          "Attribution and reporting improvement",
        ],
        recommendedBudget: "$8,000+/month",
        bestOutcome:
          "Scale winning campaigns with clearer tracking, stronger creative testing, and less wasted ad spend.",
      },
    ],
  },
  "social-media": {
    label: "Social Media",
    packages: [
      {
        name: "Baseline Organic",
        description: "For brands that need a clean, active, and consistent social presence.",
        oneMonth: "$399/mo",
        fourMonth: "$299/mo",
        bestFor:
          "Businesses that want to stop looking inactive online and start posting with a clear content direction.",
        features: [
          "2 social platforms",
          "8 custom posts/month",
          "Monthly content calendar",
          "Caption writing",
          "Basic graphic design",
          "Profile bio and CTA review",
          "Basic community management",
          "Monthly analytics overview",
        ],
        bestOutcome:
          "Your brand looks active, clear, and trustworthy across key social channels.",
      },
      {
        name: "Aggressive Growth",
        description:
          "For brands that want stronger content, better consistency, and more audience attention.",
        oneMonth: "$799/mo",
        fourMonth: "$599/mo",
        bestFor:
          "Businesses ready to build a stronger brand presence and publish content with strategy, not random posting.",
        features: [
          "3 social platforms",
          "16 custom posts/month",
          "Static posts, carousels, and simple motion graphics",
          "Monthly content strategy",
          "Caption writing",
          "Graphic design support",
          "Content calendar",
          "Proactive engagement support",
          "Bi-weekly performance review",
          "Monthly analytics report",
        ],
        bestOutcome:
          "Your brand gets stronger visibility, better content quality, and more consistent audience touchpoints.",
        badge: "Most Selected",
      },
      {
        name: "Viral Machinery",
        description:
          "For brands that want high-volume content execution across multiple channels.",
        oneMonth: "$1,499/mo",
        fourMonth: "$1,099/mo",
        bestFor:
          "Brands that need an outsourced content team for social growth, campaign support, and regular publishing.",
        features: [
          "4 social platforms",
          "30 custom posts/month",
          "Static posts, carousels, motion graphics, and short-form video scripts",
          "Advanced content calendar",
          "Creative direction",
          "Community management support",
          "Outbound engagement support",
          "Influencer outreach research",
          "Monthly campaign planning",
          "Weekly performance update",
          "Monthly analytics dashboard",
        ],
        bestOutcome:
          "Your brand publishes at higher volume, tests more content angles, and builds stronger market presence.",
      },
    ],
  },
  "seo": {
    label: "Organic Marketing",
    packages: [
      {
        name: "Local Authority",
        description:
          "For businesses that want better visibility in local search, maps, and nearby buyer searches.",
        oneMonth: "$599/mo",
        fourMonth: "$449/mo",
        bestFor:
          "Local service businesses, clinics, agencies, consultants, and location-based brands.",
        features: [
          "Google Business Profile optimization",
          "Local keyword research",
          "Local service page recommendations",
          "Basic technical SEO audit",
          "On-page SEO for 2 pages",
          "Local schema setup guidance",
          "10 local citations/month",
          "Review strategy guidance",
          "Keyword tracking up to 20 keywords",
          "Monthly visibility report",
        ],
        bestOutcome:
          "Your business becomes easier to find when local buyers search for your service.",
      },
      {
        name: "National Ascend",
        description: "For brands that want organic growth beyond one city or location.",
        oneMonth: "$999/mo",
        fourMonth: "$749/mo",
        bestFor:
          "Businesses targeting competitive keywords, service pages, blogs, and national search visibility.",
        features: [
          "Technical SEO audit and fixes",
          "Search intent mapping",
          "SEO content strategy",
          "2 SEO blogs/month",
          "1 topic cluster/month",
          "On-page SEO for 4 pages",
          "Internal linking improvement",
          "Advanced schema recommendations",
          "Link opportunity research",
          "Keyword tracking up to 50 keywords",
          "Monthly strategy call",
          "Monthly organic performance report",
        ],
        bestOutcome:
          "Your website builds stronger topical authority, better rankings, and more qualified organic traffic.",
        badge: "Most Selected",
      },
      {
        name: "Enterprise Dominance",
        description:
          "For larger websites that need deeper SEO, content architecture, and AI visibility planning.",
        oneMonth: "Starts at $1,999/mo",
        fourMonth: "Starts at $1,499/mo",
        bestFor:
          "SaaS brands, large service websites, marketplaces, directories, and content-heavy businesses.",
        features: [
          "Full technical SEO audit",
          "Site architecture review",
          "Programmatic SEO planning",
          "AEO and GEO content planning",
          "Enterprise content roadmap",
          "Search intent and topic gap analysis",
          "Advanced schema planning",
          "Crawl analysis",
          "Log file review if access is available",
          "Digital PR and link acquisition strategy",
          "Custom organic growth dashboard",
          "Monthly strategy deep-dive",
        ],
        bestOutcome:
          "Your website gets a cleaner SEO structure, stronger content direction, and better visibility across search and AI answer engines.",
      },
    ],
  },
};

export type PricingTableProps = {
  id?: string;
  defaultCategory?: PricingCategoryKey;
};

export default function PricingTable({
  id,
  defaultCategory = "growth-marketing",
}: PricingTableProps = {}) {
  const [activeTab, setActiveTab] = useState<PricingCategoryKey>(defaultCategory);
  const [packageTerms, setPackageTerms] = useState<Record<string, BillingTerm>>({});

  const activeCategory = pricingData[activeTab];
  const selectedTerm = (pkg: PricingPackage) => packageTerms[pkg.name] ?? "fourMonth";
  const getPrice = (pkg: PricingPackage) =>
    selectedTerm(pkg) === "oneMonth" ? pkg.oneMonth : pkg.fourMonth;
  const getNote = (pkg: PricingPackage) =>
    selectedTerm(pkg) === "oneMonth" ? pkg.oneMonthNote : pkg.fourMonthNote;

  return (
    <div id={id || "pricing-table"} className="w-full relative flex flex-col items-center justify-center z-20 overflow-visible mb-24">
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[var(--accent)] opacity-[0.04] blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative w-full">
        <SectionHeader
          badge="Pricing"
          titleBase={activeCategory.heading || "Strategic Growth"}
          titleHighlight={activeCategory.subheading ?? "Investments"}
          subtitle={
            activeCategory.supportingDescription ? (
              <>
                <span className="font-semibold text-gray-300">{activeCategory.description}</span>
                <br />
                {activeCategory.supportingDescription}
              </>
            ) : (
              activeCategory.description || "Select the package that matches your current growth stage and channel focus."
            )
          }
          alignment="center"
        />

        {activeCategory.note && (
          <div className="max-w-3xl mx-auto -mt-8 mb-12 rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 text-center text-sm font-semibold leading-relaxed text-[rgba(240,240,248,0.68)]">
            {activeCategory.note}
          </div>
        )}

        <div className="flex flex-wrap justify-center gap-2 mb-16 p-1.5 bg-white/5 border border-white/10 rounded-2xl md:rounded-full mx-auto max-w-fit shadow-xl backdrop-blur-md">
          {(Object.keys(pricingData) as PricingCategoryKey[]).map((key) => {
            const isActive = activeTab === key;
            return (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`relative px-6 py-3 rounded-xl md:rounded-full text-sm font-bold transition-all duration-300 ${
                  isActive ? "text-black" : "text-gray-400"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="active-pill"
                    className="absolute inset-0 bg-[var(--accent)] rounded-xl md:rounded-full z-0"
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  />
                )}
                <span className="relative z-10">{pricingData[key].label}</span>
              </button>
            );
          })}
        </div>

        <div className="min-h-[600px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -20, filter: "blur(4px)" }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch justify-center"
            >
              {activeCategory.packages.map((pkg) => {
                const term = selectedTerm(pkg);
                const note = getNote(pkg);

                return (
                  <div
                    key={pkg.name}
                    className={`relative flex min-w-0 flex-col bg-[#0b0b0e] p-8 rounded-3xl border transition-all duration-300 ${
                      pkg.badge
                        ? "border-[var(--accent)] shadow-[0_0_40px_rgba(155,255,110,0.1)] lg:-translate-y-4"
                        : "border-white/10"
                    }`}
                  >
                    {pkg.badge && (
                      <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[var(--accent)] text-black font-bold text-xs uppercase tracking-wider py-1.5 px-4 rounded-full shadow-lg whitespace-nowrap">
                        {pkg.badge}
                      </div>
                    )}

                    <div className="flex flex-wrap items-center justify-between gap-3 mb-2">
                      <h3 className="text-xl font-bold text-[#f0f0f8]">{pkg.name}</h3>
                      <div className="flex items-center bg-[#111115] p-0.5 rounded-full border border-white/5 shrink-0">
                        <button
                          onClick={() => setPackageTerms((p) => ({ ...p, [pkg.name]: "oneMonth" }))}
                          className={`text-[9px] font-bold px-2 py-1 flex items-center rounded-full transition-all duration-300 ${
                            term === "oneMonth" ? "bg-white/10 text-white shadow-sm" : "text-gray-500"
                          }`}
                        >
                          1-Month
                        </button>
                        <button
                          onClick={() => setPackageTerms((p) => ({ ...p, [pkg.name]: "fourMonth" }))}
                          className={`text-[9px] font-bold px-2 py-1 flex items-center rounded-full transition-all duration-300 ${
                            term === "fourMonth"
                              ? "bg-[var(--accent)] text-black shadow-[0_0_10px_rgba(155,255,110,0.2)]"
                              : "text-gray-500"
                          }`}
                        >
                          4-Month
                        </button>
                      </div>
                    </div>

                    <p className="text-gray-400 text-sm mb-6 min-h-[40px] leading-relaxed">
                      {pkg.description}
                    </p>

                    <div className="mb-5 border-b border-white/10 pb-7 flex flex-col gap-2">
                      <div className="flex flex-wrap items-baseline gap-2">
                        <span className="text-3xl md:text-4xl font-black text-white break-words">
                          {getPrice(pkg)}
                        </span>
                        <span className="rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-[var(--accent)]">
                          {term === "oneMonth" ? "1-Month" : "4-Month"}
                        </span>
                        {term === "fourMonth" && (
                          <span className="rounded-full border border-[var(--accent)]/20 bg-[var(--accent)]/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-[var(--accent)]">
                            Best Value
                          </span>
                        )}
                      </div>
                      {note && (
                        <span className="text-xs font-medium leading-relaxed text-[var(--accent)]/90">
                          {note}
                        </span>
                      )}
                      {term === "fourMonth" && (
                        <span className="text-xs font-medium leading-relaxed text-gray-500">
                          Recommended for 4 months to build, test, and improve the growth system.
                        </span>
                      )}
                    </div>

                    {pkg.bestFor && (
                      <p className="mb-5 rounded-2xl border border-white/5 bg-white/[0.025] p-4 text-xs leading-relaxed text-gray-400">
                        <span className="font-bold text-gray-300">Best for: </span>
                        {pkg.bestFor}
                      </p>
                    )}

                    <ul className="flex flex-col gap-3.5 mb-7 flex-1">
                      {pkg.features.map((feature) => (
                        <li key={feature} className="flex min-w-0 items-start gap-3">
                          <svg className="w-5 h-5 shrink-0 mt-0.5 text-[var(--accent)]" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="min-w-0 break-words text-[0.95rem] leading-relaxed text-gray-300">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>

                    {pkg.recommendedBudget && (
                      <p className="mb-3 text-xs leading-relaxed text-gray-500">
                        <span className="font-bold text-gray-400">Recommended ad budget: </span>
                        {pkg.recommendedBudget}
                      </p>
                    )}

                    {pkg.bestOutcome && (
                      <p className="mb-7 text-xs leading-relaxed text-gray-500">
                        <span className="font-bold text-gray-400">Best outcome: </span>
                        {pkg.bestOutcome}
                      </p>
                    )}

                    <a
                      href={OFFICIAL_LINKS.calendly}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`mt-auto text-center font-bold py-4 px-6 rounded-xl transition-all duration-300 w-full ${
                        pkg.badge
                          ? "bg-[var(--accent)] text-black hover:bg-[#86ea5c] shadow-[0_0_20px_rgba(155,255,110,0.3)]"
                          : "bg-white/5 text-white hover:bg-white/10"
                      }`}
                    >
                      Book a Discovery Call
                    </a>
                  </div>
                );
              })}
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-16 text-center text-gray-500 text-sm">
          Want a custom hybrid plan combining multiple services?{" "}
          <a
            href={OFFICIAL_LINKS.calendly}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--accent)] underline underline-offset-4 hover:text-[#86ea5c]"
          >
            Let&apos;s talk.
          </a>
        </div>
      </div>
    </div>
  );
}
