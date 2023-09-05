import React from "react";
import style from "./Footer.module.css";
import {
  IconMail,
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandFacebook,
  IconBrandInstagram,
} from "@tabler/icons-react";
import { Link } from "react-scroll";

export default function Footer() {
  return (
    <div className={style.cntnFo}>
      <div className={style.ctnFooter}>
        <div className={style.divConnect}>
          <div className={style.divpIcons}>
            <p className={style.p}>Stay Connected!</p>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
              }}
            >
              <div className={style.iconLinkedin}>
                <a
                  href="https://www.linkedin.com/in/milagros-rosales-71a835284/"
                  target="_blank"
                  rel="noreferrer"
                  className={style.a}
                >
                  <IconBrandLinkedin size="18px" stroke="1.2px" />
                </a>
              </div>
              <div className={style.icon}>
                <a
                  href="https://github.com/Miliros"
                  target="_blank"
                  rel="noreferrer"
                  className={style.a}
                >
                  <IconBrandGithub size="18px" stroke="1.2px" />
                </a>
              </div>

              <div className={style.icon}>
                <a
                  href="mailto:milagros4046@hotmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className={style.a}
                >
                  <IconMail size="18px" stroke="1.2px" />
                </a>
              </div>
              <div className={style.icon}>
                <a
                  href="https://www.facebook.com/milirosales97/"
                  target="_blank"
                  rel="noreferrer"
                  className={style.a}
                >
                  <IconBrandFacebook size="18px" stroke="1.2px" />
                </a>
              </div>
              <div className={style.icon}>
                <a
                  href="https://www.instagram.com/milirosales/"
                  target="_blank"
                  rel="noreferrer"
                  className={style.a}
                >
                  <IconBrandInstagram size="18px" stroke="1.2px" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className={style.brandMr}>
          <p>MR</p>
        </div>
        <div className={style.divExplore}>
          <div className={style.divpSessions}>
            <p className={style.p}>Explore</p>
            <div className={style.divLinks}>
              <div>
                <Link
                  to="home"
                  smooth={true}
                  duration={500}
                  className={style.pExplore}
                >
                  Home
                </Link>
              </div>
              <div>
                <Link
                  to="proyects"
                  smooth={true}
                  duration={500}
                  className={style.pExplore}
                >
                  Proyects
                </Link>
              </div>
              <div>
                <Link
                  to="skills"
                  smooth={true}
                  duration={500}
                  className={style.pExplore}
                >
                  Skills
                </Link>
              </div>
              <div>
                <Link
                  to="contact"
                  smooth={true}
                  duration={500}
                  className={style.pExplore}
                >
                  Contact me
                </Link>
              </div>
              <div>
                <Link className={style.pExplore}>CV</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={style.divCopy}>
        <div className={style.divFotter}>
          <p className={style.pCopy}>
            &copy; {new Date().getFullYear()} Milagros Rosales. All Rights
            Reserved.
          </p>
        </div>
      </div>
    </div>
  );
}
