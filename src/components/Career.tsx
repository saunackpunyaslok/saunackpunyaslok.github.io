import "./styles/Career.css";

const roles = [
  {
    period: "NOW",
    title: "Senior Client Solutions Partner",
    org: "Omnicom / DDB Mudra · Bengaluru",
    dates: "Apr 2025 - Present",
    desc: "End-to-end digital account delivery for Royal Enfield across 43+ global markets: website launches, platform updates, release cycles, and international stakeholder alignment. Managing a ₹12 Cr+ portfolio including budgeting, forecasting, and invoicing, plus social operations, campaign tracking, and KPI dashboards for Adani Realty and Adani Electricity.",
    stats: [
      { num: "43+", label: "Global markets" },
      { num: "₹12 Cr+", label: "Portfolio managed" },
      { num: "2", label: "Enterprise accounts" },
    ],
    tags: [
      "Account Management",
      "Stakeholder Mgmt",
      "Digital Delivery",
      "AEM",
      "KPI Dashboards",
      "Financial Reporting",
    ],
  },
  {
    period: "2024",
    title: "Brand & Product Growth Manager",
    org: "Cerebronics Technology · Bengaluru",
    dates: "Mar 2024 - Mar 2025",
    desc: "Owned GTM strategy for a new Aquaphonics Farming product. Built full-funnel paid and organic marketing across YouTube, Instagram, and search. Ran A/B experiments across creatives and landing pages, and deployed performance dashboards for data-driven iteration while reducing CPA significantly.",
    stats: [
      { num: "35%+", label: "Acquisition lift" },
      { num: "25%+", label: "CTR improvement" },
      { num: "↓ CPA", label: "Cost reduction" },
    ],
    tags: [
      "GTM Strategy",
      "Funnel Optimisation",
      "A/B Testing",
      "CRO",
      "Performance Marketing",
    ],
  },
  {
    period: "2023",
    title: "Associate Manager, Corporate Comms",
    org: "Vedanta Limited · Panaji",
    dates: "Jul 2023 - Feb 2024",
    desc: "Managed internal and external communications across 4 business units. Led PR for the Delhi Half Marathon, coordinating media, government, and community stakeholders. Produced leadership notes, press releases, and CSR and sports event highlights.",
    stats: [
      { num: "4", label: "Business units" },
      { num: "25%+", label: "Engagement growth" },
    ],
    tags: [
      "PR",
      "Corporate Comms",
      "Event Management",
      "Stakeholder Coordination",
    ],
  },
  {
    period: "2020",
    title: "Business Development Associate",
    org: "Kanvic Consulting · Gurgaon",
    dates: "Jan 2020 - Jun 2020",
    desc: "Conducted market research and competitive analysis. Managed Google Analytics and Adwords, executed social campaigns, and implemented on-page SEO strategies to drive lead generation and improve client outreach.",
    stats: [],
    tags: ["Business Development", "SEO", "Google Analytics", "Lead Generation"],
  },
];

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          {roles.map((role) => (
            <div className="career-info-box" key={role.title}>
              <div className="career-info-in">
                <div className="career-role">
                  <h4>{role.title}</h4>
                  <h5>{role.org}</h5>
                  <span className="career-dates">{role.dates}</span>
                </div>
                <h3>{role.period}</h3>
              </div>
              <div className="career-detail">
                <p>{role.desc}</p>
                {role.stats.length > 0 && (
                  <div className="career-stats">
                    {role.stats.map((stat) => (
                      <div className="career-stat" key={stat.label}>
                        <span>{stat.num}</span>
                        <small>{stat.label}</small>
                      </div>
                    ))}
                  </div>
                )}
                <div className="career-tags">
                  {role.tags.map((tag) => (
                    <span className="career-tag" key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Career;
