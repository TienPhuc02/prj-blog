import React from "react";
import styled from "styled-components";
import Header from "../../Components/layout/Header";
import Layout from "../../Components/layout/Layout";
import HomeBanner from "../../module/home/HomeBanner";
const HomePageStyles = styled.div`
  max-width: 1920px;
  width: 100%;
  margin: 0 auto;
  height: 100vh;
  /* padding: 20px 150px; */
`;
const HomePage = () => {
  return (
    <HomePageStyles>
      <Layout>
        <HomeBanner />
      </Layout>
    </HomePageStyles>
  );
};

export default HomePage;
