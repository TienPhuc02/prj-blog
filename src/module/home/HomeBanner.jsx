import React from "react";
import styled from "styled-components";
import Button from "../../Components/button";
import { Link, useNavigate } from "react-router-dom";
const HomeBannerStyles = styled.div`
  height: 520px;
  color: white;
  padding-right: 40px;
  padding-bottom: 40px;
  background-image: linear-gradient(
    to right bottom,
    ${(props) => props.theme.borders},
    ${(props) => props.theme.third}
  );
  .banner {
    display: flex;
    justify-content: space-between;
    align-items: center;
    &-content {
    }
    &-title {
      max-width: 445px;
      height: 59px;
      font-weight: 700;
      display: inline-block;
      font-size: 48px;
      margin-left: 35px;
      margin-bottom: 30px;
      font-family: "Montserrat", sans-serif;
    }
    &-description {
      max-width: 430px;
      max-height: 100px;
      margin-left: 35px;
      margin-bottom: 40px;
      font-family: "Montserrat", sans-serif;
      font-weight: 400;
    }
    &-logo {
      margin-top: 50px;
    }
    &-button {
      display: flex;
      margin-left: 35px;
      justify-content: flex-start;
    }
  }
`;
const HomeBanner = () => {
  const navigate = useNavigate();
  const onClick = () => {
    navigate("/sign-up");
  };
  return (
    <HomeBannerStyles>
      <div className="banner">
        <div className="banner-content">
          <div className="banner-title">
            <p>Monkey Blogging</p>
          </div>
          <div className="banner-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi.
          </div>
          <div className="banner-button">
            <Button onClick={onClick}>Get Started</Button>
          </div>
        </div>
        <div className="banner-logo">
          <img src="./banner.png" alt="" />
        </div>
      </div>
    </HomeBannerStyles>
  );
};

export default HomeBanner;
