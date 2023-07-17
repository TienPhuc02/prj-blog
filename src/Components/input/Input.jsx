import React from "react";
import { useController } from "react-hook-form";
import styled from "styled-components";
const InputStyle = styled.div`
  position: relative;
  width: 100%;
  input {
    width: 100%;
    background-color: ${(props) => props.theme.grayLight};
    padding: ${(props) => (props.hasIcon ? "20px 60px 20px 20px " : "20px")};
    border: 1px solid #999999;
    border-radius: 8px;
    font-weight: 500px;
    transition: all 0.2s linear;
    border: 1px solid transparent;
  }
  input:focus {
    background-color: white;
    border-color: ${(props) => props.theme.primary};
  }
  input::-webkit-input-placeholder {
    color: #84878b;
  }
  input::-moz-input-placeholder {
    color: #84878b;
  }
  .input-icon {
    position: absolute;
    right: 20px;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
  }
`;
const Input = ({ name = "", type = "text", children, control, ...props }) => {
  const { field } = useController({
    control,
    name,
    defaultValue: "",
  });
  return (
    <InputStyle hasIcon={children ? true : false}>
      <input autoComplete="off" id={name} type={type} {...field} {...props} />
      {children}
    </InputStyle>
  );
};

export default Input;
