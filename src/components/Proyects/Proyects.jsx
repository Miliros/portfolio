import React from "react";
import style from "./Proyects.module.css";
import pokehome from "../../poke.png";

export default function Proyects() {
  return (
    <section id="proyects">
      <div className={style.cntnProyects}>
        <p className={style.title}>Proyects</p>
        <p className={style.p}>
          HEY! CHECK OUT MY FULL STACK PROYECTS DONE AT HENRY'S BOOTCAMP.
        </p>
        <div className={style.lines}>
          <div className={style.lineO}>
            <img className={style.img} src={pokehome} alt="" />
            <p className={style.p}>Pokemon Api</p>
          </div>
          <div className={style.lineT}></div>
        </div>

        <img />
      </div>
    </section>
  );
}
