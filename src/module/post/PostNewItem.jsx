import React from "react";
import styled from "styled-components";
const PostNewItemStyles = styled.div`
  margin-top: 71px;
  background-color: #f3edff;
  border-radius: 15px;
  padding: 0px 20px;
  .post {
    &-new-list {
      display: grid;
      grid-template-rows: repeat(3, 1fr);
    }
    &-new-item {
      width: 100%;
      max-height: 190px;
      height: 100%;
      display: flex;
      margin: 30px 0px;
      border-bottom: 1px solid #e0e0e0;
    }
    &-new-item-img {
      display: flex;
      justify-content: center;
      align-items: center;
      display: block;

      img {
        width: 100%;
        object-fit: cover;
        height: 100%;
        border-radius: 10px;
      }
    }
    &-new-item-content {
      padding: 10px 20px;
    }
    &-new-item-button {
      display: block;
      button {
        background-color: #fff;
        padding: 4px 10px;
        border-radius: 10px;
        font-family: "Montserrat", sans-serif;
        font-weight: 500;
        font-size: 14px;
        color: #6b6b6b;
        margin-bottom: 10px;
      }
    }
    &-new-item-title {
      color: #232323;
      font-family: "Montserrat", sans-serif;
      font-weight: 500;
      font-size: 18px;
      margin-bottom: 10px;
    }
    &-new-item-author {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      column-gap: 15px;
      font-size: 14px;
      span {
        color: #b1b5c3;
      }
      img {
        width: 6px;
        height: 6px;
      }
    }
  }
`;
const PostNewItem = () => {
  return (
    <PostNewItemStyles>
      <div className="post-new-list">
        <div className="post-new-item">
          <div className="post-new-item-img">
            <img src="./img post new item.png" alt="" />
          </div>
          <div className="post-new-item-content">
            <div className="post-new-item-button">
              <button>Kiến Thức</button>
            </div>
            <div className="post-new-item-title">
              Hướng dẫn setup phòng cực chill dành cho người mới toàn tập
            </div>
            <div className="post-new-item-author">
              <span>Mar 23</span>
              <img src="./Ellipse 22 (1).png" alt="" />
              <span>Andiez Le</span>
            </div>
          </div>
        </div>
        <div className="post-new-item">
          <div className="post-new-item-img">
            <img src="./img post new item 2.png" alt="" />
          </div>
          <div className="post-new-item-content">
            <div className="post-new-item-button">
              <button>Kiến Thức</button>
            </div>
            <div className="post-new-item-title">
              Hướng dẫn setup phòng cực chill dành cho người mới toàn tập
            </div>
            <div className="post-new-item-author">
              <span>Mar 23</span>
              <img src="./Ellipse 22 (1).png" alt="" />
              <span>Andiez Le</span>
            </div>
          </div>
        </div>
        <div className="post-new-item">
          <div className="post-new-item-img">
            <img src="./img post new item 3.png" alt="" />
          </div>
          <div className="post-new-item-content">
            <div className="post-new-item-button">
              <button>Kiến Thức</button>
            </div>
            <div className="post-new-item-title">
              Hướng dẫn setup phòng cực chill dành cho người mới toàn tập
            </div>
            <div className="post-new-item-author">
              <span>Mar 23</span>
              <img src="./Ellipse 22 (1).png" alt="" />
              <span>Andiez Le</span>
            </div>
          </div>
        </div>
      </div>
    </PostNewItemStyles>
  );
};

export default PostNewItem;
