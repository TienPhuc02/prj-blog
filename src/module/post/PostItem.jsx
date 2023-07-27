import React from "react";
import styled from "styled-components";
import PostButton from "./PostButton";
import PostTitle from "./PostTitle";
import PostMeta from "./PostMeta";
const PostItemStyles = styled.div`
  .post {
    &-item {
    }
    &-item-img {
      margin-bottom: 20px;
    }
    &-item-content {
    }
    &-item-button {
      button {
        margin-top: 20px;
        background-color: ${(props) => props.theme.bgButtonFeature};
        padding: 4px 10px;
        border-radius: 10px;
        color: ${(props) => props.theme.grayScale};
        font-family: ${(props) => props.theme.fontFamilyFeature};
        font-size: 14px;
      }
    }
    &-item-title {
      font-family: ${(props) => props.theme.fontFamilyFeature};
      font-size: 18px;
      font-weight: 500;
      line-height: 28px;
      margin: 10px 0px;
    }
    &-item-author {
      display: flex;
      align-items: center;
      column-gap: 15px;
      span {
        font-family: ${(props) => props.theme.fontFamilyFeature};
        font-size: 14px;
        font-weight: 500;
        color: ${(props) => props.theme.grayScale};
      }
      img {
        width: 6px;
        height: 6px;
      }
    }
  }
`;
const PostItem = () => {
  return (
    <PostItemStyles>
      <div className="post-item">
        <div className="post-item-img">
          <img src="./featureitem.png" alt="" />
        </div>
        <div className="post-item-content">
          <PostButton type="primary">Kiến Thức</PostButton>
          <PostTitle size="normal" color="black">
            Hướng dẫn setup phòng cực chill dành cho người mới toàn tập
          </PostTitle>
          <PostMeta type="gray">
            <span>Mar 23</span>
            <img src="./Ellipse 22 (1).png" alt="" />
            <span>Andiez Le</span>
          </PostMeta>
        </div>
      </div>
    </PostItemStyles>
  );
};

export default PostItem;
