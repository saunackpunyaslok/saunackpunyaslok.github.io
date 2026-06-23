import "./styles/Creative.css";
import type { CSSProperties } from "react";
import {
  FaFolderOpen,
  FaInstagram,
  FaPlay,
  FaUpRightFromSquare,
  FaYoutube,
} from "react-icons/fa6";

const CHANNEL = "https://www.youtube.com/SaunackPunyaslok";

const sketches = [
  {
    emoji: "🥔",
    title: "Technical Guruji Parody: Aloo Unboxing",
    cat: "Parody",
    color: "#fb7185",
    desc: "Benaam Chaudhary does an unboxing of Aloo and announces the Aloo giveaway, a parody of the famous tech YouTuber Technical Guruji.",
  },
  {
    emoji: "🎓",
    title: "2021 Graduate Problems",
    cat: "Commentary",
    color: "#8b7cf6",
    desc: "The unique struggles a 2021 graduate had to face, and why the timing made it so much worse than any other year.",
  },
  {
    emoji: "🎤",
    title: "Open Mic: KaranSinghMagic",
    cat: "Live Performance",
    color: "#2dd4bf",
    desc: "Performed with fictional character Sam in front of KaranSinghMagic via a Google Meet open mic. A live audience performance.",
  },
  {
    emoji: "📱",
    title: "Instagram Search Sketch",
    cat: "Sketch",
    color: "#fbbf24",
    desc: "A sketch about what happens every time you browse through your Instagram search. Inspired by very real experiences.",
  },
  {
    emoji: "🙅",
    title: "Sam: Dual Character Sketch",
    cat: "Character Sketch",
    color: "#60a5fa",
    desc: "A funny dual character sketch showing how intolerable fictional character Sam truly is, and the chaos that follows.",
  },
  {
    emoji: "🏞️",
    title: "Sam in a Closed Park (Lockdown Sketch)",
    cat: "Sketch",
    color: "#a3e635",
    desc: "Sam goes inside a closed park during the lockdown and what follows is complete, avoidable chaos. A sketch.",
  },
];

const theatre = [
  {
    title: "Dastaan-e-Faqirchand",
    kind: "Hindi Play",
    role: "Raja Faqirchand (lead)",
    desc: "A comedy play. Portrayed a khadus king whose stupidity causes one incident after another.",
  },
  {
    title: "Log Kya Kahenge",
    kind: "Hindi Play",
    role: "Sunglasses seller · Birbal · Crowd",
    desc: "Played a sunglasses seller, Birbal, and a crowd character across multiple moments in the play.",
  },
  {
    title: "Will You Accept Me",
    kind: "English Play",
    role: "Narrator",
    desc: "Narrated the link between the old and modern era, exploring the struggles the LGBTQ community faces.",
  },
  {
    title: "The Brooklyn Quartet",
    kind: "Multi-city Tour",
    role: "Stage Manager · Misc. character",
    desc: "Stage Manager and a miscellaneous character on a touring production performed across different cities.",
  },
  {
    title: "Mrityunjaya Theatre Society",
    kind: "BML Munjal University",
    role: "Core Member · Instructor",
    desc: "Core member of the university theatre society. Taught theatre basics to ~200 students in just 7 days.",
  },
];

const DRIVE_LINK =
  "https://drive.google.com/drive/folders/1w269j_J1mcRd0wYKMitUgS4SyIgSC9Rm";

const Creative = () => {
  return (
    <div className="creative-section" id="creative">
      <div className="creative-container section-container">
        <h2>
          My <span>Creative</span> Side
        </h2>
        <p className="creative-intro">
          Off the clock I write and perform comedy, build content for YouTube and
          Instagram, and take the stage with theatre groups. The storytelling that
          keeps my account and brand work sharp.
        </p>

        <div className="creative-block">
          <h3>YouTube Content &amp; Sketches</h3>
          <p className="creative-block-sub">
            Comedy sketches, parody videos, and character performances featuring
            the fictional characters Benaam Chaudhary and Sam.
          </p>

          <div className="yt-channel">
            <div className="yt-channel-info">
              <span className="yt-channel-label">YouTube Channel</span>
              <h4>Saunack Punyaslok</h4>
              <p>
                Parody videos, comedy sketches, open mic performances, and
                character-driven content, all starring the fictional characters
                Benaam Chaudhary and Sam.
              </p>
            </div>
            <a
              className="yt-channel-btn"
              href={CHANNEL}
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
            >
              <FaPlay /> Visit YouTube Channel <FaUpRightFromSquare />
            </a>
          </div>

          <div className="sketch-cards">
            {sketches.map((sketch) => (
              <div
                className="sketch-card-rich"
                key={sketch.title}
                style={{ "--cat": sketch.color } as CSSProperties}
              >
                <div className="sketch-info">
                  <h5>{sketch.title}</h5>
                  <p>{sketch.desc}</p>
                  <span className="sketch-tag">{sketch.cat}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="yt-more">
            <p>
              Also: Golgappa competition challenge · Mystery Box unboxing parody ·
              and more on the channel.
            </p>
            <a
              className="yt-more-link"
              href={CHANNEL}
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
            >
              View all videos <FaUpRightFromSquare />
            </a>
          </div>
        </div>

        <div className="creative-block">
          <h3>On Stage</h3>
          <div className="creative-theatre">
            {theatre.map((play) => (
              <div className="theatre-card" key={play.title}>
                <span className="theatre-kind">{play.kind}</span>
                <h4>{play.title}</h4>
                <p className="theatre-role">{play.role}</p>
                <p className="theatre-desc">{play.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="creative-block">
          <h3>Miscellaneous Work Samples &amp; Designs</h3>
          <div className="samples-card">
            <p>
              A side folder of miscellaneous samples: branding, copywriting, content,
              and the odd video experiment. Not my core work, just a few bits I've
              made along the way.
            </p>
            <div className="samples-tags">
              {[
                "Branding",
                "Copywriting",
                "Content Writing",
                "Videos",
                "Creative Work",
              ].map((tag) => (
                <span className="samples-tag" key={tag}>
                  {tag}
                </span>
              ))}
            </div>
            <a
              className="samples-link"
              href={DRIVE_LINK}
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
            >
              <FaFolderOpen /> Open Work Samples Drive
            </a>
          </div>
        </div>

        <div className="creative-links">
          <a
            href="https://www.youtube.com/SaunackPunyaslok"
            target="_blank"
            rel="noreferrer"
            className="creative-btn"
            data-cursor="disable"
          >
            <FaYoutube /> Watch on YouTube
          </a>
          <a
            href="https://www.instagram.com/saunack/"
            target="_blank"
            rel="noreferrer"
            className="creative-btn"
            data-cursor="disable"
          >
            <FaInstagram /> Follow on Instagram
          </a>
          <a
            href={DRIVE_LINK}
            target="_blank"
            rel="noreferrer"
            className="creative-btn"
            data-cursor="disable"
          >
            <FaFolderOpen /> Work Samples
          </a>
        </div>
      </div>
    </div>
  );
};

export default Creative;
