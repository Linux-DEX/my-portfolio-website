import Card from "../Card/Card";
import "./ProjectGrid.css";
import ecommerce from "../../assets/ecommerce.png";
import moodmate from "../../assets/moodmate.png";
import kanban from "../../assets/kanban.png";
import qtile from "../../assets/qtile.jpg";
import pdfview from "../../assets/pdfview.png";
import youtube from "../../assets/youtube.png";
import estate from "../../assets/estate.png";
import fluttertodo from "../../assets/fluttertodo.png";
import musicapp from "../../assets/musicapp.png";

const ProjectGrid = () => {
  return (
    <div className="ProjectGrid">
      <a
        target="_blank"
        href="https://github.com/Linux-DEX/Kanban_Board_project.git"
      >
        <Card
          image={kanban}
          title="KanBan Board"
          description="Web development"
        />
      </a>
      <a target="_blank" href="https://github.com/Linux-DEX/Qtile.git">
        <Card
          image={qtile}
          title="Arch Linux"
          description="Custom Linux Configuration"
        />
      </a>
      <a
        target="_blank"
        href="https://github.com/Linux-DEX/youtube_clone-main.git"
      >
        <Card
          image={youtube}
          title="YouTube Clone"
          description="Web development"
        />
      </a>
      <div className="large-card">
        <a
          target="_blank"
          href="https://github.com/Linux-DEX/MERN-E-Commerce-fullstack.git"
        >
          <Card
            image={ecommerce}
            title="E-Commerce Website"
            description="Web development"
          />
        </a>
      </div>
      <a
        target="_blank"
        href="https://github.com/Linux-DEX/extract-pdf-mern.git"
      >
        <Card
          image={pdfview}
          title="pdf Viewer App"
          description="Web development"
        />
      </a>
      <a
        target="_blank"
        href="https://github.com/Linux-DEX/real-estate-website.git"
      >
        <Card
          image={estate}
          title="Real Estate Website"
          description="Web development"
        />
      </a>
      <a
        target="_blank"
        href="https://github.com/Linux-DEX/TODO-app-flutter.git"
      >
        <Card
          image={fluttertodo}
          title="Todo App"
          description="App development"
        />
      </a>
      <div className="large-card">
        <a target="_blank" href="https://github.com/Linux-DEX/moodmate.git">
          <Card
            image={moodmate}
            title="Mental Health App"
            description="App development"
          />
        </a>
      </div>
      <a
        target="_blank"
        href="https://github.com/Linux-DEX/MusicApp-Android.git"
      >
        <Card
          image={musicapp}
          title="Music player App"
          description="App development"
        />
      </a>
    </div>
  );
};

export default ProjectGrid;
