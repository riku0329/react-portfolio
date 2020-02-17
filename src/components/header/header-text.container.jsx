import styled, { keyframes } from "styled-components";

const moveInLeft = keyframes`
  0% {
    opacity: 0;
    transform: translateX(-100px);
  }

  80% {
    transform: translateX(10px)

  }
  100% {
    opcity: 1;
    tronsform: translateX(0);
  }
`;

const moveInRight = keyframes`
  0% {
    opacity: 0;
    transform: translateX(100px);
  }

  80% {
    transform: translateX(-10px)

  }
  100% {
    opcity: 1;
    tronsform: translateX(0);
  }
`;

export const TextContainer = styled.div`
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const HeaderPrimary = styled.h1`
  color: black;
  text-transform: uppercase;
  backface-visibility: hidden;
`;

export const HeaderTitle = styled.span`
  display: block;
  font-size: 60px;
  font-weight: 400;
  letter-spacing: 25px;
  animation: ${moveInLeft} 1s ease-out;
`;

export const HeaderSub = styled.span`
  display: block;
  font-size: 20px;
  font-weight: 400;
  letter-spacing: 18px;
  animation: ${moveInRight} 1s ease-out;
`;
