import React from "react";

import Heading from "../../Components/layout/Heading";
import PostItem from "../post/PostItem";

const DetailList = () => {
  return (
    <div className="detail-list-container mt-[80px] max-w-[1440px] mx-auto">
      <Heading className="green">Bài Viết Liên Quan</Heading>
      <div className="detail-list-post gap-x-[30px] grid  grid-cols-4">
        <PostItem />
        <PostItem />
        <PostItem />
        <PostItem />
      </div>
    </div>
  );
};

export default DetailList;
