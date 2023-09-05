import React, { useState } from "react";
import style from "./Contact.module.css";
import { validation } from "./validation";
import {
  IconMail,
  IconBrandGithub,
  IconBrandLinkedin,
} from "@tabler/icons-react";
import emailjs from "emailjs-com";

export default function Contact() {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [error, setError] = useState({
    name: "",
    image: "",
    life: "",
  });

  const stateReset = () => {
    setUserData({
      name: "",
      email: "",
      message: "",
    });
  };

  const handleInputChange = (event) => {
    setUserData({ ...userData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setError(validation(userData));
    if (error.name === true && error.email === true && error.message === true) {
      emailjs
        .send(
          "service_a7h3c3m",
          "template_p5xty2g",
          userData,
          "6z7trrloH7f1fDndf"
        )
        .then(
          (response) => {
            console.log("email sent successfully:", response);
          },
          (error) => {
            console.error("error sending email", error);
          }
        );
      stateReset();
    }
  };
  return (
    <section id="contact" style={{ height: "145.5vh" }}>
      <div className={style.cntnContact}>
        <div className={style.backgroundTittle}>
          <p className={style.title}>CONTACT</p>
        </div>
        <div className={style.container}>
          <div className={style.phrase}>
            <span>/ CONTACT ME</span>
            <span>/ CONTACT ME</span>
            <span>/ CONTACT ME</span>
            <span>/ CONTACT ME</span>
            <span>/ CONTACT ME</span>
            <span>/ CONTACT ME</span>
            <span>/ CONTACT ME</span>
            <span>/ CONTACT ME</span>
            <span>/ CONTACT ME</span>
            <span>/ CONTACT ME</span>
            <span>/ CONTACT ME</span>
            <span>/ CONTACT ME</span>
            <span>/ CONTACT ME</span>
            <span>/ CONTACT ME</span>
            <span>/ CONTACT ME</span>
          </div>
        </div>
        <div className={style.backgroundImag}>
          <div className={style.cardContact}>
            <form onSubmit={handleSubmit} className={style.cntnForm}>
              <div
                style={{
                  display: "flex",
                  alignItems: "start",
                  flexDirection: "row",
                  justifyContent: "start",
                }}
              >
                <div className={style.iconLinkedin}>
                  <a
                    href="https://www.linkedin.com/in/milagros-rosales-71a835284/"
                    target="_blank"
                    rel="noreferrer"
                    className={style.a}
                  >
                    <IconBrandLinkedin size="18px" stroke="1.3px" />
                  </a>
                </div>
                <div className={style.icon}>
                  <a
                    href="https://github.com/Miliros"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <IconBrandGithub size="18px" stroke="1.3px" />
                  </a>
                </div>

                <div className={style.icon}>
                  <a
                    href="mailto:milagros4046@hotmail.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <IconMail size="18px" stroke="1.3px" />
                  </a>
                </div>
              </div>
              <div className={style.pForm}>
                <p className={style.p}>LEAVE ME A NOTE!</p>
              </div>

              <div className={style.inputsAndlabels}>
                <label className={style.label} htmlFor="name"></label>
                <div className={style.divInputError}>
                  <input
                    name="name"
                    className={style.input}
                    placeholder="Name*"
                    value={userData.name}
                    onChange={handleInputChange}
                  />
                  <p className={style.pError}>
                    {error.name !== true ? error.name : ""}
                  </p>
                </div>

                <div>
                  <label className={style.label} htmlFor="name"></label>
                  <div>
                    <input
                      name="email"
                      placeholder="Email*"
                      className={style.input}
                      value={userData.email}
                      onChange={handleInputChange}
                    />
                    <p className={style.pError}>
                      {error.email !== true ? error.email : ""}
                    </p>
                  </div>
                </div>
                <div>
                  <label className={style.label} htmlFor="name"></label>
                  <div>
                    <textarea
                      placeholder="Message*"
                      className={style.inputMessage}
                      name="message"
                      value={userData.message}
                      onChange={handleInputChange}
                    />
                    <p className={style.pError}>
                      {error.message !== true ? error.message : ""}
                    </p>
                  </div>
                </div>
              </div>
              <div className={style.buttonSubmit}>
                <button className={style.button} type="submit" id="button">
                  SEND
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
