import { useState, useCallback } from "react";
import "./styles/Work.css";
import WorkImage from "./WorkImage";
import { MdArrowBack, MdArrowForward } from "react-icons/md";

const projects = [
  {
    title: "Royal Enfield",
    category: "Global Digital Account · 43+ Markets",
    tools: "Account Delivery, Website Launches, Release Cycles, ₹12 Cr+ Portfolio",
    image: "/images/work/royal-enfield.svg",
    link: "https://www.royalenfield.com",
  },
  {
    title: "Adani Realty & Electricity",
    category: "Social & Performance Marketing",
    tools: "Campaign Tracking, KPI Dashboards, Performance Analytics, Reporting",
    image: "/images/work/adani.svg",
    link: "https://www.adani.com",
  },
  {
    title: "Cerebronics",
    category: "Aquaphonics Farming · Go-to-Market",
    tools: "GTM Strategy, Full-Funnel Growth, A/B Testing, +35% Acquisition",
    image: "/images/work/cerebronics.svg",
    link: "https://saunackp.wixsite.com/portfolio",
  },
  {
    title: "Leo Burnett",
    category: "Performance & PPC Campaigns",
    tools: "PPC, Programmatic & Display, Keyword Strategy, +15% Conversions",
    image: "/images/work/leo-burnett.svg",
    link: "https://www.leoburnett.com",
  },
  {
    title: "Everbloom Cafe",
    category: "HRMS Product Management",
    tools: "Recruitment Module, Applicant Tracking, PF/ESI Automation, 40% Faster Hiring",
    image: "/images/work/everbloom.svg",
    link: "https://www.linkedin.com/in/saunack/",
  },
];

const Work = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goToSlide = useCallback(
    (index: number) => {
      if (isAnimating) return;
      setIsAnimating(true);
      setCurrentIndex(index);
      setTimeout(() => setIsAnimating(false), 500);
    },
    [isAnimating]
  );

  const goToPrev = useCallback(() => {
    const newIndex =
      currentIndex === 0 ? projects.length - 1 : currentIndex - 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  const goToNext = useCallback(() => {
    const newIndex =
      currentIndex === projects.length - 1 ? 0 : currentIndex + 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>

        <div className="carousel-wrapper">
          {/* Navigation Arrows */}
          <button
            className="carousel-arrow carousel-arrow-left"
            onClick={goToPrev}
            aria-label="Previous project"
            data-cursor="disable"
          >
            <MdArrowBack />
          </button>
          <button
            className="carousel-arrow carousel-arrow-right"
            onClick={goToNext}
            aria-label="Next project"
            data-cursor="disable"
          >
            <MdArrowForward />
          </button>

          {/* Slides */}
          <div className="carousel-track-container">
            <div
              className="carousel-track"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {projects.map((project, index) => (
                <div className="carousel-slide" key={index}>
                  <div className="carousel-content">
                    <div className="carousel-info">
                      <div className="carousel-number">
                        <h3>0{index + 1}</h3>
                      </div>
                      <div className="carousel-details">
                        <h4>{project.title}</h4>
                        <p className="carousel-category">
                          {project.category}
                        </p>
                        <div className="carousel-tools">
                          <span className="tools-label">Tools & Features</span>
                          <p>{project.tools}</p>
                        </div>
                      </div>
                    </div>
                    <div className="carousel-image-wrapper">
                      <WorkImage
                        image={project.image}
                        alt={project.title}
                        link={project.link}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dot Indicators */}
          <div className="carousel-dots">
            {projects.map((_, index) => (
              <button
                key={index}
                className={`carousel-dot ${index === currentIndex ? "carousel-dot-active" : ""
                  }`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to project ${index + 1}`}
                data-cursor="disable"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
