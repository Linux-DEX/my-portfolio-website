import "./WorkIntro.css";

const WorkIntro = () => {
  return (
    <div className="WorkIntro">
      <div className="WorkIntro-left">
        <h1 className="work-heading">
          My
          <br />
          <span className="work"> Work</span>
        </h1>
        <p className="work-description">Developing innovative solutions with MERN stack and Python, leveraging AWS for robust, scalable applications.</p>
      </div>
          <div className="WorkIntro-right">
        <img src="../../../images/mobile-ani.jpg" alt="work" className="work-img-mobile" />
        <img src="../../../images/web-ani.png" alt="work" className="work-img-web" />
      </div>
    </div>
  );
};

export default WorkIntro;
