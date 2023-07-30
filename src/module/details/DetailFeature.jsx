import React from "react";
import PostButton from "../post/PostButton";
import PostTitle from "../post/PostTitle";
import PostMeta from "../post/PostMeta";

const DetailFeature = () => {
  return (
    <div className=" detail-header grid grid-cols-2 gap-x-[60px]  mt-[120px] max-w-[1440px] mx-auto ">
      <div className="detail-header-img ">
        <img
          className="w-full h-full object-cover"
          src="./img detail.png"
          alt=""
        />
      </div>
      <div className="detail-header-content flex max-w-[530px] flex-col justify-center gap-y-6">
        <PostButton type="primary">Kiến Thức</PostButton>
        <PostTitle className="title-detail-header" size="bigger" color="green">
          Hướng dẫn setup phòng cực chill dành cho người mới toàn tập
        </PostTitle>
        <div className="detail-header-content-meta flex justify-between">
          <PostMeta type="gray">
            <span>Mar 23</span>
            <img src="./Ellipse 22 (1).png" alt="" />
            <span>Andiez Le</span>
          </PostMeta>
          <div className="detail-header-view flex justify-center items-center">
            <img className="w-[12px] h-[12px] mr-2" src="./Shape.png" alt="" />
            <span style={{ fontWeight: 600 }}>1204</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailFeature;
