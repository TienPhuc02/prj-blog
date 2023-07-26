import React from "react";
import styled from "styled-components";
const PostItemStyles = styled.div`
  max-width: 1180px;
  width: 100%;
  margin: 60px auto 20px;
  .post {
    &-item-list {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
    }
    &-item {
      max-width: 267px;
      max-height: 370px;
    }
    &-item-img {
    }
    &-item-footer {
    }
    &-item-button {
      button {
        background-color: #f3edff;
        padding: 4px 10px;
        border-radius: 10px;
        font-family: "Montserrat", sans-serif;
        font-weight: 500;
        font-size: 14px;
        color: #6b6b6b;
        margin-bottom: 10px;
      }
    }
    &-item-text {
      color: #232323;
      font-family: "Montserrat", sans-serif;
      font-weight: 500;
      font-size: 18px;
      margin-bottom: 10px;
      line-height: 24px;
    }
    &-item-author {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      column-gap: 15px;
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
const PostItem = () => {
  return (
    <PostItemStyles>
      <div className="post-item-list">
        <div className="post-item">
          <div className="post-item-img">
            <img src="./post item.png" alt="" />
          </div>
          <div className="post-item-footer">
            <div className="post-item-button">
              <button>Kiến Thức</button>
            </div>
            <div className="post-item-text">
              Hướng dẫn setup phòng cực chill dành cho người mới toàn tập
            </div>
            <div className="post-item-author">
              <span>Mar 23</span>
              <img src="./Ellipse 22 (1).png" alt="" />
              <span>Andiez Le</span>
            </div>
          </div>
        </div>
        <div className="post-item">
          <div className="post-item-img">
            <img src="./post item.png" alt="" />
          </div>
          <div className="post-item-footer">
            <div className="post-item-button">
              <button>Kiến Thức</button>
            </div>
            <div className="post-item-text">
              Hướng dẫn setup phòng cực chill dành cho người mới toàn tập
            </div>
            <div className="post-item-author">
              <span>Mar 23</span>
              <img src="./Ellipse 22 (1).png" alt="" />
              <span>Andiez Le</span>
            </div>
          </div>
        </div>
        <div className="post-item">
          <div className="post-item-img">
            <img src="./post item.png" alt="" />
          </div>
          <div className="post-item-footer">
            <div className="post-item-button">
              <button>Kiến Thức</button>
            </div>
            <div className="post-item-text">
              Hướng dẫn setup phòng cực chill dành cho người mới toàn tập
            </div>
            <div className="post-item-author">
              <span>Mar 23</span>
              <img src="./Ellipse 22 (1).png" alt="" />
              <span>Andiez Le</span>
            </div>
          </div>
        </div>
        <div className="post-item">
          <div className="post-item-img">
            <img src="./post item.png" alt="" />
          </div>
          <div className="post-item-footer">
            <div className="post-item-button">
              <button>Kiến Thức</button>
            </div>
            <div className="post-item-text">
              Hướng dẫn setup phòng cực chill dành cho người mới toàn tập
            </div>
            <div className="post-item-author">
              <span>Mar 23</span>
              <img src="./Ellipse 22 (1).png" alt="" />
              <span>Andiez Le</span>
            </div>
          </div>
        </div>
      </div>
    </PostItemStyles>
  );
};

export default PostItem;
