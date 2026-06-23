import "./styles/Snapshot.css";

const stats = [
  { num: "43+", label: "Global markets managed" },
  { num: "₹12 Cr+", label: "Portfolio overseen" },
  { num: "35%+", label: "Customer acquisition lift" },
  { num: "25%+", label: "CTR improvement" },
  { num: "40%", label: "Hiring time reduced" },
  { num: "3+", label: "Years experience" },
];

const openTo = [
  "Account Management",
  "Customer Success",
  "Brand Management",
  "Product Management",
  "Global Delivery",
  "GTM Strategy",
  "Stakeholder Management",
];

const facts = [
  { label: "Current role", value: "Senior Client Solutions Partner" },
  { label: "Company", value: "Omnicom / DDB Mudra" },
  { label: "Experience", value: "3+ Years" },
  { label: "Education", value: "MA, Christ University · B.Tech, BML Munjal" },
  { label: "Also", value: "Actor · Content Creator · AI Builder" },
  { label: "Location", value: "Bengaluru, India" },
  { label: "Open to", value: "Hybrid / Remote / On-site" },
];

const Snapshot = () => {
  return (
    <div className="snapshot-section" id="snapshot">
      <div className="snapshot-container section-container">
        <div className="snapshot-stats">
          {stats.map((stat) => (
            <div className="snapshot-stat" key={stat.label}>
              <span>{stat.num}</span>
              <small>{stat.label}</small>
            </div>
          ))}
        </div>

        <div className="snapshot-grid">
          <div className="snapshot-col">
            <div className="snapshot-badge">
              <span className="snapshot-badge-icon">AI</span>
              <div className="snapshot-badge-text">
                <h4>Senior Account Manager</h4>
                <p>AI PM Accelerator · GenAI Mastermind · Make · N8N</p>
              </div>
            </div>

            <h3 className="snapshot-subtitle">Open to opportunities in</h3>
            <div className="snapshot-pills">
              {openTo.map((item) => (
                <span className="snapshot-pill" key={item}>
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="snapshot-facts">
            {facts.map((fact) => (
              <div className="snapshot-fact" key={fact.label}>
                <span className="fact-label">{fact.label}</span>
                <span className="fact-value">{fact.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Snapshot;
