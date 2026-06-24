import { PropsWithChildren } from "react";
import "./styles/CssMarquee.css";

interface Props {
  durationSec?: number;
  className?: string;
}

// Pure-CSS marquee: renders the content twice and animates the track with
// transform: translateX(-50%). No JS, no layout measurement (offsetWidth /
// getBoundingClientRect), so it never forces a reflow or blocks the main thread.
const CssMarquee = ({
  children,
  durationSec = 30,
  className = "",
}: PropsWithChildren<Props>) => {
  return (
    <div className={`cmarquee ${className}`}>
      <div
        className="cmarquee-track"
        style={{ animationDuration: `${durationSec}s` }}
      >
        <div className="cmarquee-group">{children}</div>
        <div className="cmarquee-group" aria-hidden="true">
          {children}
        </div>
      </div>
    </div>
  );
};

export default CssMarquee;
