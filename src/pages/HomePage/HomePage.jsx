import React from "react";
import styled from "styled-components";
import Header from "../../Components/Header/Header";
const HomePageStyles = styled.div`
  max-width: 1920px;
  width: 100%;
  margin: 0 auto;
  .homepage-container {
    height: 100vh;
    margin: 20px 150px;
  }
`;
const HomePage = () => {
  return (
    <HomePageStyles>
      <div className="homepage-container">
        <Header />
      </div>
    </HomePageStyles>
  );
};

export default HomePage;
