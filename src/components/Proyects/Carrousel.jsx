import React from "react";
import Carousel from "react-bootstrap/Carousel";
import pokeHome from "../../PokeHomet.png";
import pokedetail from "../../PokeDetail.png";
import rickLanding from "../../RickLanding.png";
import rickHome from "../../rickHome.png";
import rickEpisode from "../../rickEp.png";
import rickFav from "../../rickFav.png";
import mscLanding from "../../MscAmoblamientosLan.png";
import mscHome from "../../HomeMSC.png";
import mscCart from "../../mscCart.png";
import mscRegister from "../../MSCregister.png";
import mscReviews from "../../mscReviews.png";
import mscSofa from "../../moreDetailMsc.png";
import dashDash from "../../Dash-dash.png";
import DashCart from "../../dash-Cartt.png";
import dashPoke from "../../dash-Poke.png";
//images

import pokeHomeOriginal from "../../pokeHomeOriginal.png";

import Modal from "react-bootstrap/Modal";

export default function Carrousel({
  showPokemonCarousel,
  showRickCarousel,
  showMscCarousel,
  showDashCarousel,
  handleClose,
}) {
  return (
    <Modal
      onHide={handleClose}
      show={
        showPokemonCarousel ||
        showRickCarousel ||
        showMscCarousel ||
        showDashCarousel
      }
      size="xl"
      centered
    >
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
