import React from "react";
import styles from "./Home.module.scss";
import image from "../../milit.jpeg";
import {
  IconBrandInstagram,
  IconBrandFacebook,
  IconMail,
  IconBrandGithub,
  IconBrandLinkedin,
} from "@tabler/icons-react";

export default function Home() {
  return (
    <section
      style={{
        height: "100vh",
      }}
      id="home"
      className={styles.cntnHome}
    >
      <div className={styles.divIcons}>
        <div className={styles.icon}>
          <a
            href="https://www.linkedin.com/in/milagros-rosales-71a835284/"
            target="_blank"
            rel="noreferrer"
          >
            <IconBrandLinkedin size="20px" stroke="1.2px" />
          </a>
        </div>
        <div className={styles.icon}>
          <a href="https://github.com/Miliros" target="_blank" rel="noreferrer">
            <IconBrandGithub size="20px" stroke="1.2px" />
          </a>
        </div>
        <div className={styles.icon}>
          <a
            href="https://www.facebook.com/milirosales97/"
            target="_blank"
            rel="noreferrer"
          >
            <IconBrandFacebook size="20px" stroke="1.2px" />
          </a>
        </div>
        <div className={styles.icon}>
          <a
            href="https://www.instagram.com/milirosales/"
            target="_blank"
            rel="noreferrer"
          >
            <IconBrandInstagram size="20px" stroke="1.2px" />
          </a>
        </div>
        <div className={styles.icon}>
          <a
            href="mailto:milagros4046@hotmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <IconMail size="20px" stroke="1.2px" />
          </a>
        </div>
      </div>
      <div className={styles.divNameImg}>
        <div className={styles.nameAndSubtitle}>
          <div className={styles.names}>
            <div>
              <p className={styles.name}>Milagros</p>
            </div>
            <div>
              <p className={styles.lastName}>Rosales</p>
            </div>
          </div>
          <div className={styles.cntnP}>
            <div className={styles.centeredText}>
              <p className={styles.p}>Hi, I'm Milagros.</p>
            </div>
            <p className={styles.p2}>
              I am a <strong>Full Stack Developer</strong> with a focus on
              front-end development, born in Tandil, Argentina. <br />
              <br />
            </p>
          </div>
        </div>
        <div className={styles.divImg}>
          <img className={styles.img} src={image} />
        </div>
      </div>
    </section>
  );
}
