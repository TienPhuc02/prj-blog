import React from "react";
import styled from "styled-components";
const Field = ({ children }) => {
  const FieldStyles = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 20px;
    align-items: flex-start;
    margin-bottom: 50px;
  `;
  return <FieldStyles>{children}</FieldStyles>;
};

export default Field;
