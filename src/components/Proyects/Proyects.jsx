import React, { useEffect, useState } from "react";
import style from "./Proyects.module.css";
import pokeLanding from "../../poke.png";
import rickLanding from "../../rick-landing.png";
import laptop from "../../laptop.png";
import rickHome from "../../rick-home.png";
import rickFav from "../../rick-fav.png";
import pokeHome from "../../pokeHome.png";
import pokeDetail from "../../poke-detail.png";

import Carrousel from "./Carrousel";

export default function Proyects() {
  const [photosRick, setPhotosRick] = useState(rickLanding);
  const [photosPoke, setPhotosPoke] = useState(pokeLanding);

  const [showCarouselPokemon, setShowCarouselPokemon] = useState(false);
  const [showCarouselRick, setShowCarouselRick] = useState(false);
  const handleClose = () => {
    setShowCarouselPokemon(false);
    setShowCarouselRick(false);
  };
  const handleChangePhotoRick = () => {
    if (photosRick === rickLanding) {
      setPhotosRick(rickHome);
    } else {
      setPhotosRick(rickFav);
    }
    if (photosRick === rickFav) {
      setPhotosRick(rickLanding);
    }
  };
  const handleChangePhotoPoke = () => {
    if (photosPoke === pokeLanding) {
      setPhotosPoke(pokeHome);
    } else {
      setPhotosPoke(pokeDetail);
    }
    if (photosPoke === pokeDetail) {
      setPhotosPoke(pokeLanding);
    }
  };

  useEffect(() => {
    const intervalId = setInterval(handleChangePhotoRick, 2000);
    return () => clearInterval(intervalId);
  }, [photosRick]);

  useEffect(() => {
    const intervalId = setInterval(handleChangePhotoPoke, 2000);
    return () => clearInterval(intervalId);
  }, [photosPoke]);

  return (
    <section id="proyects" style={{ height: "239.5vh" }}>
      <div className={style.cntnProyects}>
        <div className={style.backgroundTittle}>
          <p className={style.title}>PROYECTS</p>
        </div>
        <div className={style.container}>
          <div className={style.phrase}>
            <span>/ HEY CHECK OUT MY PROJECTS</span>
            <span>/ HEY CHECK OUT MY PROJECTS</span>
            <span>/ HEY CHECK OUT MY PROJECTS</span>
            <span>/ HEY CHECK OUT MY PROJECTS</span>
            <span>/ HEY CHECK OUT MY PROJECTS</span>
            <span>/ HEY CHECK OUT MY PROJECTS</span>
            <span>/ HEY CHECK OUT MY PROJECTS</span>
            <span>/ HEY CHECK OUT MY PROJECTS</span>
            <span>/ HEY CHECK OUT MY PROJECTS</span>
            <span>/ HEY CHECK OUT MY PROJECTS</span>
            <span>/ HEY CHECK OUT MY PROJECTS</span>
            <span>/ HEY CHECK OUT MY PROJECTS</span>
            <span>/ HEY CHECK OUT MY PROJECTS</span>
            <span>/ HEY CHECK OUT MY PROJECTS</span>
            <span>/ HEY CHECK OUT MY PROJECTS</span>
          </div>
        </div>

        <div className={style.lines}>
          <div className={style.lineO}>
            <div className={style.ctnMacRick}>
              <div className={style.contenedor}>
                <img className={style.imgIpad} src={laptop} alt="" />
                <img className={style.img} src={photosRick} alt="" />
              </div>
            </div>

            <div className={style.ctnTextRick}>
              <p className={style.p}>
                <strong> RICK & MORTY API</strong>
              </p>

              <p className={style.textProyect}>
                My Integrator project is a SPA that uses React for the Front End
                and Redux as state management. All components were developed
                with CSS without the use of external libraries. <br />
                The SPA consumes data from an API ("The Rick and Morty API")
                through a Back-End developed in Node.JS using Express, adding
                new features to the original API. <br />
                The user can search for a character, filter by gender, sort
                alphabetically and add to favorites.
              </p>

              <div className={style.ctnButtonsRick}>
                <button className={style.button}>
                  <a
                    href="https://github.com/Miliros/RICK-AND-MORTY"
                    target="_blank"
                    rel="noreferrer"
                    className={style.a}
                  >
                    Code
                  </a>
                </button>
                <button
                  onClick={() => setShowCarouselRick(true)}
                  className={style.buttonPhoto}
                >
                  See more
                </button>
              </div>
            </div>
          </div>

          <div className={style.lineO}>
            <div className={style.ctnTextRick}>
              <p className={style.p}>
                <strong>POKE API</strong>
              </p>

              <p className={style.textProyect}>
                It is a SPA that is built using technologies like React and
                Redux in the Frontend for efficient state management, and CSS
                modules.
                <br /> The SPA consumes data from the external api (“Poke API”)
                and communicates with a Back End developed in Node.js using
                Express to handle client requests.
                <br /> The application uses Sequelize to interact with a
                PostgreSQL database.
                <br /> The user can create a Pokémon, search for it by name,
                filter it by type and strength, as well as sort it
                alphabetically.
              </p>

              <div className={style.ctnButtonsRick}>
                <button className={style.button}>
                  <a
                    href="https://github.com/Miliros/PI-POKEMON"
                    target="_blank"
                    rel="noreferrer"
                    className={style.a}
                  >
                    Code
                  </a>
                </button>
                <button
                  onClick={() => setShowCarouselPokemon(true)}
                  className={style.buttonPhoto}
                >
                  See more
                </button>
              </div>
            </div>
            <div className={style.ctnMacPoke}>
              <div className={style.contenedor}>
                <img className={style.imgIpad} src={laptop} alt="" />
                <img className={style.img} src={photosPoke} alt="" />
              </div>
            </div>
          </div>
          <Carrousel
            handleClose={handleClose}
            showPokemonCarousel={showCarouselPokemon}
            showRickCarousel={showCarouselRick}
          />
        </div>
      </div>
    </section>
  );
}
