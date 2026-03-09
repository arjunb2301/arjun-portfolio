"use client";

import { useEffect, useMemo, useState } from "react";
import AnimatedBackground from "@/app/components/AnimatedBackground";

type Metric = {
  value: string;
  end?: number;
  prefix?: string;
  suffix?: string;
  label: string;
};

type ExperienceItem = {
  company: string;
  role: string;
  period: string;
  summary: string;
  visibleBullets: string[];
  moreBullets: string[];
};

const heroMetrics: Metric[] = [
  {
    value: "40%",
    end: 40,
    suffix: "%",
    label: "Reverse Logistics Leakage Reduction",
  },
  {
    value: "200%",
    end: 200,
    suffix: "%",
    label: "Business Growth Enabled",
  },
  {
    value: "₹11 Cr",
    end: 11,
    prefix: "₹",
    suffix: " Cr",
    label: "Working Capital Unlocked",
  },
  {
    value: "25% → 8%",
    label: "SLA Breach Reduction",
  },
  {
    value: "20%",
    end: 20,
    suffix: "%",
    label: "Procurement Cost Reduction",
  },
];

const impactMetrics: Metric[] = [
  { value: "50%", end: 50, suffix: "%", label: "Reduction in Return Pendency" },
  { value: "35%", end: 35, suffix: "%", label: "Increase in Sellable SKUs" },
  { value: "97%", end: 97, suffix: "%", label: "SLA Adherence Across Operations Teams" },
  { value: "25%", end: 25, suffix: "%", label: "Customer Satisfaction Improvement" },
  { value: "60%", end: 60, suffix: "%", label: "Reduction in Reverse Operations Leakage" },
  { value: "60 → 28", label: "Days of Inventory Reduced" },
];

