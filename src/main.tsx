import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// NOTE: StrictMode intentionally double-invokes effects in development. This 3D
// scene sets up an imperative WebGL renderer + GSAP timelines in a single effect,
// so the double-invoke mounts the character twice (a dev-only glitch). Rendering
// without StrictMode keeps dev consistent with the production build.
createRoot(document.getElementById("root")!).render(<App />);
