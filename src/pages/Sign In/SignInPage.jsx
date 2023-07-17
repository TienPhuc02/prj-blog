import React, { useState } from "react";
import styled from "styled-components";
import Field from "../../Components/field";
import { Label } from "../../Components/label";
import Input from "../../Components/input";
import { useForm } from "react-hook-form";
import { IconEyeClose, IconEyeOpen } from "../../Components/icon";
import Button from "../../Components/button";
import Loading from "../../Components/loading";
const SignInStyles = styled.div`
  width: 100%;
  max-width: 1540px;
  margin: 0 auto;
  padding: 20px;
  height: 100vh;
  .form {
    max-width: 600px;
    margin: 0 auto;
  }
  form {
    margin-bottom: 50px;
  }
`;
const LogoStyles = styled.div`
  img {
    margin: 0 auto;
  }
`;
const HeadingStyles = styled.div`
  h1 {
    color: ${(props) => props.theme.primary};
    text-align: center;
    margin-top: 20px;
    margin-bottom: 80px;
  }
`;
const SignInPage = () => {
  const [iconStatePassword, setIconStatePassword] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const {
    control,
    handleSubmit,
    // formState: { errors, isValid },
    // watch,
    // reset,
  } = useForm({});
  const ClickIconInput = () => {
    setIconStatePassword(!iconStatePassword);
  };
  const handleSignUp = (values) => {
    console.log(values);
  };
  return (
    <SignInStyles>
      <LogoStyles>
        <img srcSet="/logo.png 2x" alt="" />
      </LogoStyles>
      <HeadingStyles>
        <h1>Monkey Blogging</h1>
      </HeadingStyles>
      <form
        className="form"
        autoComplete="off"
        onSubmit={handleSubmit(handleSignUp)}
      >
        <Field className="field">
          <Label htmlFor="email">Email Address</Label>
          <Input
            type="text"
            name="email"
            placeholder="Enter your Email"
            control={control}
          />
        </Field>
        <Field className="field">
          <Label htmlFor="password">Password</Label>
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
        </Field>
        <Button type="submit" isLoading={isLoading}>
          {isLoading === false ? <span>Sign Up</span> : <Loading />}
        </Button>
      </form>
    </SignInStyles>
  );
};

export default SignInPage;
