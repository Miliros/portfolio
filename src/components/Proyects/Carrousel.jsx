import React from "react";

import pokeHome from "../../images/PokeHomet.png";
import pokedetail from "../../images/PokeDetail.png";
import rickLanding from "../../images/RickLanding.png";
import rickHome from "../../images/rickHome.png";
import rickEpisode from "../../images/rickEp.png";
import rickFav from "../../images/rickFav.png";
import mscLanding from "../../images/MscAmoblamientosLan.png";
import mscHome from "../../images/HomeMSC.png";
import mscCart from "../../images/mscCart.png";
import mscRegister from "../../images/MSCregister.png";
import mscReviews from "../../images/mscReviews.png";
import mscSofa from "../../images/moreDetailMsc.png";
import dashDash from "../../images/dash-Cartt.png";
import DashCart from "../../images/dash-Cartt.png";
import dashPoke from "../../images/dash-Poke.png";
import pokeHomeOriginal from "../../images/pokeHomeOriginal.png";
import logGes from "../../images/logGestionCa.png";
import taskGes from "../../images/taskGestionCa.png";
import newGes from "../../images/new-projectGestionCa.png";
//images

import Modal from "react-bootstrap/Modal";
import Carousel from "react-bootstrap/Carousel";

export default function Carrousel({
  showPokemonCarousel,
  showRickCarousel,
  showMscCarousel,
  showDashCarousel,
  showCarouselManagement,
  handleClose,
}) {
  return (
    <Modal
      onHide={handleClose}
      show={
        showPokemonCarousel ||
        showRickCarousel ||
        showMscCarousel ||
        showDashCarousel ||
        showCarouselManagement
      }
      size="xl"
      centered
    >
      {showCarouselManagement && (
        <Carousel>
          <Carousel.Item>
            <img className="d-block w-100" src={logGes} alt="Second slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={taskGes} alt="First slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={newGes} alt="Third slide" />
          </Carousel.Item>
        </Carousel>
      )}
      {showPokemonCarousel && (
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={pokeHomeOriginal}
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={pokeHome} alt="First slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={pokedetail} alt="Third slide" />
          </Carousel.Item>
        </Carousel>
      )}

      {showRickCarousel && (
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={rickLanding}
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={rickHome} alt="First slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={rickEpisode}
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={rickFav} alt="First slide" />
          </Carousel.Item>
        </Carousel>
      )}

      {showMscCarousel && (
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={mscLanding}
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100 " src={mscHome} alt="First slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={mscCart} alt="Third slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={mscRegister}
              alt="Third slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={mscReviews} alt="Third slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={mscSofa} alt="Third slide" />
          </Carousel.Item>
        </Carousel>
      )}
      {showDashCarousel && (
        <Carousel>
          <Carousel.Item>
            <img className="d-block w-100" src={dashDash} alt="Second slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={DashCart} alt="First slide" />
          </Carousel.Item>
          {/* <Carousel.Item>
            <img className="d-block w-100" src={dashDash} alt="Third slide" />
          </Carousel.Item> */}
          <Carousel.Item>
            <img className="d-block w-100" src={dashPoke} alt="Third slide" />
          </Carousel.Item>
          {/* <Carousel.Item>
            <img className="d-block w-100" src={dashDash} alt="Third slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={dashDash} alt="Third slide" />
          </Carousel.Item> */}
        </Carousel>
      )}
    </Modal>
  );
}
