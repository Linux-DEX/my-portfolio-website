// import { useState } from "react";
// import "./Experience.css";

// const Experience = () => {
//   return (
//     <div id="Experience" className="Experience">
//       <h1 className="Experience-heading">
//         Professional <br /> Experience
//       </h1>
//       <div className="Experience-2">
//         <div className="head">
//           <p>Full Stack Developer @ Health Data Max</p>
//           <p>May 2024 - Present</p>
//         </div>
//         <div className="foot">
//           <div className="Experience-content">
//             <p>https://healthdatamax.com</p>
//             <p className="Experience-description">
//               Healthcare risk adjustment and analytics solutions using MERN
//               stack, Python, and Azure.
//             </p>
//             <div className="tech-stack">
//               <section className="tech">MERN</section>
//               <section className="tech">Python</section>
//               <section className="tech">Azure</section>
//             </div>
//           </div>
//           <div className="Experience-logo">
//             <img
//               src="https://images.squarespace-cdn.com/content/v1/5a164516bff2007c8d020af7/1514062696013-BAEF72PDSGHCJ6B8TY9H/logo.jpg?format=1500w"
//               alt=""
//             />
//           </div>
//         </div>
//       </div>
//       <div className="Experience-1">
//         <div className="head">
//           <p>Full Stack Developer @ MotionCut</p>
//           <p>Sept 2023 - Oct 2023</p>
//         </div>
//         <div className="foot">
//           <div className="Experience-content">
//             <p>https://motioncut.shop</p>
//             <p className="Experience-description">
//               As a full stack developer intern at Motion Cut, I help bridge
//               education and industry through practical learning and mentorship.
//             </p>
//             <div className="tech-stack">
//               <section className="tech">React</section>
//               <section className="tech">ExpressJS</section>
//               <section className="tech">NodeJS</section>
//               <section className="tech">MongoDB</section>
//             </div>
//           </div>
//           <div className="Experience-logo">
//             <img
//               className="company-logo"
//               src="https://motioncut.shop/wp-content/uploads/2024/02/cropped-Blue-Modern-Business-YouTube-Banner-uhsu-191x64.png"
//               alt=""
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Experience;



import { useState } from "react";
import "./Experience.css";

const Experience = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const experiences = [
    {
      title: "Full Stack Developer @ Health Data Max",
      date: "May 2024 - Present",
      link: "https://healthdatamax.com",
      description: "Healthcare risk adjustment and analytics solutions using MERN stack, Python, and Azure.",
      tech: ["MERN", "Python", "Azure", "FARM", "FastAPI"],
      logo: "https://images.squarespace-cdn.com/content/v1/5a164516bff2007c8d020af7/1514062696013-BAEF72PDSGHCJ6B8TY9H/logo.jpg?format=1500w",
    },
    {
      title: "Full Stack Developer @ MotionCut",
      date: "Sept 2023 - Oct 2023",
      link: "https://motioncut.shop",
      description: "As a full stack developer intern at Motion Cut, I help bridge education and industry through practical learning and mentorship.",
      tech: ["React", "ExpressJS", "NodeJS", "MongoDB"],
      logo: "https://motioncut.shop/wp-content/uploads/2024/02/cropped-Blue-Modern-Business-YouTube-Banner-uhsu-191x64.png",
    },
  ];

  return (
    <div id="Experience" className="Experience">
      <h1 className="Experience-heading">
        Professional <br /> Experience
      </h1>
      {experiences.map((exp, index) => (
        <div
          key={index}
          className={`Experience-card ${expandedIndex === index ? "expanded" : ""}`}
          onClick={() => toggleExpand(index)}
        >
          <div className="head">
            <p>{exp.title}</p>
            <p>{exp.date}</p>
          </div>
          {expandedIndex === index && (
            <div className="foot">
              <div className="Experience-content">
                <p>{exp.link}</p>
                <p className="Experience-description">{exp.description}</p>
                <div className="tech-stack">
                  {exp.tech.map((tech, techIndex) => (
                    <section key={techIndex} className="tech">
                      {tech}
                    </section>
                  ))}
                </div>
              </div>
              <div className="Experience-logo">
                <img src={exp.logo} alt="Company logo" />
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Experience;
