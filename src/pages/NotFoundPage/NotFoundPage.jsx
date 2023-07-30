import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
const NotFoundPageStyles = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  .logo {
    display: inline-block;
    margin-bottom: 40px;
  }
  .heading {
    font-size: 60px;
    font-weight: bold;
  }
  .button-back {
    text-decoration: none;
  }
  .back {
    display: inline-block;
    padding: 15px 30px;
    text-decoration: none;
    color: white;
    background-color: ${(props) => props.theme.primary};
    border-radius: 12px;
    font-weight: 500;
  }
`;
const NotFoundPage = () => {
  return (
    <NotFoundPageStyles>
      <NavLink to="/" className="logo">
        <img srcSet="/logo.png 2x" alt="" />
      </NavLink>
      <h1 className="heading">Oops!Page Not Found</h1>
      <NavLink to="/" className={"back"}>
        Back To Home
      </NavLink>
    </NotFoundPageStyles>
  );
};

export default NotFoundPage;
