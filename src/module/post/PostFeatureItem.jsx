import React from "react";
import styled from "styled-components";
const PostFeatureItemStyles = styled.div`
  width: 100%;
  margin: 60px auto 0px;
  flex-direction: columns;
  max-width: 1180px;
  .feature {
    &-header {
      max-width: 106px;
      max-height: 44px;
      margin-bottom: 40px;
    }
    &-bar {
      width: 35px;
      height: 3px;
      margin-bottom: 5px;
      img {
        border-radius: 1px;
      }
    }
    &-title {
      color: #3a1097;
      font-family: "Montserrat", sans-serif;
      font-weight: 700;
      font-size: 28px;
    }
    &-list {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
    }
    &-item {
      position: relative;
    }
    &-item-header {
      position: absolute;
      top: 20px;
      left: 25px;
      display: flex;
    }
    &-button {
      button {
        padding: 4px 10px;
        border-radius: 10px;
        font-family: "Montserrat", sans-serif;
        font-weight: 500;
        font-size: 14px;
        color: #6b6b6b;
      }
    }
    &-time {
      margin-left: 90px;
      font-family: "Montserrat", sans-serif;
      display: flex;
      color: #f8f9fa;
      font-weight: 500;
      font-size: 14px;
      img {
        width: 6px;
        height: 6px;
        margin: 6px 10px;
      }
    }
    &-item-content {
      position: absolute;
      top: 60px;
      color: #ffffff;
      font-family: "Montserrat", sans-serif;
      left: 20px;
      font-weight: 500;
      font-size: 22px;
      max-width: 326px;
    }
  }
`;
const PostFeatureItem = () => {
  return (
    <PostFeatureItemStyles>
      <div className="feature-header">
        <div className="feature-bar">
          <img src="./bar.png" alt="" />
        </div>
        <div className="feature-title">Feature</div>
      </div>
      <div className="feature-list">
        <div className="feature-item">
          <img src="./featureitem.png" alt="" />
          <div className="feature-item-header">
            <div className="feature-button">
              <button>Kiến Thức</button>
            </div>
            <div className="feature-time">
              <span>Mar 23</span>
              <img src="./Ellipse 22.png" alt="" />
              <span>Andiez Le</span>
            </div>
          </div>
          <div className="feature-item-content">
            Hướng dẫn setup phòng cực chill dành cho người mới toàn tập
          </div>
        </div>
        <div className="feature-item">
          <img src="./featureitem.png" alt="" />
          <div className="feature-item-header">
            <div className="feature-button">
              <button>Kiến Thức</button>
            </div>
            <div className="feature-time">
              <span>Mar 23</span>
              <img src="./Ellipse 22.png" alt="" />
              <span>Andiez Le</span>
            </div>
          </div>
          <div className="feature-item-content">
            Hướng dẫn setup phòng cực chill dành cho người mới toàn tập
          </div>
        </div>
        <div className="feature-item">
          <img src="./featureitem.png" alt="" />
          <div className="feature-item-header">
            <div className="feature-button">
              <button>Kiến Thức</button>
            </div>
            <div className="feature-time">
              <span>Mar 23</span>
              <img src="./Ellipse 22.png" alt="" />
              <span>Andiez Le</span>
            </div>
          </div>
          <div className="feature-item-content">
            Hướng dẫn setup phòng cực chill dành cho người mới toàn tập
          </div>
        </div>
      </div>
    </PostFeatureItemStyles>
  );
};

export default PostFeatureItem;