const experience: ExperienceItem[] = [
  {
    company: "Shein India (RRVL)",
    role: "Manager – Growth and Strategy",
    period: "Nov 2021 – Present",
    summary:
      "Scaled supply chain readiness, governance and operational capability to support aggressive growth and nationwide expansion.",
    visibleBullets: [
      "Enabled 200% business growth by aligning supply chain readiness with revenue and expansion strategy.",
      "Expanded vendor coverage and increased sellable SKUs by 35%, enabling nationwide scale.",
      "Reduced Mind-to-Market lead time by 50%, accelerating speed-to-shelf.",
      "Improved CSAT by 25% through structured feedback loops and proactive issue resolution.",
    ],
    moreBullets: [
      "Institutionalized supply chain governance frameworks, cutting logistics and warehouse leakages by 45%.",
      "Strengthened vendor integrity through digital checkpoints and audit dashboards, achieving 100% accuracy in stock and sample handovers.",
      "Built structured training programs that improved SLA adherence from 85% to 97% across DC and transport teams.",
      "Streamlined reverse logistics and liquidation processes, improving inventory recovery and stock clearance efficiency by 40%.",
    ],
  },
  {
    company: "Reliance Retail",
    role: "Manager – Supply Chain Control Tower",
    period: "Nov 2021 – Present",
    summary:
      "Led reverse logistics governance, first-mile control and brand-level process transformation across Ajio business operations.",
    visibleBullets: [
      "Reduced overall return pendency by 50% within 4 months.",
      "Cut reverse logistics leakages by 40% through process redesign and governance controls.",
      "Improved first-attempt vendor delivery performance from 85% to 94%.",
      "Enhanced return TAT performance from 50% to 95% of shipments delivered within 60 days.",
    ],
    moreBullets: [
      "Identified process gaps and enhanced process design to reduce overall pendency and leakages by 70% for Lee Cooper, John Players and Portico programs.",
      "Improved return journey performance of shipments by 60%.",
      "Implemented image-based reverse picking from customers and 100% QC in the return leg at warehouse.",
      "Developed seller rating and buyer rating frameworks to improve process accountability.",
      "Analyzed buyer return patterns and identified errant buyers for corrective action.",
      "Partnered with product teams to identify system defects and ensure happier shipment flow.",
      "Improved buyer pick-up first attempt success rate from 72% to 85%.",
      "Improved on-time pick-up compliance from 92% to 98%.",
      "Improved on-time delivery to return processing center from 85% to 95%.",
      "Improved on-time return-to-vendor delivery from 86% to 97%.",
      "Reduced self-ship SLA breaches from 25% to 8% within the first month.",
      "Minimized RTS breaches from 5% to 0.3%.",
      "Introduced new metrics for fully paid orders to improve customer experience.",
      "Supported sellers with Bad/Short GRN cases, improving seller performance through better packaging and process alignment.",
    ],
  },
  {
    company: "Myntra & Flipkart",
    role: "Associate Manager – SCM",
    period: "Jul 2019 – Nov 2021",
    summary:
      "Managed reverse, first-mile and last-mile programs, unlocking working capital and improving operational compliance at scale.",
    visibleBullets: [
      "Released ₹11 Cr worth shipments through AOP monitoring and cross-functional execution.",
      "Reduced reverse operations leakages by 60% within 8 months of monitoring.",
      "Improved GRN compliance from 83% to 98%.",
      "Improved vendor pick-up compliance from 75% to 93%.",
    ],
    moreBullets: [
      "Increased LMDO compliance from 50% to 98% within 2 months of implementation.",
      "Resolved ₹1.28 Cr worth vendor claims through dispute resolution with cross-functional teams.",
      "Improved return delivery speed for Omni Channel Model by introducing new SOPs.",
      "Ensured vendors aligned to return policy in partnership with category teams.",
      "Created new RTV processes and SOPs with cross-functional teams.",
      "Truncated dead inventory from the system by coordinating with Legal and Finance.",
      "Handled 5 times BAU shipments daily within TAT during BBD sale periods.",
      "Reduced last-mile delayed delivery from 4% to 1.5% during sale events.",
      "Maintained SLA breaches within agreed limits.",
      "Coordinated daily pin-code loading and off-loading with Flipkart and tech teams during COVID lockdown.",
      "Led reconciliation and dispute resolution with Flipkart.",
      "Automated trackers to monitor regular movement of shipments.",
      "Was part of the task force that resumed BAU operations within 17 days of lockdown lifting and delivered the biggest EORS event till that point.",
    ],
  },
  {
    company: "Chai Point",
    role: "Deputy Manager – Supply Chain Planning",
    period: "Aug 2018 – Jul 2019",
    summary:
      "Improved planning discipline, reduced cost and supported rapid business expansion through structured forecasting and coordination.",
    visibleBullets: [
      "Reduced procurement cost by 20% through planning and forecasting optimization.",
      "Reduced days of inventory from 60 to 28.",
      "Unlocked ₹2.9 Cr in holding cost savings.",
      "Enabled launch of 50 new stores, 2 warehouses and 200 new corporate accounts.",
    ],
    moreBullets: [
      "Reduced logistics cost by 25% on a monthly basis.",
      "Worked closely with in-house tech teams to develop ERP support for SCM operations.",
      "Implemented Kraljic Matrix, Vendor Performance Report (OTIF) and RACI Matrix for stronger vendor management and inventory availability.",
    ],
  },
  {
    company: "Arvind Mafatlal Group",
    role: "Assistant Manager – SCM",
    period: "May 2017 – Jun 2018",
    summary:
      "Ran warehouse operations and standardization efforts across a large operational footprint.",
    visibleBullets: [
      "Managed end-to-end warehouse operations including forecasting, GRN, production analysis, quality, logistics and reverse logistics.",
      "Led a team of 10 executives and 90 contract workers.",
      "Oversaw operations across a 40,000 sqft warehouse footprint.",
      "Helped standardize warehouse processes using SAP and Excel systems.",
    ],
    moreBullets: [],
  },
  {
    company: "Ericsson Global India Pvt. Ltd.",
    role: "Engineer – 2nd Level Operation",
    period: "Sep 2012 – Sep 2014",
    summary:
      "Improved network operations responsiveness and customer issue resolution.",
    visibleBullets: [
      "Reduced Umobile customer billing problems by 95%.",
      "Reduced customer escalation by 70% for Airtel Bangladesh within 2 months of operations starting.",
    ],
    moreBullets: [],
  },
  {
    company: "Vespa SCM",
    role: "Internship",
    period: "Apr 2016 – Jun 2016",
    summary:
      "Worked on plant-level energy and spare-parts optimization initiatives.",
    visibleBullets: [
      "Reduced energy requirements by 10% across 3 plants in Baramati.",
      "Standardized 34,000+ spare parts across plants.",
      "Reduced inventory cost by 20%.",
      "Accelerated production process by 40%.",
    ],
    moreBullets: [],
  },
];

