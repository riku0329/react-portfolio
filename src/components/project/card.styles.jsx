import styled from "styled-components";

import Colors from "../shared/color";

import newsImg from "../../img/news.jpg";
import ecImg from "../../img/ec-shop.jpg";
import portfolioImg from "../../img/portfolio.jpeg";

export const Card = styled.div`
  -moz-perspectiv: 150rem;
  perspective: 150rem;
  position: relative;
  height: 30rem;

  .front {
    background-color: white;
  }

  .back {
    transform: rotateY(180deg);

    &_1 {
      background-image: linear-gradient(
        to right bottom,
        ${Colors.TERTIARY_LIGHT},
        ${Colors.TERTIARY_DARK}
      );
    }

    &_2 {
      background-image: linear-gradient(
        to right bottom,
        ${Colors.PRIMARY_LIGHT},
        ${Colors.PRIMARY_DARK}
      );
    }

    &_3 {
      background-image: linear-gradient(
        to right bottom,
        ${Colors.SECONDARY_LIGHT},
        ${Colors.SECONDARY_DARK}
      );
    }
  }

  &:hover .front {
    -webkit-transform: rotateY(-180deg);
    transform: rotateY(-180deg);
  }

  &:hover .back {
    -webkit-transform: rotateY(0deg);
    transform: rotateY(0deg);
  }

  .CardPicture__1 {
    background-image: linear-gradient(
        to right bottom,
        ${Colors.TERTIARY_LIGHT},
        ${Colors.TERTIARY_DARK}
      ),
      url(${newsImg});
  }

  .CardPicture__2 {
    background-image: linear-gradient(
        to right bottom,
        ${Colors.PRIMARY_LIGHT},
        ${Colors.PRIMARY_DARK}
      ),
      url(${ecImg});
  }

  .CardPicture__3 {
    background-image: linear-gradient(
        to right bottom,
        ${Colors.SECONDARY_LIGHT},
        ${Colors.SECONDARY_DARK}
      ),
      url(${portfolioImg});
  }

  @media screen and (max-width: 800px) {
    height: auto;
    border-radius: 3px;
    background-color: ${Colors.WHITE};
    box-shadow: 0 1.5rem 4rem rgba(0, 0, 0, 0.2);

    .back {
      transform: rotateY(0);
      clip-path: polygon(0 15%, 100% 0, 100% 100%, 0 100%);
    }

    &:hover .front {
      -webkit-transform: rotateY(0);
      transform: rotateY(0);
    }
  }
`;

export const CardSide = styled.div`
  height: 30rem;
  transition: all 0.8s ease;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  border-radius: 8px;
  box-shadow: 0 1.5rem 4rem rgba(0, 0, 0, 0.2);
  overflow: hidden;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;

  @media screen and (max-width: 800px) {
    height: auto;
    position: relative;
    box-shadow: none;
    border-radius: 0;
  }
`;

export const BackText = styled.p``;
