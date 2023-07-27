import React from "react";
import styled from "styled-components";
import PostButton from "./PostButton";
import PostTitle from "./PostTitle";
import PostMeta from "./PostMeta";
const PostNewestItemStyles = styled.div`
  background-color: ${(props) => props.theme.bgButtonFeature};
  padding: 30px 0px 30px 20px;
  border-bottom: 1px solid #ccc;
  .post {
    &-newest-item {
      display: flex;
    }
    &-newest-item-img {
      max-width: 181px;
      margin-right: 20px;
      img {
        width: 100%;
      }
    }
    &-newest-item-content {
    }
    &-newest-item-button {
      button {
        background-color: ${(props) => props.theme.grayScale3};
        padding: 4px 10px;
        border-radius: 10px;
        color: ${(props) => props.theme.grayScale};
        font-family: ${(props) => props.theme.fontFamilyFeature};
        font-size: 14px;
      }
    }
    &-newest-item-title {
      font-family: ${(props) => props.theme.fontFamilyFeature};
      font-size: 18px;
      font-weight: 500;
      line-height: 28px;
      margin: 10px 0px;
    }
    &-newest-item-author {
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
const PostNewestItem = (props) => {
  return (
    <PostNewestItemStyles>
      <div className="post-newest-item">
        <div className="post-newest-item-img">
          <img src="./featureitem.png" alt="" />
        </div>
        <div className="post-newest-item-content">
          <PostButton type="secondary">Kiến Thức</PostButton>
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
    </PostNewestItemStyles>
  );
};

export default PostNewestItem;
