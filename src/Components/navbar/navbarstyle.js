import styled, { keyframes } from "styled-components";

export const Navbar = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 3rem 12% 3rem;
  background: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(10px);
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 5;
  .logo {
    font-size: 2.5rem;
    color: var(white);
    font-weight: 800;
    cursor: pointer;
    transition: 0ms.3s ease;
  }
  .logo:hover {
    transform: scale() (1.1);
  }
  .logo span {
    text-shadow: 0 0 25px #00ffee;
  }
  .logo2 {
    display: none;
    font-size: 2.5rem;
    color: var(white);
    font-weight: 800;
    cursor: pointer;
    transition: 0ms.3s ease;
  }
  .logo2:hover {
    transform: scale() (1.1);
  }
  .logo2 span {
    text-shadow: 0 0 25px #00ffee;
  }

  @media only screen and (max-width: 1400px) {
    .logo2 {
      display: flex;
    }
  }

  @media only screen and (max-width: 1400px) {
    .logo {
      display: none;
    }
  }

  .pageswrapper {
    display: flex;
  }
  .pageswrapper p {
    font-size: 1.5rem;
    color: white;
    margin-left: 4rem;
    font-weight: 500;
    transition: 0.3s ease;
    border-bottom: 3px solid transparent;
    cursor: pointer;
  }

  .pageswrapper p:hover {
    color: #00ffee;
    border-bottom: 3px solid #00ffee;
    &.active {
      color: #00ffee;
      border-bottom: 3px solid #00ffee;
    }
  }

  .menu {
    font-size: 3.6rem;
    color: #00ffee;
    display: none;
  }
`;

export const HomeContent = styled.div`
  min-height: 100vh;
  padding: 10rem 12% 10rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10rem;
`;

const cursor = keyframes`
  to {
    border-left: 2px solid #00ffee;
  }
`;

const words = keyframes`
  0%,
  20% {
    content: "Frontend Developer";
  }
  21%,
  40% {
    content: "Backend Developer";
  }
  41%,
  60% {
    content: "Full Stack Developer";
  }
  61%,
  80% {
    content: "Backend Developer";
  }
  81%,
  100% {
    content: "Frontend Developer";
  }
`;

const typing = keyframes`
  10%, 15%, 30%, 35%, 50%, 55%, 70%, 75%, 90%, 95% {
    width: 0;
  }
  5%, 20%, 25%, 40%, 45%, 60%, 65%, 80%, 85% {
    width: calc(100% + 8px);
  }
`;

export const Homewrapper = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  text-align: left;
  justify-content: center;
  margin-top: 3rem;
  span {
    color: #00ffee;
  }

  h3 {
    margin-bottom: 2rem;
    margin-top: 1rem;
    font-size: 3.5rem;
  }
  h1 {
    display: flex;
    font-size: 4.4rem;
    font-weight: 700;
    margin-top: 1.5rem;
    line-height: 1;
  }
  p {
    font-size: 1.2rem;
    font-weight: 500;
    line-height: 1.8;
    max-width: 1000px;
  }

  .text-animation {
    font-size: 34px;
    font-weight: 600;
    min-width: 280px;
    display: inline-block;
  }
  .text-animation span {
    position: relative;

    &::before {
      content: "Web Developer";
      color: #00ffee;
      animation: ${words} 20s infinite;
    }
    &::after {
      content: "";
      background-color: black;
      position: absolute;
      width: calc() (100%+8px);
      height: 100%;
      border-left: 3px solid black;
      right: -8px;
      animation: ${cursor} 0.6s infinite, ${typing} 20s steps(14) infinite;
    }
  }
`;

export const BtnGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;

  p {
    display: inline-block;
    padding: 1rem 2.4rem;
    background: #00ffee;
    box-shadow: 0 0 25px #00ffee;
    border-radius: 4rem;
    font-size: 1.6rem;
    color: white;
    border: 2px solid transparent;
    letter-spacing: 0.1rem;
    font-weight: 600;
    transition: 0.3s ease-in-out;
    cursor: pointer;
  }

  p:hover {
    transform: scale(1.05);
    box-shadow: 0 0 50px #00ffee;
  }

  .button {
    &:nth-of-type(2) {
      background-color: black;
      color: #00ffee;
      border: 2px solid #00ffee;
      box-shadow: 0 0 25px transparent;
    }

    &:nth-of-type(2):hover {
      box-shadow: 0 0 25px #00ffee;
      background-color: #00ffee;
      color: black;
    }
  }
`;

export const HomePhoto = styled.div`
  border-radius: 50%;
  img {
    position: relative;
    top: 3rem;
    width: 32vw;
    border-radius: 50%;
    box-shadow: 0 0 25px #00ffee;
    cursor: pointer;
    transition: 0.4s ease-in-out;
  }
  img:hover {
    box-shadow: 0 0 25px #00ffee, 0 0 50px #00ffee, 0 0 100px #00ffee;
  }
`;

export const SocialIcons = styled.div`
  .social {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 4.5rem;
    height: 4.5rem;
    background: transparent;
    border: 2px solid #00ffee;
    font-size: 3.5rem;
    border-radius: 50%;
    color: #00ffee;
    margin: 3rem 1.5rem 3rem 0;
    transition: 0.3s ease-in-out;
  }

  .social:hover {
    color: black;
    transform: scale(1.3) translateY(-5px);
    box-shadow: 0 0 25px #00ffee;
    background-color: #00ffee;
  }
`;
