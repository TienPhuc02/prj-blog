import React, { useState } from "react";
import styled from "styled-components";
import { Label } from "../../Components/label";
import Input from "../../Components/input";
import { useForm } from "react-hook-form";
import Field from "../../Components/field";
import { IconEyeClose, IconEyeOpen } from "../../Components/icon";
const SignUpPageStyles = styled.div`
  min-height: 100vh;
  padding: 40px;
  .logo {
    margin: 0 auto 20px;
  }
  .heading {
    text-align: center;
    color: ${(props) => props.theme.primary};
    font-weight: bold;
    font-size: 40px;
    margin-bottom: 60px;
  }
  .form {
    max-width: 600px;
    margin: 0 auto;
  }
  form {
    margin-bottom: 50px;
  }
`;
const SignUpPage = () => {
  const [iconStatePassword, setIconStatePassword] = useState(true);
  const {
    control,
    handleSubmit,
    // formState: { error, isValid, isSubmitting },
    // watch,
  } = useForm({});
  const handleSignUp = (values) => {
    console.log(values);
  };
  const ClickIconInput = () => {
    setIconStatePassword(!iconStatePassword);
  };
  return (
    <SignUpPageStyles>
      <div className="container">
        <img srcSet="./logo.png 2x" alt="logo-blog" className="logo" />
        <h1 className="heading">Monkey Blogging</h1>
        <form className="form" onSubmit={handleSubmit(handleSignUp)}>
          <Field className="field">
            <Label htmlFor="fullname">Fullname</Label>
            <Input
              type="text"
              name="fullname"
              placeholder="Enter your Fullname"
              control={control}
            />
          </Field>
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
        </form>
      </div>
    </SignUpPageStyles>
  );
};

export default SignUpPage;
