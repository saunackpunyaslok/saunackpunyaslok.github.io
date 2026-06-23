import type { CSSProperties } from "react";
import Marquee from "react-fast-marquee";
import "./styles/Brands.css";

const brands = [
  { name: "Royal Enfield", color: "#8b7cf6" },
  { name: "Adani Realty", color: "#2dd4bf" },
  { name: "Adani Electricity", color: "#fbbf24" },
  { name: "Amazon Solimo", color: "#fb7185" },
  { name: "Lee", color: "#60a5fa" },
  { name: "Hoegaarden", color: "#a3e635" },
  { name: "Vedanta Limited", color: "#8b7cf6" },
  { name: "Cerebronics Technology", color: "#2dd4bf" },
  { name: "Leo Burnett", color: "#fbbf24" },
  { name: "Kanvic Consulting", color: "#fb7185" },
  { name: "Everbloom Cafe", color: "#60a5fa" },
];

const Brands = () => {
  return (
    <div className="brands-section">
      <div className="brands-head section-container">
        <span className="brands-label">Brand Universe</span>
        <h3>Brands and accounts I've delivered for</h3>
      </div>
      <div className="brands-marquee">
        <Marquee autoFill pauseOnHover speed={40} gradient={false}>
          {brands.map((brand) => (
            <span
              className="brand-chip"
              style={{ "--chip": brand.color } as CSSProperties}
              key={brand.name}
            >
              {brand.name}
            </span>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default Brands;
