import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Label } from "../../Components/label";
import Input from "../../Components/input";
import { useForm } from "react-hook-form";
import Field from "../../Components/field";
import { IconEyeClose, IconEyeOpen } from "../../Components/icon";
import Button from "../../Components/button";
import Loading from "../../Components/loading";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
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
const schema = yup.object({
  fullname: yup.string().required("Please enter fullname"),
  email: yup.string().email().required("Please enter valid email address"),
  password: yup
    .string()
    .min(8, "Your password mast be at least 8 character or greater")
    .required("Please enter valid email address"),
});
const SignUpPage = () => {
  const [iconStatePassword, setIconStatePassword] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
    // watch,
    // reset,
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });
  const handleSignUp = (values) => {
    setIsLoading(true);
    if (!isValid) return;
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
        setIsLoading(false);
        console.log(values);
      }, 3000);
    });
  };
  const ClickIconInput = () => {
    setIconStatePassword(!iconStatePassword);
  };
  useEffect(() => {
    const arrErrors = Object.values(errors);
    if (arrErrors.length > 0) {
      toast.error(arrErrors[0]?.message, {
        pauseOnHover: false,
      });
    }
  }, [errors]);
  return (
    <SignUpPageStyles>
      <div className="container">
        <img srcSet="./logo.png 2x" alt="logo-blog" className="logo" />
        <h1 className="heading">Monkey Blogging</h1>
        <form
          className="form"
          autoComplete="off"
          onSubmit={handleSubmit(handleSignUp)}
        >
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
          <Button type="submit" isLoading={isLoading}>
            {isLoading === false ? <span>Sign Up</span> : <Loading />}
          </Button>
        </form>
      </div>
    </SignUpPageStyles>
  );
};

export default SignUpPage;
