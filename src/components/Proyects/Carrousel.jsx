import React from "react";
import Carousel from "react-bootstrap/Carousel";
import pokeHome from "../../pokeHome2.png";
import pokeDetail from "../../pokeDetail.png";
import rickLanding from "../../rickLanding.png";
import rickHome from "../../rickHome.png";
import rickEpisode from "../../rickEp.png";
import rickFav from "../../rickFav.png";

import pokeHomeOriginal from "../../pokeHomeOriginal.png";

import Modal from "react-bootstrap/Modal";

export default function Carrousel({
  showPokemonCarousel,
  showRickCarousel,
  handleClose,
}) {
  return (
    <Modal
      onHide={handleClose}
      show={showPokemonCarousel || showRickCarousel}
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
            <img className="d-block w-100" src={pokeDetail} alt="Third slide" />
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
    </Modal>
  );
}
