import React from "react";
import { NavLink } from "react-router-dom";
import styled, { css } from "styled-components";
const DivButtonStyles = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ButtonStyles = styled.button`
  padding: 0 25px;
  border-radius: 10px;
  /* width: 100%; */
  color: white;
  display: flex;
  font-weight: 600;
  justify-content: center;
  align-items: center;
  height: ${(props) => props.height || "70px"};
  font-size: 18px;
  max-width: 350px;
  color: ${(props) => props.theme.primary};
  ${(props) =>
    props.kind === "primary" &&
    css`
      color: white;
      background: linear-gradient(107.61deg, #00a7b4 15.59%, #a4d96c 87.25%);
    `};
  margin: 0 auto;
  cursor: pointer;
  &:disabled {
    opacity: 0.5;
    pointer-events: none;
  }
`;
const Button = ({ children, isLoading, type, ...props }) => {
  //   console.log(isLoading);
  const { to } = props;
  if (to !== "" && typeof to === "string") {
    return (
      <NavLink to={to}>
        <DivButtonStyles>
          {isLoading === true ? (
            <ButtonStyles disabled type={type} {...props}>
              {children}
            </ButtonStyles>
          ) : (
            <ButtonStyles type={type} {...props}>
              {children}
            </ButtonStyles>
          )}
        </DivButtonStyles>
      </NavLink>
    );
  }
  return (
    <DivButtonStyles>
      {isLoading === true ? (
        <ButtonStyles disabled type={type} {...props}>
          {children}
        </ButtonStyles>
      ) : (
        <ButtonStyles type={type} {...props}>
          {children}
        </ButtonStyles>
      )}
    </DivButtonStyles>
  );
};

export default Button;
