import { lazy, PropsWithChildren, Suspense, useEffect, useState } from "react";
import About from "./About";
import Brands from "./Brands";
import Capabilities from "./Capabilities";
import Career from "./Career";
import CaseStudies from "./CaseStudies";
import Contact from "./Contact";
import Creative from "./Creative";
import Cursor from "./Cursor";
import Education from "./Education";
import Landing from "./Landing";
import Navbar from "./Navbar";
import Projects from "./Projects";
import Snapshot from "./Snapshot";
import SocialIcons from "./SocialIcons";
import WhatIDo from "./WhatIDo";
import Work from "./Work";
import setSplitText from "./utils/splitText";

const TechStack = lazy(() => import("./TechStack"));

const MainContainer = ({ children }: PropsWithChildren) => {
  const [isDesktopView, setIsDesktopView] = useState<boolean>(
    window.innerWidth > 1024
  );

  useEffect(() => {
    const resizeHandler = () => {
      setSplitText();
      setIsDesktopView(window.innerWidth > 1024);
    };
    resizeHandler();
    window.addEventListener("resize", resizeHandler);
    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, [isDesktopView]);

  return (
    <div className="container-main">
      <Cursor />
      <Navbar />
      <SocialIcons />
      {isDesktopView && children}
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <div className="container-main">
            <Landing>{!isDesktopView && children}</Landing>
            <About />
            <WhatIDo />
            <Snapshot />
            <Capabilities />
            <Work />
            <Career />
            <Projects />
            <CaseStudies />
            <Brands />
            {isDesktopView && (
              <Suspense fallback={<div>Loading....</div>}>
                <TechStack />
              </Suspense>
            )}
            <Creative />
            <Education />
            <Contact />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContainer;
