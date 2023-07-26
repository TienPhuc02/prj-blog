import React from "react";
import styled from "styled-components";
import Header from "../../Components/layout/Header";
import Layout from "../../Components/layout/Layout";
import HomeBanner from "../../module/home/HomeBanner";
import PostFeatureItem from "../../module/post/PostFeatureItem";
import PostNewLarge from "../../module/post/PostNewLarge";
import PostNewItem from "../../module/post/PostNewItem";
import PostItem from "../../module/post/PostItem";
const HomePageStyles = styled.div`
  max-width: 1920px;
  width: 100%;
  margin: 0 auto;
  height: 100vh;
  /* padding: 20px 150px; */
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
        <PostFeatureItem />
        <div className="newest-update">
          <PostNewLarge />
          <PostNewItem />
        </div>
        <PostItem />
      </Layout>
    </HomePageStyles>
  );
};

export default HomePage;
