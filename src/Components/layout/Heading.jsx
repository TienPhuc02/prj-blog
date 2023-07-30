import React from "react";
import styled, { css } from "styled-components";
const HeadingStyles = styled.div`
  margin-bottom: 30px;
  .heading {
    &-bar {
      width: 35px;
      height: 3px;
      background-color: ${(props) => props.theme.accent};
      margin: 60px 0px 5px;
    }
    &-title {
      font-size: 28px;
      font-weight: 600;
      color: ${(props) => props.theme.tertiary};
      ${(props) =>
        props.className === "green" &&
        css`
          color: ${(props) => props.theme.colorTitle2};
        `};
    }
  }
`;
const Heading = (props) => {
  return (
    <HeadingStyles className={props.className}>
      <div className="heading-bar"></div>
      <div className="heading-title">{props.children}</div>
    </HeadingStyles>
  );
};

export default Heading;
