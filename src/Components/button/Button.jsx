import React from "react";
import styled from "styled-components";
const Button = ({ children, isLoading, type, ...props }) => {
  const DivButtonStyles = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
  `;
  const ButtonStyles = styled.button`
    background: linear-gradient(107.61deg, #00a7b4 15.59%, #a4d96c 87.25%);
    padding: 0 25px;
    border-radius: 10px;
    width: 100%;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    height: ${(props) => props.height || "70px"};
    font-size: 18px;
    max-width: 350px;
    margin: 0 auto;
    cursor: pointer;
    &:disabled {
      opacity: 0.5;
      pointer-events: none;
    }
  `;
  //   console.log(isLoading);
  return (
    <DivButtonStyles>
      {isLoading === true ? (
        <ButtonStyles disabled type={type}>
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