import React from "react";
import style from "./Skills.module.css";
import {
  IconBrandHtml5,
  IconBrandCss3,
  IconBrandJavascript,
  IconBrandReact,
  IconBrandRedux,
  IconBrandBootstrap,
} from "@tabler/icons-react";
import logoSql from "../../logoSql.png";
import logoExpress from "../../logoExpress.png";
import logoNodeJs from "../../logoNodeJs.png";
import logoSequelize from "../../logoSequelize.png";

export default function Skills() {
  return (
    <section id="skills" className={style.cntn}>
      <div
        className={style.ctnSkills}
        style={{
          height: "100vh",
        }}
      >
        <div className={style.container}>
          <div className={style.phrase}>
            <span>/ MY SET SKILLS</span>
            <span>/ MY SET SKILLS</span>
            <span>/ MY SET SKILLS</span>
            <span>/ MY SET SKILLS</span>
            <span>/ MY SET SKILLS</span>
            <span>/ MY SET SKILLS</span>
            <span>/ MY SET SKILLS</span>
            <span>/ MY SET SKILLS</span>
            <span>/ MY SET SKILLS</span>
            <span>/ MY SET SKILLS</span>
            <span>/ MY SET SKILLS</span>
            <span>/ MY SET SKILLS</span>
            <span>/ MY SET SKILLS</span>
            <span>/ MY SET SKILLS</span>
            <span>/ MY SET SKILLS</span>
            <span>/ MY SET SKILLS</span>
          </div>
        </div>
        <div className={style.backgroundImage}>
          <p className={style.title}>SKILLS</p>
        </div>

        <div className={style.divSkills}>
          <div className={style.lineOne}>
            <div className={style.icons}>
              <IconBrandHtml5 size="36px" stroke="1.4px" />
              <p className={style.pIcon}>Html</p>
            </div>
            <div className={style.icons}>
              <IconBrandCss3 size="36px" stroke="1.4px" />
              <p className={style.pIcon}>Css</p>
            </div>
            <div className={style.icons}>
              <IconBrandJavascript size="36px" stroke="1.4px" />
              <p className={style.pIcon}>JavaScript</p>
            </div>
            <div className={style.icons}>
              <IconBrandReact size="36px" stroke="1.4px" />
              <p className={style.pIcon}>React</p>
            </div>
            <div className={style.icons}>
              <IconBrandRedux size="36px" stroke="1.4px" />
              <p className={style.pIcon}>Redux</p>
            </div>
          </div>

          <div className={style.lineOne}>
            <div className={style.icons}>
              <img src={logoSql} alt="" className={style.imgLogo} />
              <p className={style.pIcon}>PostgreSQL</p>
            </div>
            <div className={style.icons}>
              <img src={logoSequelize} alt="" className={style.imgLogo} />
              <p className={style.pIcon}>Sequelize</p>
            </div>
            <div className={style.icons}>
              <img src={logoExpress} alt="" className={style.imgLogo} />
              <p className={style.pIcon}>Express</p>
            </div>
            <div className={style.icons}>
              <img src={logoNodeJs} alt="" className={style.imgLogo} />
              <p className={style.pIcon}>Node.js</p>
            </div>

            <div className={style.icons}>
              <IconBrandBootstrap size="36px" stroke="1.4px" />
              <p className={style.pIcon}>Bootstrap</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
