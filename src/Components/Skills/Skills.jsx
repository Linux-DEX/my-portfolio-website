import { useState } from "react";
import "./Skills.css";

const categories = [
  {
    title: "Programming Languages",
    skills: [
      {
        name: "Python",
        img: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/python.png",
      },
      {
        name: "JAVA",
        img: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/java.png",
      },
      {
        name: "JavaScript",
        img: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/javascript.png",
      },
      {
        name: "TypeScript",
        img: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/typescript.png",
      },
      {
        name: "C",
        img: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/c.png",
      },
      {
        name: "C++",
        img: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/c++.png",
      },
      {
        name: "GO",
        img: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/go.png",
      },
      {
        name: "Bash",
        img: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/bash.png",
      },
    ],
  },
  {
    title: "Frameworks & Libraries",
    skills: [
      {
        name: "FastAPI",
        img: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/fastapi.png",
      },
      {
        name: "React",
        img: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/react.png",
      },
      {
        name: "NextJS",
        img: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/next_js.png",
      },
      {
        name: "Vite",
        img: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/vite.png",
      },
      {
        name: "Redux",
        img: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/redux.png",
      },
      {
        name: "ExpressJS",
        img: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/express.png",
      },
      {
        name: "Node.js",
        img: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/node_js.png",
      },
      {
        name: "Flutter",
        img: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/flutter.png",
      },
    ],
  },
  {
    title: "Databases",
    skills: [
      {
        name: "MongoDB",
        img: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/mongodb.png",
      },
      {
        name: "MySQL",
        img: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/mysql.png",
      },
      {
        name: "PostgreSQL",
        img: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/postgresql.png",
      },
      {
        name: "Redis",
        img: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/redis.png",
      },
      {
        name: "SQLite",
        img: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/sqlite.png",
      },
    ],
  },
  {
    title: "Tools & Version Control",
    skills: [
      {
        name: "Git",
        img: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/git.png",
      },
      {
        name: "GitHub",
        img: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/github.png",
      },
      {
        name: "Linux",
        img: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/linux.png",
      },
    ],
  },
  {
    title: "Cloud & DevOps",
    skills: [
      {
        name: "Microsoft Azure",
        img: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/microsoft_azure.png",
      },
      {
        name: "Azure DevOps",
        img: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/ci_cd.png",
      },
      {
        name: "Docker",
        img: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/docker.png",
      },
    ],
  },
];

const Skills = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredCategories =
    selectedCategory === "All"
      ? categories
      : categories.filter((cat) => cat.title === selectedCategory);

  return (
    <div className="skills-section" id="Skills">
      <h1 className="skills-title">My Expertise</h1>

      <div className="skills-topbar">
        <button
          className={`topbar-item ${selectedCategory === "All" ? "active" : ""}`}
          onClick={() => setSelectedCategory("All")}
        >
          All
        </button>
        {categories.map((cat, i) => (
          <button
            key={i}
            className={`topbar-item ${selectedCategory === cat.title ? "active" : ""}`}
            onClick={() => setSelectedCategory(cat.title)}
          >
            {cat.title}
          </button>
        ))}
      </div>

      <div className="skills-scroll-container fade-in">
        {filteredCategories.map((category, i) => (
          <div key={i} className="skills-category">
            <h2 className="category-title">{category.title}</h2>
            <div className="skills-grid">
              {category.skills.map((skill, index) => (
                <div className="skill-card" key={index}>
                  <img src={skill.img} alt={skill.name} />
                  <p>{skill.name}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
