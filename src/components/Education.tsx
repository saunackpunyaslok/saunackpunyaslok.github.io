import "./styles/Education.css";

const items = [
  {
    kind: "Post-graduation",
    title: "MA, Advertising & Corporate Communication",
    org: "Christ University, Bengaluru",
    dates: "Jul 2021 - Jun 2023",
  },
  {
    kind: "Graduation",
    title: "B.Tech, Computer Science & Engineering",
    org: "BML Munjal University, Gurgaon",
    dates: "Aug 2016 - Jun 2020",
  },
  {
    kind: "Certification",
    title: "AI PM Accelerator Program",
    org: "The PM Collective · Built a working MVP",
    dates: "Jun 2025 - Aug 2025",
  },
  {
    kind: "Certification",
    title: "Generative AI Mastermind",
    org: "Outskill · Bolt · Make",
    dates: "Jul 2025",
  },
];

const Education = () => {
  return (
    <div className="education-section" id="education">
      <div className="education-container section-container">
        <h2>
          Education &amp; <span>Certifications</span>
        </h2>

        <div className="education-grid">
          {items.map((item) => (
            <div className="education-card" key={item.title}>
              <span className="education-kind">{item.kind}</span>
              <h3>{item.title}</h3>
              <p className="education-org">{item.org}</p>
              <span className="education-dates">{item.dates}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;
