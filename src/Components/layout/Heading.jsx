import React from "react";
import styled from "styled-components";
const HeadingStyles = styled.div`
  .heading {
    &-bar {
      width: 35px;
      height: 3px;
      background-color: ${(props) => props.theme.accent};
      margin: 60px 0px 5px;
    }
    &-title {
      font-size: 28px;
      font-weight: 500;
      color: ${(props) => props.theme.tertiary};
    }
  }
`;
const Heading = (props) => {
  return (
    <HeadingStyles>
      <div className="heading-bar"></div>
      <div className="heading-title">{props.children}</div>
    </HeadingStyles>
  );
};

export default Heading;
