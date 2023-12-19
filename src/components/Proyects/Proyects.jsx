import React, { useEffect, useState } from "react";
import style from "./Proyects.module.scss";
import pokeLanding from "../../poke.png";
import rickLanding from "../../rick-landing.png";
import laptop from "../../laptop.png";
import rickHome from "../../rick-home.png";
import rickFav from "../../rick-fav.png";
import pokeHome from "../../pokeHome.png";
import pokeDetail from "../../poke-detail.png";
import mscLanding from "../../mscLandingg.png";
import mscHome from "../../mscHome.png";
import mscDetail from "../../mscDetail.png";

import Carrousel from "./Carrousel";

export default function Proyects() {
  const [photosRick, setPhotosRick] = useState(rickLanding);
  const [photosPoke, setPhotosPoke] = useState(pokeLanding);
  const [photosMsc, setPhotosMsc] = useState(mscLanding);

  const [showCarouselPokemon, setShowCarouselPokemon] = useState(false);
  const [showCarouselRick, setShowCarouselRick] = useState(false);
  const [showCarouselMsc, setShowCarouselMsc] = useState(false);

  const handleClose = () => {
    setShowCarouselPokemon(false);
    setShowCarouselRick(false);
    setShowCarouselMsc(false);
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

  const handleChangePhotoMSC = () => {
    if (photosMsc === mscLanding) {
      setPhotosMsc(mscHome);
    } else {
      setPhotosMsc(mscDetail);
    }
    if (photosMsc === mscDetail) {
      setPhotosMsc(mscLanding);
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
  useEffect(() => {
    const intervalId = setInterval(handleChangePhotoMSC, 2000);
    return () => clearInterval(intervalId);
  }, [photosMsc]);

  return (
    <section id="proyects">
      <div className={style.cntnProyects}>
        <div className={style.backgroundTittle}>
          <p className={style.title}>PROJECTS</p>
        </div>
        <div className={style.container}>
          <div className={style.phrase}>
            <span className={style.animate}> HEY CHECK OUT MY PROJECTS/</span>
            <span className={style.animate}> HEY CHECK OUT MY PROJECTS/</span>
            <span className={style.animate}> HEY CHECK OUT MY PROJECTS/</span>
            <span className={style.animate}> HEY CHECK OUT MY PROJECTS/</span>
            <span className={style.animate}> HEY CHECK OUT MY PROJECTS/</span>
            <span className={style.animate}> HEY CHECK OUT MY PROJECTS/</span>
            <span className={style.animate}> HEY CHECK OUT MY PROJECTS/</span>
            <span className={style.animate}> HEY CHECK OUT MY PROJECTS/</span>
          </div>
        </div>

        <div className={style.lines}>
          <div className={style.lineT}>
            <div className={style.ctnTextRick}>
              <div className={style.cntnTitleProyect}>
                <p className={style.p}>
                  <strong>MSC AMOBLAMIENTOS</strong>
                </p>
              </div>
              <p className={style.textProyect}>
                MSC API is a Full Stack group project developed during the Henry
                program. It combines leading technologies to provide a unique
                online furniture shopping experience. On the frontend, uses
                React, Redux, and Bootstrap for a sleek UI. The backend is
                powered by Express, managing a PostgreSQL database with
                Sequelize.
                <br />
                Auth0 ensures user security with various methods. Cloudinary
                manages images. MSC is a feature-rich e-commerce platform for
                easy furniture search and purchase. Admins can oversee products,
                materials, orders, and accounts through a robust panel.
                <br />
              </p>

              <div className={style.ctnButtonsRick}>
                <div className={style.button}>
                  <a
                    href="https://github.com/AgustinMandarini/MSC-Amoblamientos"
                    target="_blank"
                    rel="noreferrer"
                    className={style.a}
                  >
                    Code
                  </a>
                </div>
                <button
                  onClick={() => setShowCarouselMsc(true)}
                  className={style.buttonPhoto}
                >
                  See more
                </button>
              </div>
            </div>
            <div className={style.ctnMacPoke}>
              <div className={style.contenedor}>
                <img className={style.imgIpad} src={laptop} alt="" />
                <img className={style.img} src={photosMsc} alt="" />
              </div>
            </div>
          </div>
          <div className={style.lineO}>
            <div className={style.ctnMacRick}>
              <div className={style.contenedor}>
                <img className={style.imgIpad} src={laptop} alt="" />
                <img className={style.img} src={photosRick} alt="" />
              </div>
            </div>

            <div className={style.ctnTextRick}>
              <div className={style.cntnTitleProyect}>
                <p className={style.p}>
                  <strong> RICK & MORTY API</strong>
                </p>
              </div>

              <p className={style.textProyect}>
                "Rick & Morty API is my integrator project completed during
                Henry's bootcamp.
                <br /> It is a Single Page Application (SPA) that uses React for
                the frontend and Redux for state management. All components were
                developed using CSS without the use of external libraries.
                <br /> The SPA consumes data from an API called 'The Rick and
                Morty API' through a backend developed in Node.js using Express.
                <br />
                Users can search for a character, filter by gender, sort
                alphabetically, and add characters to their favorites."
              </p>

              <div className={style.ctnButtonsRick}>
                <div className={style.button}>
                  <a
                    href="https://github.com/Miliros/RICK-AND-MORTY"
                    target="_blank"
                    rel="noreferrer"
                    className={style.a}
                  >
                    Code
                  </a>
                </div>
                <button
                  onClick={() => setShowCarouselRick(true)}
                  className={style.buttonPhoto}
                >
                  See more
                </button>
              </div>
            </div>
          </div>

          <div className={style.lineT}>
            <div className={style.ctnTextRick}>
              <div className={style.cntnTitleProyect}>
                <p className={style.p}>
                  <strong>POKE API</strong>
                </p>
              </div>
              <p className={style.textProyect}>
                "Pokemon API is my individual project developed during Henry's
                bootcamp. It is a Single Page Application (SPA) built using
                technologies like React and Redux in the frontend for efficient
                state management, and CSS modules for styling.
                <br />
                The SPA consumes data from an external API called 'Poke API' and
                communicates with a backend developed in Node.js using Express
                to handle client requests. The application uses Sequelize to
                interact with a PostgreSQL database.
                <br />
                Users can create a Pokémon, search for it by name, filter it by
                type and strength, and also sort it alphabetically."
              </p>

              <div className={style.ctnButtonsRick}>
                <div className={style.button}>
                  <a
                    href="https://github.com/Miliros/PI-POKEMON"
                    target="_blank"
                    rel="noreferrer"
                    className={style.a}
                  >
                    Code
                  </a>
                </div>
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
            showMscCarousel={showCarouselMsc}
          />
        </div>
      </div>
    </section>
  );
}