function CountValue({
  end,
  prefix = "",
  suffix = "",
  fallback,
}: {
  end?: number;
  prefix?: string;
  suffix?: string;
  fallback: string;
}) {
  const [displayValue, setDisplayValue] = useState(fallback);

  useEffect(() => {
    if (end === undefined) {
      setDisplayValue(fallback);
      return;
    }

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reducedMotion) {
      setDisplayValue(`${prefix}${end}${suffix}`);
      return;
    }

    const duration = 1500;
    const start = performance.now();

    const animate = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(end * eased);
      setDisplayValue(`${prefix}${current}${suffix}`);

      if (progress < 1) requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, [end, prefix, suffix, fallback]);

  return <>{displayValue}</>;
}

function MetricCard({
  metric,
  index,
  featured = false,
}: {
  metric: Metric;
  index: number;
  featured?: boolean;
}) {
  return (
    <div
      className={`glass-panel metric-ring metric-pulse relative rounded-[28px] p-6 text-center ${
        featured
          ? "min-h-[190px] md:min-h-[235px] md:scale-[1.035] md:bg-white/[0.10]"
          : "min-h-[165px]"
      }`}
      style={{ animationDelay: `${index * 0.8}s` }}
    >
      <div
        className={`mb-3 ${
          featured ? "text-5xl md:text-7xl" : "text-4xl md:text-5xl"
        } font-semibold tracking-tight`}
      >
        <CountValue
          end={metric.end}
          prefix={metric.prefix}
          suffix={metric.suffix}
          fallback={metric.value}
        />
      </div>
      <p
        className={`mx-auto max-w-[16rem] leading-6 ${
          featured ? "text-base text-white/82 md:text-lg" : "text-sm text-white/75 md:text-base"
        }`}
      >
        {metric.label}
      </p>
    </div>
  );
}

function ExperienceCard({ item, index }: { item: ExperienceItem; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="glass-panel rounded-[30px] p-6 md:p-8"
      style={{
        animation: "fadeUp 0.8s ease both",
        animationDelay: `${index * 0.08}s`,
      }}
    >
      <div className="mb-4 flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="section-label mb-3">Experience</p>
          <h3 className="text-2xl font-semibold md:text-3xl">{item.company}</h3>
          <p className="mt-1 text-base text-white/78 md:text-lg">{item.role}</p>
        </div>
        <div className="tag w-fit">{item.period}</div>
      </div>

      <p className="mb-6 max-w-3xl text-white/70">{item.summary}</p>

      <ul className="space-y-3 text-white/82">
        {item.visibleBullets.map((bullet) => (
          <li key={bullet} className="flex gap-3">
            <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-white/70" />
            <span>{bullet}</span>
          </li>
        ))}

        {open &&
          item.moreBullets.map((bullet) => (
            <li key={bullet} className="flex gap-3">
              <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-white/45" />
              <span className="text-white/72">{bullet}</span>
            </li>
          ))}
      </ul>

      {item.moreBullets.length > 0 && (
        <button
          onClick={() => setOpen((prev) => !prev)}
          className="mt-6 inline-flex items-center rounded-full border border-white/15 bg-white/6 px-4 py-2 text-sm text-white/85 transition hover:bg-white/10"
        >
          {open ? "Show less" : "Show more impact"}
        </button>
      )}
    </div>
  );
}

