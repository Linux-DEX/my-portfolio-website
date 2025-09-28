import "./Skills.css";
import software_application from "../../assets/software-application.png";
import web_design from "../../assets/web-design.png";
import devops from "../../assets/devops.png";

const Skills = () => {
  return (
    <div className="Skills" id="Skills">
      <h1 className="Skill-heading">My Expertise</h1>
      <div className="expertise-cards">
        <div className="expertise-card">
          <div className="expertise-head">
            <img src={software_application} alt="" className="icon"/>
            <h2 className="title">
              <span className="highlight pink">Software</span> <br /> Engineering
            </h2>
          </div>
          <div className="expertise-card-text">
            <div className="hh">&lt;h3&gt;</div>
            <div className="vl-container">
              <div className="vl"></div>
              <p>
               Strong foundation in core programming and automation : <span className="text-pink"> Python, JAVA, JavaScript, TypeScript, C/C++, GO, Linux, Shell Script(Bash/zsh). </span>
              </p>
            </div>
            <div className="hh">&lt;h3&gt; </div>
          </div>
        </div>
        <div className="expertise-card">
          <div className="expertise-head">
            <img src={web_design} alt="" className="icon" />
            <h2 className="title">
              <span className="highlight blue">Full Stack Web &amp;</span>
              <br />
              Mobile Development
            </h2>
          </div>
          <div className="hh">&lt;h3&gt; </div>
          <div className="vl-container">
            <div className="vl"></div>
            <p>
              Building scalable applications across web and mobile : <span className="text-blue"> React, Next.js, Vite, Typescript, Node.js, Express.js, MongoDB, SQL, Flutter, Dart, Firebase. </span>
            </p>
          </div>
          <div className="hh">&lt;h3&gt; </div>
        </div>
        <div className="expertise-card">
          <div className="expertise-head">
            <img src={devops} alt="" className="icon" />
            <h2 className="title">
              <span className="highlight orange">Cloud &amp; Devops</span>
              <br />
              Engineering
            </h2>
          </div>
          <div className="hh">&lt;h3&gt;</div>
          <div className="vl-container">
            <div className="vl"></div>
            <p>
              Deploying, maintaining, and scaling software in production : <span className="text-orange"> GitHub, Docker, Azure, Azure DevOps, CI/CD, Cloud Infrastructure. </span>
            </p>
          </div>
          <div className="hh">&lt;h3&gt;</div>
        </div>
      </div>
      <img className="skill-back" src="https://tamalsen.dev/wp-content/uploads/2021/12/hello-world-html-code.png" alt="" />
    </div>
  );
};

export default Skills;
