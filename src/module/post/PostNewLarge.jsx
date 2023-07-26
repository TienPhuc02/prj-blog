import styled from "styled-components";
const PostNewLargeStyles = styled.div`
  .newest {
    &-large-header {
      max-width: 250px;
      max-height: 44px;
      margin-bottom: 30px;
    }
    &-large-bar {
      margin-bottom: 5px;
    }
    &-large-title {
      font-family: "Montserrat", sans-serif;
      font-weight: 500;
      font-size: 28px;
      color: #3a1097;
    }
    &-large-img {
      max-width: 570px;
      margin-bottom: 25px;
      img {
        width: 100%;
      }
    }
    &-large-footer {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
    }
    &-large-button {
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
    &-large-text {
      color: #232323;
      font-family: "Montserrat", sans-serif;
      font-weight: 500;
      font-size: 22px;
      margin-bottom: 10px;
    }
    &-large-author {
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
const PostNewLarge = () => {
  return (
    <PostNewLargeStyles>
      <div className="newest-large-header">
        <div className="newest-large-bar">
          <img src="./bar.png" alt="" />
        </div>
        <div className="newest-large-title">Newest update</div>
      </div>
      <div className="newest-large-img">
        <img src="./img newest large.png" alt="" />
      </div>
      <div className="newest-large-footer">
        <div className="newest-large-button">
          <button>Kiến Thức</button>
        </div>
        <div className="newest-large-text">
          Hướng dẫn setup phòng cực chill dành cho người mới toàn tập
        </div>
        <div className="newest-large-author">
          <span>Mar 23</span>
          <img src="./Ellipse 22 (1).png" alt="" />
          <span>Andiez Le</span>
        </div>
      </div>
    </PostNewLargeStyles>
  );
};

export default PostNewLarge;
