import React, { useState, useEffect, useRef } from "react";
import style from "./Skills.module.scss";
import {
  IconBrandHtml5,
  IconBrandCss3,
  IconBrandJavascript,
  IconBrandReact,
  IconBrandRedux,
  IconBrandBootstrap,
  IconBrandSass,
  IconBrandGit,
  IconBrandNextjs,
  IconBrandTypescript,
  IconBrandTailwind,
  IconBrandGithub,
  IconBrandDocker,
  IconBrandWordpress,
} from "@tabler/icons-react";
import logoSql from "../../logoSql.png";
import logoExpress from "../../logoExpress.png";
import logoNodeJs from "../../logoNodeJs.png";
import logoSequelize from "../../logoSequelize.png";

// Componente para cada skill individual
const Skill = ({ icon: Icon, img, name, size = "36px", stroke = "1.4px" }) => (
  <div className={style.icons}>
    {Icon ? (
      <Icon size={size} stroke={stroke} />
    ) : (
      <img src={img} alt={name} className={style.imgLogo} />
    )}
    <p className={style.pIcon}>{name}</p>
  </div>
);

export default function Skills() {
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const skillsRef = useRef(null);

  const skills = [
    { icon: IconBrandHtml5, name: "HTML" },
    { icon: IconBrandCss3, name: "CSS" },
    { icon: IconBrandJavascript, name: "JavaScript", size: "50px" },
    { icon: IconBrandReact, name: "React.js" },
    { icon: IconBrandRedux, name: "Redux", size: "50px" },
    { icon: IconBrandGit, name: "Git" },
    { icon: IconBrandNextjs, name: "Next.js", size: "50px" },
    { icon: IconBrandTailwind, name: "Tailwind" },
    { icon: IconBrandGithub, name: "GitHub" },
    { img: logoSql, name: "PostgreSQL" },
    { img: logoSequelize, name: "Sequelize" },
    { img: logoExpress, name: "Express.js" },
    { img: logoNodeJs, name: "Node.js" },
    { icon: IconBrandSass, name: "Sass", size: "59px" },
    { icon: IconBrandBootstrap, name: "Bootstrap", size: "50px" },
    { icon: IconBrandTypescript, name: "TypeScript" },
    { icon: IconBrandDocker, name: "Docker", size: "49px" },
    { icon: IconBrandWordpress, name: "WordPress", size: "39px" },
  ];

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.2,
    };

    const handleIntersection = (entries) => {
      const entry = entries[0];
      setShouldAnimate(entry.isIntersecting);
    };

    const observer = new IntersectionObserver(handleIntersection, options);

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => {
      if (skillsRef.current) {
        observer.unobserve(skillsRef.current);
      }
    };
  }, []);

  return (
    <section ref={skillsRef} id="skills" className={style.cntn}>
      <div className={style.ctnSkills}>
        <div className={style.container}>
          <div
            className={
              style.phrase + (shouldAnimate ? ` ${style.animate2}` : "")
            }
          >
            {Array(14).fill(<span> MY SET SKILLS/</span>)}
          </div>
        </div>
        <div className={style.backgroundImage}>
          <p className={style.title}>SKILLS</p>
        </div>
        <div className={style.divSkills}>
          <div className={style.lineOne}>
            {skills.slice(0, 9).map((skill, index) => (
              <Skill key={index} {...skill} />
            ))}
          </div>
          <div className={style.lineOne}>
            {skills.slice(9).map((skill, index) => (
              <Skill key={index} {...skill} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
