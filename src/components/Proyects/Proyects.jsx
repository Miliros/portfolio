import React, { useEffect, useState } from "react";
import style from "./Proyects.module.scss";

import pokeLanding from "../../images/poke.png";
import rickLanding from "../../images/rick-landing.png";
import laptop from "../../images/laptop.png";
import rickHome from "../../images/rick-home.png";
import rickFav from "../../images/rick-fav.png";
import pokeHome from "../../images/pokeHome.png";
import pokeDetail from "../../images/poke-detail.png";
import mscLanding from "../../images/mscLandingg.png";
import mscHome from "../../images/mscHome.png";
import mscDetail from "../../images/mscDetail.png";
import Carrousel from "./Carrousel";
import dashHome from "../../images/dash-Home.png";
import dashCard from "../../images/dash-Card.png";
import dashCart from "../../images/dash-Cart.png";
//management
import manage from "../../images/logPcGes.png";
import manageTask from "../../images/taskPc.png";
import manageNew from "../../images/newGesPc.png";

import projectsData from "../../projectData.json";

export default function Proyects() {
  const [showCarouselPokemon, setShowCarouselPokemon] = useState(false);
  const [showCarouselRick, setShowCarouselRick] = useState(false);
  const [showCarouselMsc, setShowCarouselMsc] = useState(false);
  const [showDashCarousel, setshowDashCarousel] = useState(false);
  const [showCarouselManagement, setShowCarouselManagement] = useState(false);

  const handleClose = () => {
    setShowCarouselPokemon(false);
    setShowCarouselRick(false);
    setShowCarouselMsc(false);
    setshowDashCarousel(false);
    setShowCarouselManagement(false);
  };
  const [photos, setPhotos] = useState({
    photosRick: rickLanding,
    photosPoke: pokeLanding,
    photosMsc: mscLanding,
    photosDash: dashHome,
    photosManagement: manage,
  });
  const functionsMap = {
    1: setShowCarouselManagement,
    2: setShowCarouselMsc,
    3: setShowCarouselRick,
    4: setShowCarouselPokemon,
    5: setshowDashCarousel,
  };

  useEffect(() => {
    const intervals = [
      setInterval(
        () => changePhoto("photosRick", [rickLanding, rickHome, rickFav]),
        2000
      ),
      setInterval(
        () => changePhoto("photosPoke", [pokeLanding, pokeHome, pokeDetail]),
        2000
      ),
      setInterval(
        () => changePhoto("photosMsc", [mscLanding, mscHome, mscDetail]),
        2000
      ),
      setInterval(
        () => changePhoto("photosDash", [dashHome, dashCard, dashCart]),
        2000
      ),
      setInterval(
        () => changePhoto("photosManagement", [manage, manageTask, manageNew]),
        2000
      ),
    ];

    return () => intervals.forEach(clearInterval); // Limpio intervalos al desmontar
  }, []);

  const changePhoto = (key, images) => {
    setPhotos((prevPhotos) => {
      const currentIndex = images.indexOf(prevPhotos[key]);
      const nextIndex = (currentIndex + 1) % images.length; // Roto
      return { ...prevPhotos, [key]: images[nextIndex] };
    });
  };

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
          </div>
        </div>

        <div className={style.lines}>
          {projectsData.map((project, index) => (
            <div key={project.id} className={style[project.lineStyle]}>
              {index % 2 === 0 ? (
                <>
                  {/* PRIMER DIV (Imagen) */}
                  <div className={style[project.containerStyle]}>
                    <div className={style.contenedor}>
                      <img className={style.imgIpad} src={laptop} alt="" />
                      <img
                        className={style.img}
                        src={photos[project.photoKey]}
                        alt=""
                      />
                    </div>
                  </div>
                  {/* SEGUNDO DIV (Texto) */}
                  <div className={style[project.textContainerStyle]}>
                    <div className={style.cntnTitleProyect}>
                      <p className={style.p}>
                        <strong>{project.title}</strong>
                      </p>
                    </div>
                    <p className={style.textProyect}>{project.description}</p>
                    <div className={style.ctnButtonsRick}>
                      <div className={style.button}>
                        <a
                          href={project.codeLink}
                          target="_blank"
                          rel="noreferrer"
                          className={style.a}
                        >
                          Code
                        </a>
                      </div>
                      <button
                        className={style.buttonPhoto}
                        onClick={() => functionsMap[project.id](true)}
                      >
                        See More
                      </button>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  {/* SEGUNDO DIV (Texto) */}
                  <div className={style[project.textContainerStyle]}>
                    <div className={style.cntnTitleProyect}>
                      <p className={style.p}>
                        <strong>{project.title}</strong>
                      </p>
                    </div>
                    <p className={style.textProyect}>{project.description}</p>
                    <div className={style.ctnButtonsRick}>
                      <div className={style.button}>
                        <a
                          href={project.codeLink}
                          target="_blank"
                          rel="noreferrer"
                          className={style.a}
                        >
                          Code
                        </a>
                      </div>
                      <button
                        className={style.buttonPhoto}
                        onClick={() => functionsMap[project.id](true)}
                      >
                        See More
                      </button>
                    </div>
                  </div>
                  {/* PRIMER DIV (Imagen) */}
                  <div className={style[project.containerStyle]}>
                    <div className={style.contenedor}>
                      <img className={style.imgIpad} src={laptop} alt="" />
                      <img
                        className={style.img}
                        src={photos[project.photoKey]}
                        alt=""
                      />
                    </div>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
      <Carrousel
        handleClose={handleClose}
        showPokemonCarousel={showCarouselPokemon}
        showRickCarousel={showCarouselRick}
        showMscCarousel={showCarouselMsc}
        showDashCarousel={showDashCarousel}
        showCarouselManagement={showCarouselManagement}
      />
    </section>
  );
}
