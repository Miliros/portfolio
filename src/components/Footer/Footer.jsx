import React from "react";
import style from "./Footer.module.scss";
import {
  IconMail,
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandFacebook,
  IconBrandInstagram,
} from "@tabler/icons-react";
import { Link } from "react-scroll";
import { NavLink } from "react-router-dom";

export default function Footer() {
  const socialLinks = [
    {
      href: "https://www.linkedin.com/in/milagros-rosales-71a835284/",
      icon: <IconBrandLinkedin size="18px" stroke="1.2px" />,
    },
    {
      href: "https://github.com/Miliros",
      icon: <IconBrandGithub size="18px" stroke="1.2px" />,
    },
    {
      href: "mailto:milagros4046@hotmail.com",
      icon: <IconMail size="18px" stroke="1.2px" />,
    },
    {
      href: "https://www.facebook.com/milirosales97/",
      icon: <IconBrandFacebook size="18px" stroke="1.2px" />,
    },
    {
      href: "https://www.instagram.com/milirosales/",
      icon: <IconBrandInstagram size="18px" stroke="1.2px" />,
    },
  ];

  const exploreLinks = [
    { to: "home", label: "Home" },
    { to: "proyects", label: "Projects" },
    { to: "skills", label: "Skills" },
    { to: "contact", label: "Contact" },
    { to: "/pdf", label: "CV", external: true },
  ];

  return (
    <div className={style.cntnFo}>
      <div className={style.ctnFooter}>
        <div className={style.divConnect}>
          <p className={style.p}>Stay Connected!</p>
          <div className={style.divpIcons}>
            <div className={style.divIconsR}>
              {socialLinks.map((link, index) => (
                <div className={style.icon} key={index}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className={style.a}
                  >
                    {link.icon}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className={style.brandMr}>
          <p>MR</p>
        </div>
        <div className={style.divExplore}>
          <p className={style.p}>Explore</p>
          <div className={style.divLinks}>
            {exploreLinks.map((link, index) =>
              link.external ? (
                <NavLink
                  to={link.to}
                  target="_blank"
                  className={style.link}
                  key={index}
                >
                  {link.label}
                </NavLink>
              ) : (
                <Link
                  to={link.to}
                  smooth={true}
                  duration={500}
                  className={style.link}
                  key={index}
                >
                  {link.label}
                </Link>
              )
            )}
          </div>
        </div>
      </div>
      <div className={style.divCopy}>
        <div className={style.divFotter}>
          <p className={style.pCopy}>
            &copy; {new Date().getFullYear()} Milagros Rosales. All Rights
            Reserved. Site Credit.
          </p>
        </div>
      </div>
    </div>
  );
}
