import React from "react";
import styled, { css } from "styled-components";
const PostTitleStyles = styled.div`
  font-weight: 500;
  margin: 10px 0px;
  line-height: 28px;
  ${(props) =>
    props.size === "normal" &&
    css`
      font-size: 18px;
    `};
  ${(props) =>
    props.className === "post-feature-title" &&
    css`
      max-width: 326px;
      position: absolute;
      top: 65px;
      left: 26px;
      font-size: 22px;
      color: #ffffff;
    `};
  ${(props) =>
    props.size === "big" &&
    css`
      font-size: 22px;
    `};
  ${(props) =>
    props.color === "black" &&
    css`
      color: #232323;
    `};
  ${(props) =>
    props.color === "white" &&
    css`
      color: #ffffff;
    `};
  font-family: ${(props) => props.theme.fontFamilyFeature};
`;

const PostTitle = ({ children, className, size, color }) => {
  return (
    <PostTitleStyles color={color} size={size} className={className}>
      {children}
    </PostTitleStyles>
  );
};

export default PostTitle;
