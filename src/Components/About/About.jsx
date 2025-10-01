import "./About.css";

const About = () => {
  return (
    <div id="About" className="about-section">
      <div className="about-content">
        <h1 className="about-title">About Me</h1>

        <p className="about-text">
          I’m <strong>Sarabjeet Singh</strong>, a passionate Full Stack Software
          Engineer with hands-on experience building web applications using
          <strong> React.js, FastAPI, and Azure</strong>. I enjoy working across
          the stack — from crafting responsive, user-friendly UIs to engineering
          secure, scalable backend systems.
        </p>

        <p className="about-text">
          I love solving complex challenges, automating workflows, and
          continuously exploring new technologies like Go and system-level
          scripting. I’m also a big fan of <strong>Linux</strong> — I use it
          frequently as my development environment and for scripting, which
          helps me stay efficient, flexible, and closer to the system.
        </p>

        <p className="about-text">
          My mission is to build software that delivers value, scales
          gracefully, and delights users. I’m always excited to collaborate on
          innovative projects and contribute to impactful solutions.
        </p>

        <a
          href="https://drive.google.com/file/d/1w6mnEB90INV5ndu4MtVLG-bF6kIO_DTD/view?usp=share_link"
          download="Sarabjeet_Singh_Resume.pdf"
          className="resume-btn"
        >
          Download Resume
        </a>
      </div>
    </div>
  );
};

export default About;
