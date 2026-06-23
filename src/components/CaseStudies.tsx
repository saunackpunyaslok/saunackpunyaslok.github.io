import "./styles/CaseStudies.css";

const studies = [
  {
    label: "Flagship account · deep dive",
    org: "Omnicom / DDB Mudra · Apr 2025 - Present",
    headline:
      "Managing Royal Enfield's digital presence across 43+ global markets",
    sub: "End-to-end account ownership · ₹12 Cr+ portfolio",
    stats: [
      { num: "43+", label: "Global markets managed" },
      { num: "₹12 Cr+", label: "Portfolio value overseen" },
      { num: "2", label: "Concurrent enterprise accounts" },
    ],
    paras: [
      "I manage the end-to-end digital account delivery for Royal Enfield, one of the world's most iconic motorcycle brands, across 43+ global markets. This spans website launches, platform updates, release cycles, QA coordination, and multi-region stakeholder alignment with brand, technology, and vendor teams.",
      "Simultaneously, I run social media operations, campaign tracking, reporting, and performance analytics for Adani Realty and Adani Electricity. I've built KPI dashboards to support campaign optimisation and data-driven decisions, while collaborating with creative, media, and internal stakeholder teams to ensure smooth execution across delivery timelines.",
      "On the operations side, I own the full financial cycle (budgeting, forecasting, invoicing, and operational planning) for a ₹12 Cr+ portfolio.",
    ],
  },
  {
    label: "Growth case study · deep dive",
    org: "Cerebronics Technology · Mar 2024 - Mar 2025 · Bengaluru",
    headline:
      "Driving 35%+ customer acquisition for an Aquaphonics Farming product",
    sub: "Full-funnel GTM ownership · Paid + Organic · A/B experimentation",
    stats: [
      { num: "35%+", label: "Customer acquisition lift post-launch" },
      { num: "25%+", label: "CTR improvement across campaigns" },
      { num: "↓ CPA", label: "Reduced cost per acquisition" },
    ],
    paras: [
      "I owned the complete go-to-market strategy for a first-of-its-kind Aquaphonics Farming product, translating highly complex aquaculture concepts into high-conversion digital narratives across YouTube, Instagram, and search.",
      "Built and executed full-funnel paid and organic campaigns from scratch. Ran structured A/B experiments across creatives and landing pages to continuously optimise performance. Deployed real-time dashboards tracking acquisition, engagement, and funnel metrics for rapid, data-driven iteration.",
      "Collaborated cross-functionally with product and creative teams to align user acquisition strategies with product adoption and retention goals. The result: a 35%+ increase in customer acquisition post-launch with significantly reduced cost per acquisition.",
    ],
  },
];

const CaseStudies = () => {
  return (
    <div className="cases-section" id="case-studies">
      <div className="cases-container section-container">
        <h2>
          Case <span>Studies</span>
        </h2>

        {studies.map((study) => (
          <div className="case-panel" key={study.headline}>
            <span className="case-label">{study.label}</span>
            <span className="case-org">{study.org}</span>
            <h3>{study.headline}</h3>
            <p className="case-sub">{study.sub}</p>

            <div className="case-stats">
              {study.stats.map((stat) => (
                <div className="case-stat" key={stat.label}>
                  <span>{stat.num}</span>
                  <small>{stat.label}</small>
                </div>
              ))}
            </div>

            <div className="case-body">
              {study.paras.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CaseStudies;
