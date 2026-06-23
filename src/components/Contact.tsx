import type { CSSProperties } from "react";
import {
  FaEnvelope,
  FaFolderOpen,
  FaInstagram,
  FaLinkedinIn,
  FaLocationDot,
  FaPhone,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";
import { MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const EMAIL = "saunackpunyaslok@gmail.com";

const socials = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/saunack/",
    icon: <FaLinkedinIn />,
    color: "#60a5fa",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/saunack/",
    icon: <FaInstagram />,
    color: "#fb7185",
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/SaunackPunyaslok",
    icon: <FaYoutube />,
    color: "#f87171",
  },
  {
    label: "Twitter",
    href: "https://x.com/saunackp",
    icon: <FaXTwitter />,
    color: "#38bdf8",
  },
  {
    label: "Work Samples",
    href: "https://drive.google.com/drive/folders/1w269j_J1mcRd0wYKMitUgS4SyIgSC9Rm",
    icon: <FaFolderOpen />,
    color: "#a3e635",
  },
];

const Contact = () => {
  return (
    <div className="contact-section" id="contact">
      <div className="contact-container">
        <span className="contact-eyebrow">Get in touch</span>
        <h2 className="contact-title">
          Let's build something <span>great</span> together.
        </h2>
        <p className="contact-cta">
          Open to senior account management and client solutions roles, plus
          creative collaborations across theatre and content. If you're building
          something ambitious, let's talk.
        </p>

        <a
          className="contact-email"
          href={`mailto:${EMAIL}`}
          data-cursor="disable"
        >
          <FaEnvelope />
          {EMAIL}
        </a>

        <div className="contact-meta">
          <a
            className="contact-meta-line"
            href="tel:+917504419644"
            data-cursor="disable"
          >
            <FaPhone />
            +91 75044 19644
          </a>
          <span className="contact-meta-line">
            <FaLocationDot />
            Bengaluru, India · Hybrid / Remote / On-site
          </span>
        </div>

        <div className="contact-socials">
          {socials.map((social) => (
            <a
              key={social.label}
              className="social-pill"
              style={{ "--pill": social.color } as CSSProperties}
              href={social.href}
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
            >
              <span className="social-pill-icon">{social.icon}</span>
              {social.label}
            </a>
          ))}
        </div>

        <div className="contact-footer">
          <span>
            <MdCopyright /> 2026 Saunack Punyaslok
          </span>
          <span className="contact-footer-note">Built with care</span>
        </div>
      </div>
    </div>
  );
};

export default Contact;
