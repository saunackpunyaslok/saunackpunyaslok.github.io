import "./styles/Capabilities.css";

const groups = [
  {
    title: "Client & Account Management",
    items: [
      "Stakeholder Management",
      "Account Growth",
      "Pipeline Tracking",
      "Executive Reporting",
      "Client Retention",
      "Escalation Handling",
    ],
  },
  {
    title: "Project & Operations",
    items: [
      "End-to-End Delivery",
      "Process Standardisation",
      "Release Management",
      "QA Coordination",
      "Cross-functional Collab",
    ],
  },
  {
    title: "Product & Growth",
    items: [
      "GTM Strategy",
      "Funnel Optimisation",
      "A/B Testing",
      "CRO",
      "Product Positioning",
      "Content Strategy",
    ],
  },
  {
    title: "Analytics & Tools",
    items: [
      "AEM",
      "Magento",
      "Google Analytics",
      "SQL (Basic)",
      "Airtable",
      "Make (Integromat)",
      "N8N",
    ],
  },
  {
    title: "AI & Automation",
    items: [
      "Prompt Engineering",
      "AI Workflow Design",
      "Bolt",
      "Make Automations",
    ],
  },
  {
    title: "Creative & Communication",
    items: [
      "Content Writing",
      "Copywriting",
      "Script Writing",
      "PR",
      "Brand Storytelling",
    ],
  },
];

const Capabilities = () => {
  return (
    <div className="capabilities-section" id="capabilities">
      <div className="capabilities-container section-container">
        <h2>
          My <span>Capabilities</span>
        </h2>
        <p className="capabilities-intro">
          An AI-certified account manager working at the intersection of brand,
          technology, and delivery. The complete toolkit I bring to enterprise accounts.
        </p>

        <div className="capabilities-grid">
          {groups.map((group) => (
            <div className="capability-card" key={group.title}>
              <h3>{group.title}</h3>
              <div className="capability-tags">
                {group.items.map((item) => (
                  <span className="capability-tag" key={item}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Capabilities;
