import "./Skills.css";

const Skills = () => {
  return (
    <div className="Skills" id="Skills">
      {/* <div className="Skill-top">
        <h1 className="Skill-heading">My Expertise</h1>
      </div>
      <div className="Skill-bottom">
        <div className="Skill-container"></div>
        <div className="Skill-container"></div>
        <div className="Skill-container"></div>
      </div> */}
      <h1 className="Skill-heading">My Expertise</h1>
      <div className="expertise-cards">
        <div className="expertise-card">
          <div className="expertise-head">
            <div className="icon">🖥️</div>
            <h2 className="title">
              <span className="highlight">Software</span> Development
            </h2>
          </div>
          <div className="expertise-card-text">
            <div className="hh">&lt;h3&gt;</div>
            <div className="vl-container">
              <div className="vl"></div>
              <p>
                Experienced in both functional and OOP: Dart, Python, Java,
                JavaScript, TypeScript.
              </p>
            </div>
            <div className="hh">&lt;h3&gt; </div>
          </div>
        </div>
        <div className="expertise-card">
          <div className="expertise-head">
            <div className="icon">⚛️</div>
            <h2 className="title">
              <span className="highlight">Full Stack</span>
              <br />
              Development
            </h2>
          </div>
          <div>&lt;h3&gt; </div>
          <div className="vl-container">
            <div className="vl"></div>
            <p>
              Passionate about UI/UX. Over 1 years of development experience in
              HTML, CSS, JS, React and NextJS frameworks.
            </p>
          </div>
          <div>&lt;h3&gt; </div>
        </div>
        <div className="expertise-card">
          <div className="expertise-head">
            <div className="icon">📱</div>
            <h2 className="title">
              <span className="highlight">Flutter Dev</span>
              <br />
              Android
            </h2>
          </div>
          <div>&lt;h3&gt;</div>
          <div className="vl-container">
            <div className="vl"></div>
            <p>
              Skilled in developing hybrid mobile apps and cross-platform
              solutions using the Flutter framework.
            </p>
          </div>
          <div>&lt;h3&gt; </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
