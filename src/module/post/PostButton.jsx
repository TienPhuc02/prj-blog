import React from "react";
import styled, { css } from "styled-components";
const PostButtonStyles = styled.div`
  button {
    padding: 4px 10px;
    border-radius: 10px;
    color: ${(props) => props.theme.grayScale};
    font-family: ${(props) => props.theme.fontFamilyFeature};
    font-size: 14px;
    ${(props) =>
      props.type === "primary" &&
      css`
        background-color: ${(props) => props.theme.bgButtonFeature};
      `};
    ${(props) =>
      props.type === "secondary" &&
      css`
        background-color: ${(props) => props.theme.grayScale3};
      `};
  }
`;
const PostButton = ({ children, type, className = "" }) => {
  return (
    <PostButtonStyles type={type} className={className}>
      <button>{children}</button>
    </PostButtonStyles>
  );
};

export default PostButton;
