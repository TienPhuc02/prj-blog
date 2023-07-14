import React, { Children } from "react";
import styled from "styled-components";
const LabelStyles = styled.div`
  color: ${(props) => props.theme.grayDark};
  font-weight: 600px;
  cursor: pointer;
`;
const Label = ({ htmlFor = "", children, ...props }) => {
  return (
    <LabelStyles htmlFor={htmlFor} {...props}>
      {children}
    </LabelStyles>
  );
};

export default Label;
