import React, { useState, useRef, useEffect } from "react";
import style from "./Contact.module.scss";
import { validation } from "./validation";
import {
  IconMail,
  IconBrandGithub,
  IconBrandLinkedin,
} from "@tabler/icons-react";
import emailjs from "emailjs-com";
import Modal from "react-bootstrap/Modal";

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

  const [shouldAnimate, setShouldAnimate] = useState(false);
  const skillsRef = useRef(null);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleInputChange = (event) => {
    setUserData({ ...userData, [event.target.name]: event.target.value });
    setError(validation(userData));
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
      handleShow();
    }
  };

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
  useEffect(() => {
    setTimeout(() => {
      setShow(false);
    }, 8000);
  }, [show]);

  return (
    <section ref={skillsRef} id="contact">
      <div className={style.cntnContact}>
        <div className={style.backgroundTittle}>
          <p className={style.title}>CONTACT</p>
        </div>
        <div className={style.container}>
          <div
            className={
              style.phrase + (shouldAnimate ? ` ${style.animate}` : "")
            }
          >
            <span> CONTACT ME/</span>
            <span> CONTACT ME/</span>
            <span> CONTACT ME/</span>
            <span> CONTACT ME/</span>
            <span> CONTACT ME/</span>
            <span> CONTACT ME/</span>
            <span> CONTACT ME/</span>
            <span> CONTACT ME/</span>
            <span> CONTACT ME/</span>
            <span> CONTACT ME/</span>
            <span> CONTACT ME/</span>
            <span> CONTACT ME/</span>
          </div>
        </div>
        <div className={style.backgroundImag}>
          <div className={style.cardContact}>
            <form onSubmit={handleSubmit} className={style.cntnForm}>
              <div className={style.divIcons}>
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
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton className={style.cntnModal}>
          <Modal.Title>YOUR MESSAGE WAS SENT</Modal.Title>
        </Modal.Header>
        <Modal.Body className={style.bodyModal}>
          I will contact you soon, thanks for contacting me!
        </Modal.Body>
      </Modal>
    </section>
  );
}
