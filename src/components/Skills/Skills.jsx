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
} from "@tabler/icons-react";
import logoSql from "../../logoSql.png";
import logoExpress from "../../logoExpress.png";
import logoNodeJs from "../../logoNodeJs.png";
import logoSequelize from "../../logoSequelize.png";

export default function Skills() {
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const skillsRef = useRef(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.2,
    };

    const handleIntersection = (entries) => {
      const entry = entries[0];
      if (entry.isIntersecting) {
        setShouldAnimate(true);
      } else {
        setShouldAnimate(false);
      }
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
      <div
        className={style.ctnSkills}
        style={{
          height: "100vh",
        }}
      >
        <div className={style.container}>
          <div
            className={
              style.phrase + (shouldAnimate ? ` ${style.animate2}` : "")
            }
          >
            <span> MY SET SKILLS/</span>
            <span> MY SET SKILLS/</span>
            <span> MY SET SKILLS/</span>
            <span> MY SET SKILLS/</span>
            <span> MY SET SKILLS/</span>
            <span> MY SET SKILLS/</span>
            <span> MY SET SKILLS/</span>
            <span> MY SET SKILLS/</span>
            <span> MY SET SKILLS/</span>
            <span> MY SET SKILLS/</span>
            <span> MY SET SKILLS/</span>
            <span> MY SET SKILLS/</span>
            <span> MY SET SKILLS/</span>
            <span> MY SET SKILLS/</span>
          </div>
        </div>
        <div className={style.backgroundImage}>
          <p className={style.title}>SKILLS</p>
        </div>

        <div className={style.divSkills}>
          <div className={style.lineOne}>
            <div
              className={
                style.icons + (shouldAnimate ? ` ${style.animate}` : "")
              }
            >
              <IconBrandHtml5 size="36px" stroke="1.4px" />
              <p className={style.pIcon}>HTML</p>
            </div>
            <div
              className={
                style.icons + (shouldAnimate ? ` ${style.animate}` : "")
              }
            >
              <IconBrandCss3 size="36px" stroke="1.4px" />
              <p className={style.pIcon}>CSS</p>
            </div>
            <div
              className={
                style.icons + (shouldAnimate ? ` ${style.animate}` : "")
              }
            >
              <IconBrandJavascript size="36px" stroke="1.4px" />
              <p className={style.pIcon}>JavaScript</p>
            </div>
            <div
              className={
                style.icons + (shouldAnimate ? ` ${style.animate}` : "")
              }
            >
              <IconBrandReact size="36px" stroke="1.4px" />
              <p className={style.pIcon}>React.js</p>
            </div>
            <div
              className={
                style.icons + (shouldAnimate ? ` ${style.animate}` : "")
              }
            >
              <IconBrandRedux size="36px" stroke="1.4px" />
              <p className={style.pIcon}>Redux</p>
            </div>
            <div
              className={
                style.icons + (shouldAnimate ? ` ${style.animate}` : "")
              }
            >
              <IconBrandGit size="36px" stroke="1.4px" />
              <p className={style.pIcon}>Git</p>
            </div>
          </div>

          <div className={style.lineOne}>
            <div
              className={
                style.icons + (shouldAnimate ? ` ${style.animate}` : "")
              }
            >
              <img src={logoSql} alt="" className={style.imgLogo} />
              <p className={style.pIcon}>PostgreSQL</p>
            </div>
            <div
              className={
                style.icons + (shouldAnimate ? ` ${style.animate}` : "")
              }
            >
              <img src={logoSequelize} alt="" className={style.imgLogo} />
              <p className={style.pIcon}>Sequelize</p>
            </div>
            <div
              className={
                style.icons + (shouldAnimate ? ` ${style.animate}` : "")
              }
            >
              <img src={logoExpress} alt="" className={style.imgLogo} />
              <p className={style.pIcon}>Express.js</p>
            </div>
            <div
              className={
                style.icons + (shouldAnimate ? ` ${style.animate}` : "")
              }
            >
              <img src={logoNodeJs} alt="" className={style.imgLogo} />
              <p className={style.pIcon}>Node.js</p>
            </div>
            <div
              className={
                style.icons + (shouldAnimate ? ` ${style.animate}` : "")
              }
            >
              <IconBrandSass size="36px" stroke="1.4px" />
              <p className={style.pIcon}>Sass</p>
            </div>

            <div
              className={
                style.icons + (shouldAnimate ? ` ${style.animate}` : "")
              }
            >
              <IconBrandBootstrap size="36px" stroke="1.4px" />
              <p className={style.pIcon}>Bootstrap</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
