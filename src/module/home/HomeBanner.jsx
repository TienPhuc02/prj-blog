import React from "react";
import styled from "styled-components";
import Button from "../../Components/button";
import { useNavigate } from "react-router-dom";
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
      padding-left: 150px;
    }
    &-title {
      width: 480px;
      font-weight: 700;
      display: inline-block;
      font-size: 48px;

      padding-bottom: 30px;
      font-family: "Montserrat", sans-serif;
    }
    &-description {
      max-width: 421px;
      width: 100%;

      font-size: 14px;
      padding-bottom: 40px;
      line-height: 28px;
      font-family: "Montserrat", sans-serif;
      font-weight: 400;
    }
    &-logo {
      margin-top: 50px;
    }
    &-button {
      display: flex;

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
            <Button kind="secondary" onClick={onClick}>
              Get Started
            </Button>
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
