import styled from "styled-components";

export const FooterComponent = styled.div`
  position: relative;
  bottom: 0;
  width: 100%;
  padding: 40px 0;
  background-color: #131313;
  text-align: center;
  padding-bottom: 25px;
  color: #00ffee;

  ul {
    margin-top: 0;
    padding: 0;
    font-size: 18px;
    line-height: 1.6;
    margin-bottom: 0;
    text-align: center;
    display: inline-block;
    padding: 0 15px;
    color: white;
    border-bottom: 3px solid transparent;
    transition: 0.3s ease-in-out;
  }

  li {
    display: inline-block;
    padding: 0 15px;
    color: white;
    border-bottom: 3px solid transparent;
    transition: 0.3s ease-in-out;
  }

  a {
    color: white;
    border-bottom: 3px solid transparent;
    transition: 0.3s ease-in-out;
  }

  ul:hover {
    border-bottom: 3px solid #00ffee;
  }

  li:hover {
    border-bottom: 3px solid #00ffee;
  }

  a:hover {
    border-bottom: 3px solid #00ffee;
  }

  .copyright {
    margin-top: 50px;
    text-align: center;
    font-size: 16px;
    color: white;
  }
`;

export const SocialIconsF = styled.div`
  text-align: center;
  padding-bottom: 25px;
  color: #00ffee;

  .social {
    display: inline-block;
    justify-content: center;
    align-items: center;
    width: 42px;
    height: 42px;
    line-height: 42px;
    background: transparent;
    border: 2px solid #00ffee;
    font-size: 25px;
    border-radius: 50%;
    color: #00ffee;
    margin: 0 10px;
    transition: 0.3s ease-in-out;
    text-align: center;
  }

  .social:hover {
    color: black;
    transform: scale(1.2) translateY(-10px);
    box-shadow: 0 0 25px #00ffee;
    background-color: #00ffee;
  }
`;
