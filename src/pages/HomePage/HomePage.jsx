import React from "react";
import styled from "styled-components";

import Layout from "../../Components/layout/Layout";
import HomeBanner from "../../module/home/HomeBanner";
import HomeFeature from "../../module/home/HomeFeature";
import HomePostNewest from "../../module/home/HomePostNewest";

const HomePageStyles = styled.div`
  max-width: 1920px;
  width: 100%;
  margin: 0 auto;
  height: 100vh;
  .newest-update {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    width: 100%;
    margin: 60px auto 0px;
    flex-direction: columns;
    max-width: 1180px;
  }
`;
const HomePage = () => {
  return (
    <HomePageStyles>
      <Layout>
        <HomeBanner />
        <HomeFeature />
        <HomePostNewest />
      </Layout>
    </HomePageStyles>
  );
};

export default HomePage;
