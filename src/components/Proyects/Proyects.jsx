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
import dashHome from "../../dash-Home.png";
import dashCard from "../../dash-Card.png";
import dashCart from "../../dash-Cart.png";

export default function Proyects() {
  const [photosRick, setPhotosRick] = useState(rickLanding);
  const [photosPoke, setPhotosPoke] = useState(pokeLanding);
  const [photosMsc, setPhotosMsc] = useState(mscLanding);
  const [photosDash, setPhotosDash] = useState(dashHome);

  const [showCarouselPokemon, setShowCarouselPokemon] = useState(false);
  const [showCarouselRick, setShowCarouselRick] = useState(false);
  const [showCarouselMsc, setShowCarouselMsc] = useState(false);
  const [showDashCarousel, setshowDashCarousel] = useState(false);

  const handleClose = () => {
    setShowCarouselPokemon(false);
    setShowCarouselRick(false);
    setShowCarouselMsc(false);
    setshowDashCarousel(false);
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
  const handleChangePhotoDash = () => {
    if (photosDash === dashHome) {
      setPhotosDash(dashCard);
    } else {
      setPhotosDash(dashCart);
    }
    if (photosDash === dashCart) {
      setPhotosDash(dashHome);
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
  useEffect(() => {
    const intervalId = setInterval(handleChangePhotoDash, 2000);
    return () => clearInterval(intervalId);
  }, [photosDash]);

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
                MSC API is a Full Stack project that offers a unique online
                furniture shopping experience.
                <br />
                It uses React, Redux, and Bootstrap on the frontend, with
                Express and PostgreSQL on the backend, managed through
                Sequelize.
                <br />
                Auth0 handles security, and Cloudinary manages images. Admins
                can manage products, orders, and accounts through a robust
                panel.
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
                Rick & Morty API is a Single Page Application (SPA) using React
                and Redux for state management.
                <br />
                It consumes 'The Rick and Morty API' via a Node.js backend with
                Express. Users can search, filter, sort, and favorite
                characters.
                <br />
                The entire UI is styled with custom CSS, without external
                libraries.
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
                Pokemon API is a SPA built with React and Redux for state
                management, and CSS modules for styling.
                <br />
                It fetches data from 'Poke API' and interacts with a PostgreSQL
                database via a Node.js backend using Express and Sequelize.
                <br />
                Users can create, search, filter, and sort Pokémon.
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
        </div>
        <div className={style.lineO}>
          <div className={style.ctnMacRick}>
            <div className={style.contenedor}>
              <img className={style.imgIpad} src={laptop} alt="" />
              <img className={style.img} src={photosDash} alt="" />
            </div>
          </div>

          <div className={style.ctnTextRick}>
            <div className={style.cntnTitleProyect}>
              <p className={style.p}>
                <strong> My Dashboard</strong>
              </p>
            </div>

            <p className={style.textProyect}>
              This is an administrative dashboard developed with Next.js,
              integrating the Pokémon API for dynamic data fetching.
              <br />
              Users can favorite Pokémon, with preferences stored locally, and
              manage global states using Redux Toolkit.
              <br />
              Tailwind CSS ensures a modern, responsive design. The app includes
              a shopping session where users can add Pokémon products to their
              cart and review purchases.
            </p>

            <div className={style.ctnButtonsRick}>
              <div className={style.button}>
                <a
                  href="https://github.com/Miliros/my-dashboard-next"
                  target="_blank"
                  rel="noreferrer"
                  className={style.a}
                >
                  Code
                </a>
              </div>
              <button
                onClick={() => setshowDashCarousel(true)}
                className={style.buttonPhoto}
              >
                See more
              </button>
            </div>
          </div>
        </div>
        <Carrousel
          handleClose={handleClose}
          showPokemonCarousel={showCarouselPokemon}
          showRickCarousel={showCarouselRick}
          showMscCarousel={showCarouselMsc}
          showDashCarousel={showDashCarousel}
        />
      </div>
    </section>
  );
}
