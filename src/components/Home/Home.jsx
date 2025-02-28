import React from "react";
import styles from "./Home.module.scss";
import image from "../../images/milit.png";
import {
  IconBrandInstagram,
  IconBrandFacebook,
  IconMail,
  IconBrandGithub,
  IconBrandLinkedin,
} from "@tabler/icons-react";

export default function Home() {
  const socialLinks = [
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/milagros-rosales-71a835284/",
      icon: <IconBrandLinkedin size="20px" stroke="1.2px" />,
    },
    {
      name: "GitHub",
      href: "https://github.com/Miliros",
      icon: <IconBrandGithub size="20px" stroke="1.2px" />,
    },
    {
      name: "Facebook",
      href: "https://www.facebook.com/milirosales97/",
      icon: <IconBrandFacebook size="20px" stroke="1.2px" />,
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/milirosales/",
      icon: <IconBrandInstagram size="20px" stroke="1.2px" />,
    },
    {
      name: "Email",
      href: "mailto:milagros4046@hotmail.com",
      icon: <IconMail size="20px" stroke="1.2px" />,
    },
  ];

  return (
    <section
      style={{
        height: "100vh",
      }}
      id="home"
      className={styles.cntnHome}
    >
      <div className={styles.divIcons}>
        {socialLinks.map((link, index) => (
          <div className={styles.icon} key={index}>
            <a
              href={link.href}
              target="_blank"
              rel="noreferrer"
              aria-label={link.name}
            >
              {link.icon}
            </a>
          </div>
        ))}
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
          <img className={styles.img} src={image} alt="Milagros Rosales" />
        </div>
      </div>
    </section>
  );
}
