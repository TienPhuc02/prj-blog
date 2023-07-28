import React from "react";
import Input from "./Input";
import { IconEyeClose, IconEyeOpen } from "../icon";

const InputPasswordToggle = ({
  iconStatePassword,
  control,
  ClickIconInput,
}) => {
  return (
    <>
      <Input
        id="password"
        type={iconStatePassword ? "password" : "text"}
        name="password"
        placeholder="Enter your Password"
        control={control}
      >
        {iconStatePassword ? (
          <IconEyeClose
            className="input-icon"
            onClick={ClickIconInput}
          ></IconEyeClose>
        ) : (
          <IconEyeOpen
            className="input-icon"
            onClick={ClickIconInput}
          ></IconEyeOpen>
        )}
      </Input>
    </>
  );
};

export default InputPasswordToggle;
