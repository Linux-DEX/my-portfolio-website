import "./Home.css";
import man from "../../assets/man.png";

const Home = () => {
  return (
    <div id="Home" className="Home">
      <div className="Home-left">
        <h2 className="small-text hi">Hi!, I&apos;m</h2>
        <h1 className="big-text">Sarabjeet Singh</h1>
        <hr />
        <h2 className="small-text">Aspiring</h2>
        <h1 className="big-text">Full Stack Developer</h1>
        <p className="micro-text">
          with a passion for solving problems that involve creativity and
          innovation
        </p>
      </div>
      <div className="Home-right">
        <div className="imgContainer">
          <img src={man} alt="sarabjeet" className="img" />
        </div>
      </div>
      <div className="down-arrow"></div>
    </div>
  );
};

export default Home;
