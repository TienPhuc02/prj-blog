import React from "react";
import styled from "styled-components";
import PostButton from "./PostButton";
const PostNewestLargeStyles = styled.div`
  max-width: 570px;
  .post {
    &-newest-large-img {
      width: 100%;
      img {
        width: 100%;
        object-fit: cover;
        margin-bottom: 25px;
      }
    }
    &-newest-large-content {
    }
    &-newest-large-button {
      button {
        background-color: ${(props) => props.theme.bgButtonFeature};
        padding: 4px 10px;
        border-radius: 10px;
        color: ${(props) => props.theme.grayScale};
        font-family: ${(props) => props.theme.fontFamilyFeature};
        font-size: 14px;
      }
    }
    &-newest-large-title {
      font-family: ${(props) => props.theme.fontFamilyFeature};
      font-size: 22px;
      font-weight: 500;
      line-height: 28px;
      margin: 10px 0px;
    }
    &-newest-large-author {
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
const PostNewestLarge = () => {
  return (
    <PostNewestLargeStyles>
      <div className="post-newest-large-img">
        <img src="./featureitem.png" alt="" />
      </div>
      <div className="post-newest-large-content">
        <PostButton type="primary">Kiến Thức</PostButton>
        <div className="post-newest-large-title">
          Hướng dẫn setup phòng cực chill dành cho người mới toàn tập
        </div>
        <div className="post-newest-large-author">
          <span>Mar 23</span>
          <img src="./Ellipse 22 (1).png" alt="" />
          <span>Andiez Le</span>
        </div>
      </div>
    </PostNewestLargeStyles>
  );
};

export default PostNewestLarge;
