import { useEffect, useRef } from "react";
import "./styles/Cursor.css";
import gsap from "gsap";

const Cursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const cursor = cursorRef.current!;
    // Custom cursor only applies to a fine pointer (mouse) — skip on touch.
    if (!window.matchMedia("(pointer: fine)").matches) return;

    let hover = false;
    const mousePos = { x: 0, y: 0 };
    const cursorPos = { x: 0, y: 0 };
    // quickSetter writes the transform directly each frame with minimal overhead
    // (no per-frame tween allocation), so the loop no longer churns the main thread.
    const setX = gsap.quickSetter(cursor, "x", "px");
    const setY = gsap.quickSetter(cursor, "y", "px");

    const onMouseMove = (e: MouseEvent) => {
      mousePos.x = e.clientX;
      mousePos.y = e.clientY;
    };
    document.addEventListener("mousemove", onMouseMove);

    let rafId = requestAnimationFrame(function loop() {
      rafId = requestAnimationFrame(loop);
      if (!hover) {
        cursorPos.x += (mousePos.x - cursorPos.x) / 6;
        cursorPos.y += (mousePos.y - cursorPos.y) / 6;
        setX(cursorPos.x);
        setY(cursorPos.y);
      }
    });

    document.querySelectorAll("[data-cursor]").forEach((item) => {
      const element = item as HTMLElement;
      element.addEventListener("mouseover", (e: MouseEvent) => {
        const target = e.currentTarget as HTMLElement;
        const rect = target.getBoundingClientRect();

        if (element.dataset.cursor === "icons") {
          cursor.classList.add("cursor-icons");

          gsap.to(cursor, { x: rect.left, y: rect.top, duration: 0.1 });
          //   cursor.style.transform = `translate(${rect.left}px,${rect.top}px)`;
          cursor.style.setProperty("--cursorH", `${rect.height}px`);
          hover = true;
        }
        if (element.dataset.cursor === "disable") {
          cursor.classList.add("cursor-disable");
        }
      });
      element.addEventListener("mouseout", () => {
        cursor.classList.remove("cursor-disable", "cursor-icons");
        hover = false;
      });
    });

    return () => {
      cancelAnimationFrame(rafId);
      document.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return <div className="cursor-main" ref={cursorRef}></div>;
};

export default Cursor;
