import "./styles/About.css";

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-me">
        <img
          className="about-photo"
          src="/images/saunack.jpg"
          alt="Saunack Punyaslok"
        />
        <h3 className="title">About Me</h3>
        <p className="para">
          I manage accounts at scale, not just relationships. My edge is sitting at
          the intersection of brand, technology, and cross-functional delivery, and
          being able to hold it all together across global teams, time zones, and
          competing priorities.
        </p>
        <p className="para">
          At Omnicom / DDB Mudra, I own end-to-end digital delivery for Royal Enfield
          across 43+ global markets, from website launches and platform releases to
          international stakeholder alignment and a ₹12 Cr+ portfolio. I also run
          social operations, campaign tracking, and KPI dashboards for Adani Realty
          and Adani Electricity.
        </p>
        <p className="para">
          Before that, I led brand and product growth at Cerebronics Technology, drove
          corporate communications at Vedanta Limited, and earlier I managed PPC
          campaigns at Leo Burnett for brands like Amazon Solimo, Lee, and Hoegaarden.
        </p>
        <p className="para">
          Outside of work, I'm a theatre actor, content creator, and sketch comedian
          with a YouTube channel and a string of stage performances across India with
          the Auroville Theatre Group.
        </p>
      </div>
    </div>
  );
};

export default About;
