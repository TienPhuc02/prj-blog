import React from "react";
import Heading from "../../Components/layout/Heading";
import PostNewestLarge from "../post/PostNewestLarge";
import PostNewestItem from "../post/PostNewestItem";
import PostItem from "../post/PostItem";

const HomePostNewest = () => {
  return (
    <div className="container">
      <Heading>Newest Update</Heading>
      <div className="grid-post-newest-header">
        <PostNewestLarge />
        <div className="grid-post-newest-header-right">
          <PostNewestItem />
          <PostNewestItem />
          <PostNewestItem />
        </div>
      </div>
      <div className="grid-post-newest-footer">
        <PostItem />
        <PostItem />
        <PostItem />
        <PostItem />
      </div>
    </div>
  );
};

export default HomePostNewest;
