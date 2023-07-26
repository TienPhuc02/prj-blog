import React from "react";
import Heading from "../../Components/layout/Heading";
import PostFeature from "../post/PostFeature";

const HomeFeature = () => {
  return (
    <>
      <div className="container">
        <Heading>Feature</Heading>
        <div className="grid-feature">
          <PostFeature />
          <PostFeature />
          <PostFeature />
        </div>
      </div>
    </>
  );
};

export default HomeFeature;
