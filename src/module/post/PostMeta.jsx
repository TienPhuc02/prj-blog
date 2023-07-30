import React from "react";
import styled, { css } from "styled-components";
const PostMetaStyles = styled.div`
  display: flex;
  font-weight: 600;
  margin-right: 9px;
  align-items: center;
  column-gap: 15px;
  font-size: 14px;
  ${(props) =>
    props.type === "white" &&
    css`
      color: ${(props) => props.theme.grayScale2};
    `};
  ${(props) =>
    props.type === "gray" &&
    css`
      color: ${(props) => props.theme.grayScale};
    `};
  font-family: ${(props) => props.theme.fontFamilyFeature};
  img {
    width: 6px;
    height: 6px;
  }
`;
const PostMeta = ({ children, className, type }) => {
  return (
    <PostMetaStyles className={className} type={type}>
      {children}
    </PostMetaStyles>
  );
};

export default PostMeta;
