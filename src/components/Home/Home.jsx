import React from "react";
import styles from "./Home.module.css";
import image from "../../supuesta.jpg";
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
        display: "flex",
        justifyContent: "center",
        paddingTop: "125px",
        height: "100vh",
        border: "1px solid black",
        borderRadius: "7px",
        marginBottom: "15px",
      }}
      id="home"
    >
      <div
        style={{
          position: "absolute",
          bottom: "53px",
          left: "44px",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
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

      <div style={{ marginRight: "80px" }}>
        <p className={styles.name}>Milagros</p>
        <p className={styles.lastName}>Rosales</p>
        <p className={styles.p}>
          Hi, I'm Milagros.
          <br /> I am a <strong>Full Stack Developer</strong> focused on front
          end development born in Tandil, Argentina. <br />
          {/* I am looking for opportunities to enhance my skills and achieve
          professional success. I stand out for being empathetic, decisive and
          creative in each project. <br /> */}
          <br />
        </p>
        <p className={styles.pWelcome}>Welcome to my Portfolio!</p>
      </div>

      <div style={{ marginLeft: "80px" }}>
        <img className={styles.img} src={image} />
      </div>
    </section>
  );
}
