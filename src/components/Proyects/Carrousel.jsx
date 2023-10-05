import React from "react";
import Carousel from "react-bootstrap/Carousel";
import pokeHome from "../../PokeHomet.png";
import pokedetail from "../../PokeDetail.png";
import rickLanding from "../../RickLanding.png";
import rickHome from "../../rickHome.png";
import rickEpisode from "../../rickEp.png";
import rickFav from "../../rickFav.png";
//images

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
    </Modal>
  );
}
