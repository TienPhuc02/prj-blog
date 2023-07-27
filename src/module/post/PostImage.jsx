import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
const PostImageStyles = styled.div``;
const PostImage = ({ className, src, to }) => {
  if (to !== "") {
    return (
      <NavLink to={to} style={{ display: "block" }}>
        <PostImageStyles className={className}>
          <img src={src} alt="" />
        </PostImageStyles>
      </NavLink>
    );
  }
  return (
    <PostImageStyles className={className}>
      <img src={src} alt="" />
    </PostImageStyles>
  );
};

export default PostImage;
