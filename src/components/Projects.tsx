import "./styles/Projects.css";

const projects = [
  {
    org: "Leo Burnett · Bengaluru",
    dates: "Nov 2022 - Jan 2023",
    title: "Campaign Management",
    sub: "Amazon Solimo · Lee · Hoegaarden",
    stats: [
      { num: "15%", label: "Conversion lift" },
      { num: "30%", label: "Engagement lift" },
    ],
    desc: "Managed PPC campaigns for Amazon Solimo, Lee, and Hoegaarden, optimising ad spend and improving conversions. Executed programmatic and display ad strategies that increased audience engagement, and conducted keyword and competitive analysis to refine targeting and bidding strategies.",
    tags: [
      "PPC",
      "Programmatic",
      "Display Ads",
      "Keyword Analysis",
      "Campaign Optimisation",
    ],
  },
  {
    org: "Everbloom Cafe · Bhubaneswar",
    dates: "Jan 2025 - Mar 2025",
    title: "HRMS Product Management",
    sub: "Recruitment · Onboarding · Staff Tracking",
    stats: [
      { num: "40%", label: "Reduction in hiring time" },
      { num: "Auto", label: "PF/ESI compliance" },
    ],
    desc: "Designed an automated recruitment module to manage job postings, applicant tracking, and digital onboarding. Integrated dynamic wage calculations (fixed and performance-based incentives) and automated PF/ESI compliance. Built a barista and kitchen staff training tracker and created real-time dashboards for productivity, customer service ratings, and retention.",
    tags: [
      "Product Management",
      "HRMS",
      "Automation",
      "Dashboard Design",
      "Compliance",
    ],
  },
];

const Projects = () => {
  return (
    <div className="projects-section" id="projects">
      <div className="projects-container section-container">
        <h2>
          Selected <span>Projects</span>
        </h2>
        <p className="projects-intro">
          Focused engagements where I owned the brief end to end, from campaign
          performance to product builds.
        </p>

        <div className="projects-grid">
          {projects.map((project) => (
            <div className="project-card" key={project.title}>
              <span className="project-eyebrow">
                {project.org} · {project.dates}
              </span>
              <h3>{project.title}</h3>
              <span className="project-sub">{project.sub}</span>

              <div className="project-stats">
                {project.stats.map((stat) => (
                  <div className="project-stat" key={stat.label}>
                    <span>{stat.num}</span>
                    <small>{stat.label}</small>
                  </div>
                ))}
              </div>

              <p>{project.desc}</p>

              <div className="project-tags">
                {project.tags.map((tag) => (
                  <span className="project-tag" key={tag}>
                    {tag}
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

export default Projects;
