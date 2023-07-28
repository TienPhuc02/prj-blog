import React from "react";
import styled from "styled-components";
import PostButton from "./PostButton";
import PostTitle from "./PostTitle";
import PostMeta from "./PostMeta";
import PostImage from "./PostImage";
const PostFeatureStyles = styled.div`
  .post {
    &-feature-item {
      position: relative;
    }
    &-feature-img {
    }
    &-feature-header {
      width: 326px;
      position: absolute;
      top: 22px;
      left: 26px;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    &-feature-author {
      display: flex;
      margin-right: 9px;
      align-items: center;
      column-gap: 10px;
      font-size: 14px;
      color: ${(props) => props.theme.grayScale2};
      font-family: ${(props) => props.theme.fontFamilyFeature};
      img {
        width: 6px;
        height: 6px;
      }
    }
    &-feature-title {
      max-width: 326px;
      position: absolute;
      top: 65px;
      left: 26px;
      font-size: 22px;
      color: ${(props) => props.theme.grayScale3};
      font-family: ${(props) => props.theme.fontFamilyFeature};
    }
  }
`;
const PostFeature = () => {
  return (
    <PostFeatureStyles>
      <div className="post-feature-item">
        <PostImage
          className="post-feature-img"
          src="./featureitem.png"
          to="/"
        ></PostImage>
        <div className="post-feature-header">
          <PostButton type="primary">Kiến Thức</PostButton>
          <PostMeta type="white">
            <span>Mar 23</span>
            <img src="./Ellipse 22.png" alt="" />
            <span>Andiez Le</span>
          </PostMeta>
        </div>
        <PostTitle className="post-feature-title">
          Hướng dẫn setup phòng cực chill dành cho người mới toàn tập
        </PostTitle>
      </div>
    </PostFeatureStyles>
  );
};

export default PostFeature;