export default function Home() {
  const capabilityGroups = useMemo(
    () => [
      {
        title: "Operational Leadership",
        items: [
          "Supply Chain Governance",
          "Reverse Logistics",
          "Vendor Management",
          "Control Tower Operations",
        ],
      },
      {
        title: "Planning & Optimization",
        items: [
          "Demand Planning",
          "Inventory Optimization",
          "Forecasting",
          "Warehouse & Distribution",
        ],
      },
      {
        title: "Systems & Analytics",
        items: ["SAP", "Power BI", "Tableau", "Advanced Excel", "SQL"],
      },
      {
        title: "Product & Strategy",
        items: ["Jira", "Miro", "Agile", "SCRUM", "RACI Matrix"],
      },
      {
        title: "Emerging Technology",
        items: ["Python (Basic)", "R (Basic)", "ChatGPT", "Midjourney", "Gemini"],
      },
    ],
    []
  );

  return (
    <main className="relative min-h-screen pb-24 text-white md:pb-16">
      <AnimatedBackground />

      <header className="sticky top-0 z-40 border-b border-white/8 bg-[#120f22]/45 backdrop-blur-xl">
        <div className="section-shell flex items-center justify-between py-4">
          <a
            href="#top"
            className="text-sm font-semibold tracking-[0.18em] text-white/92 uppercase"
          >
            Arjun Bhattacharya
          </a>

          <nav className="hidden items-center gap-9 md:flex">
            <a className="nav-link text-sm" href="#impact">
              Impact
            </a>
            <a className="nav-link text-sm" href="#about">
              About
            </a>
            <a className="nav-link text-sm" href="#experience">
              Experience
            </a>
            <a className="nav-link text-sm" href="#capabilities">
              Capabilities
            </a>
            <a className="nav-link text-sm" href="#contact">
              Contact
            </a>
          </nav>

          <a
            href="mailto:arjun.bhattacharya@outlook.com"
            className="hidden rounded-full border border-white/15 bg-white/8 px-4 py-2 text-sm text-white/85 transition hover:bg-white/12 md:inline-flex"
          >
            Connect
          </a>
        </div>
      </header>

      <section id="top" className="section-shell hero-stage relative pt-24 md:pt-32">
        <div className="fade-up mx-auto max-w-5xl text-center">
          <p className="section-label mb-5">Supply Chain • Strategy • Leadership</p>

          <h1 className="hero-name mx-auto max-w-5xl text-5xl leading-[0.95] md:text-7xl">
            Arjun Bhattacharya
          </h1>

          <p className="fade-up-delay-1 mx-auto mt-7 max-w-4xl px-2 text-lg leading-8 text-white/82 md:max-w-3xl md:text-[1.9rem] md:leading-[3.1rem]">
            Supply Chain &amp; Operations Leader with 11+ years driving large-scale
            retail and e-commerce supply chain transformation through governance,
            operational excellence and cross-functional leadership.
          </p>

          <div className="fade-up-delay-2 mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#experience"
              className="rounded-full bg-white px-7 py-3 text-sm font-medium text-slate-900 transition hover:scale-[1.02]"
            >
              View Experience
            </a>

            <a
              href="/Arjun_Bhattacharya_Resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/15 bg-white/6 px-7 py-3 text-sm font-medium text-white/86 transition hover:bg-white/10"
            >
              Download Resume
            </a>

            <a
              href="https://www.linkedin.com/in/arjun-bhattacharya-80561867/"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/15 bg-white/6 px-7 py-3 text-sm font-medium text-white/86 transition hover:bg-white/10"
            >
              LinkedIn
            </a>
          </div>
        </div>

        <div className="mx-auto mt-20 max-w-6xl md:mt-24">
          <div className="grid gap-5 md:grid-cols-6">
            <div className="md:col-span-2">
              <MetricCard metric={heroMetrics[0]} index={0} />
            </div>
            <div className="md:col-span-2">
              <MetricCard metric={heroMetrics[1]} index={1} featured />
            </div>
            <div className="md:col-span-2">
              <MetricCard metric={heroMetrics[2]} index={2} />
            </div>
            <div className="md:col-start-2 md:col-span-2">
              <MetricCard metric={heroMetrics[4]} index={3} />
            </div>
            <div className="md:col-span-2">
              <MetricCard metric={heroMetrics[3]} index={4} />
            </div>
          </div>
        </div>
      </section>

      <section id="impact" className="section-shell pt-24 md:pt-28">
        <div className="text-center">
          <p className="section-label mb-4">Impact</p>
          <h2 className="text-4xl md:text-5xl">Operational results that scale</h2>
          <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-white/70 md:text-lg">
            A portfolio of improvements across growth, governance, customer experience,
            working capital and operational control.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {impactMetrics.map((metric, idx) => (
            <MetricCard key={metric.label} metric={metric} index={idx} />
          ))}
        </div>
      </section>

      <section id="about" className="section-shell pt-24 md:pt-28">
        <div className="glass-panel rounded-[32px] p-8 md:p-12">
          <p className="section-label mb-4">About</p>
          <h2 className="text-4xl md:text-5xl">Leading with clarity, building with intent</h2>
          <p className="mt-6 max-w-4xl text-lg leading-8 text-white/76">
            I specialize in transforming complex supply chain operations into scalable,
            efficient systems. Over the past 11 years I have led initiatives across retail
            and e-commerce ecosystems including Reliance Retail, Myntra and Flipkart,
            driving measurable impact through governance, analytics and cross-functional
            collaboration.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <span className="tag">Governance-driven execution</span>
            <span className="tag">Cross-functional leadership</span>
            <span className="tag">Operational excellence</span>
            <span className="tag">Business impact</span>
          </div>
        </div>
      </section>

      <section id="experience" className="section-shell pt-24 md:pt-28">
        <div className="mb-10 text-center">
          <p className="section-label mb-4">Experience</p>
          <h2 className="text-4xl md:text-5xl">Career built on measurable outcomes</h2>
          <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-white/70 md:text-lg">
            Visible highlights stay sharp and concise. Expand each card to view deeper
            operational problem-solving, governance improvements and cross-functional wins.
          </p>
        </div>

        <div className="space-y-6">
          {experience.map((item, index) => (
            <ExperienceCard key={`${item.company}-${item.role}`} item={item} index={index} />
          ))}
        </div>
      </section>

      <section id="capabilities" className="section-shell pt-24 md:pt-28">
        <div className="mb-10 text-center">
          <p className="section-label mb-4">Capabilities</p>
          <h2 className="text-4xl md:text-5xl">A leadership toolkit shaped by systems thinking</h2>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {capabilityGroups.map((group) => (
            <div key={group.title} className="glass-panel rounded-[28px] p-6">
              <h3 className="text-2xl">{group.title}</h3>
              <div className="mt-5 flex flex-wrap gap-3">
                {group.items.map((item) => (
                  <span key={item} className="tag">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section-shell pt-24 md:pt-28">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="glass-panel rounded-[30px] p-8">
            <p className="section-label mb-4">Education</p>
            <h2 className="text-4xl md:text-5xl">Foundations</h2>

            <div className="mt-8 space-y-6 text-white/78">
              <div>
                <h3 className="text-xl font-semibold">PGP in Business</h3>
                <p className="mt-1">SDA Bocconi Asia Center, Mumbai • 2017</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold">Diploma in International Business</h3>
                <p className="mt-1">SDA Bocconi, Milan, Italy • 2017</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold">B.E.</h3>
                <p className="mt-1">Bangalore Institute of Technology • 2012</p>
              </div>
            </div>
          </div>

          <div className="glass-panel rounded-[30px] p-8">
            <p className="section-label mb-4">Leadership & Projects</p>
            <h2 className="text-4xl md:text-5xl">Beyond operations</h2>

            <div className="mt-8 space-y-6 text-white/78">
              <div>
                <h3 className="text-xl font-semibold">Token of Achievement</h3>
                <p className="mt-1">
                  Only student to receive recognition for outstanding performance in Leadership course.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold">Co-Founder, Operations Club</h3>
                <p className="mt-1">
                  Co-founded Operations Club at SDA Bocconi Asia Center and organized an Omni-Channel panel discussion within a month of launch.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold">Research & Projects</h3>
                <p className="mt-1">
                  Developed a simulation program for Operations &amp; SCM coursework at SDA Bocconi, Milano, and built a Go-To-Market strategy for an online lottery company entering the Chinese market.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="section-shell pt-24 md:pt-28">
        <div className="glass-panel rounded-[34px] px-6 py-10 text-center md:px-12 md:py-14">
          <p className="section-label mb-4">Contact</p>
          <h2 className="text-4xl md:text-5xl">Let’s connect</h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-white/70 md:text-lg">
            Open to conversations around supply chain leadership, operations transformation,
            strategy, and role opportunities.
          </p>

          <div className="mt-8 flex flex-col items-center gap-4 text-white/82">
            <a href="mailto:arjun.bhattacharya@outlook.com" className="transition hover:text-white">
              arjun.bhattacharya@outlook.com
            </a>
            <a href="tel:+918826960707" className="transition hover:text-white">
              +91 88269 60707
            </a>
            <a
              href="https://www.linkedin.com/in/arjun-bhattacharya-80561867/"
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-white"
            >
              linkedin.com/in/arjun-bhattacharya-80561867
            </a>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <span className="tag">English</span>
            <span className="tag">Bengali</span>
            <span className="tag">Hindi</span>
            <span className="tag">Kannada</span>
            <span className="tag">Photography</span>
            <span className="tag">Cricket</span>
            <span className="tag">Reading</span>
          </div>
        </div>
      </section>

      <nav className="mobile-bottom-nav fixed bottom-3 left-1/2 z-50 flex w-[calc(100%-1.5rem)] max-w-md -translate-x-1/2 items-center justify-between rounded-full border border-white/10 bg-[#140f25]/75 px-4 py-3 backdrop-blur-xl md:hidden">
        <a href="#top" className="text-xs text-white/80">
          Home
        </a>
        <a href="#impact" className="text-xs text-white/80">
          Impact
        </a>
        <a href="#experience" className="text-xs text-white/80">
          Experience
        </a>
        <a href="#capabilities" className="text-xs text-white/80">
          Skills
        </a>
        <a href="#contact" className="text-xs text-white/80">
          Contact
        </a>
      </nav>
    </main>
  );
}