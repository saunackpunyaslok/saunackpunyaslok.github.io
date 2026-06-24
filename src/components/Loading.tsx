import { useEffect, useState } from "react";
import "./styles/Loading.css";
import { useLoading } from "../context/LoadingProvider";

import CssMarquee from "./CssMarquee";

const Loading = ({ percent }: { percent: number }) => {
  const { setIsLoading } = useLoading();
  const [loaded, setLoaded] = useState(false);
  const [clicked, setClicked] = useState(false);

  // Show the loading screen for a fixed ~1.5s, then reveal the page regardless
  // of how far the 3D model has loaded (the character pops in when it's ready).
  useEffect(() => {
    let active = true;
    const minDelay = new Promise<void>((r) => setTimeout(r, 1000));
    // Don't reveal the page until the web font is actually loaded — otherwise it
    // swaps in after the content paints and reflows every text block (the CLS
    // regression). This triggers the load and resolves when Geist is ready.
    const fontReady = document.fonts
      ? document.fonts.load('1em "Geist"').catch(() => {})
      : Promise.resolve();

    Promise.all([minDelay, fontReady]).then(() => {
      if (!active) return;
      setLoaded(true);
      setClicked(true);
      setTimeout(() => {
        if (!active) return;
        import("./utils/initialFX").then((module) => {
          module.initialFX?.();
        });
        setIsLoading(false);
      }, 500);
    });

    return () => {
      active = false;
    };
  }, []);

  function handleMouseMove(e: React.MouseEvent<HTMLElement>) {
    const { currentTarget: target } = e;
    // Use the event offset instead of getBoundingClientRect() so the handler
    // never reads layout (no forced reflow) on every mouse move.
    target.style.setProperty("--mouse-x", `${e.nativeEvent.offsetX}px`);
    target.style.setProperty("--mouse-y", `${e.nativeEvent.offsetY}px`);
  }

  return (
    <>
      <div className="loading-header">
        <a href="/#" className="loader-title" data-cursor="disable">
          SP
        </a>
        <div className={`loaderGame ${clicked && "loader-out"}`}>
          <div className="loaderGame-container">
            <div className="loaderGame-in">
              {[...Array(27)].map((_, index) => (
                <div className="loaderGame-line" key={index}></div>
              ))}
            </div>
            <div className="loaderGame-ball"></div>
          </div>
        </div>
      </div>
      <div className="loading-screen">
        <div className="loading-marquee">
          <CssMarquee durationSec={22}>
            <span>Saunack Punyaslok</span>
            <span>Saunack Punyaslok</span>
            <span>Saunack Punyaslok</span>
            <span>Saunack Punyaslok</span>
          </CssMarquee>
        </div>
        <div
          className={`loading-wrap ${clicked && "loading-clicked"}`}
          onMouseMove={(e) => handleMouseMove(e)}
        >
          <div className="loading-hover"></div>
          <div className={`loading-button ${loaded && "loading-complete"}`}>
            <div className="loading-container">
              <div className="loading-content">
                <div className="loading-content-in">
                  Loading <span>{percent}%</span>
                </div>
              </div>
              <div className="loading-box"></div>
            </div>
            <div className="loading-content2">
              <span>Welcome</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Loading;

export const setProgress = (setLoading: (value: number) => void) => {
  let percent: number = 0;

  let interval = setInterval(() => {
    if (percent <= 50) {
      let rand = Math.round(Math.random() * 5);
      percent = percent + rand;
      setLoading(percent);
    } else {
      clearInterval(interval);
      interval = setInterval(() => {
        percent = percent + Math.round(Math.random());
        setLoading(percent);
        if (percent > 91) {
          clearInterval(interval);
        }
      }, 2000);
    }
  }, 100);

  function clear() {
    clearInterval(interval);
    setLoading(100);
  }

  function loaded() {
    return new Promise<number>((resolve) => {
      clearInterval(interval);
      interval = setInterval(() => {
        if (percent < 100) {
          percent++;
          setLoading(percent);
        } else {
          resolve(percent);
          clearInterval(interval);
        }
      }, 2);
    });
  }
  return { loaded, percent, clear };
};
