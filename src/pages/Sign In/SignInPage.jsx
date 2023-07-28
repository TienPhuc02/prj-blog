import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Field from "../../Components/field";
import { Label } from "../../Components/label";
import Input from "../../Components/input";
import { useForm } from "react-hook-form";

import Button from "../../Components/button";
import Loading from "../../Components/loading";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/firebase-config";
import { useAuth } from "../../Contexts/auth-context";
import AuthenticationPage from "../AuthenticationPage/AuthenticationPage";
import InputPasswordToggle from "../../Components/input/InputPasswordToggle";
const SignInStyles = styled.div`
  .form {
    max-width: 600px;
    margin: 0 auto;
  }
  form {
    margin-bottom: 50px;
  }
`;
const schema = yup.object({
  email: yup.string().email().required("Please enter valid email address"),
  password: yup
    .string()
    .min(8, "Your password mast be at least 8 character or greater")
    .required("Please enter valid email address"),
});
const SignInPage = () => {
  const [iconStatePassword, setIconStatePassword] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const { userInfo } = useAuth();
  const navigate = useNavigate();
  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
    // watch,
    reset,
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });
  useEffect(() => {
    document.title = "Login Page";
    if (userInfo.email) navigate("/");
    else navigate("/sign-in");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const ClickIconInput = () => {
    setIconStatePassword(!iconStatePassword);
  };
  const handleSignIn = async (values) => {
    console.log(values);
    if (!isValid) return;
    setIsLoading(true);
    await signInWithEmailAndPassword(auth, values.email, values.password);
    setIsLoading(false);
    reset();
    toast.success("Sign In successfully!!");
    navigate("/");
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
    <AuthenticationPage>
      <SignInStyles>
        <form
          className="form"
          autoComplete="off"
          onSubmit={handleSubmit(handleSignIn)}
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
            <InputPasswordToggle
              ClickIconInput={ClickIconInput}
              control={control}
              iconStatePassword={iconStatePassword}
            />
          </Field>
          <span style={{ display: "inline-block", marginBottom: "20px" }}>
            Do not have you an account?
            <Link style={{ color: "#2EBAC1" }} to="/sign-up">
              Sign Up
            </Link>
          </span>
          <Button kind="primary" type="submit" isLoading={isLoading}>
            {isLoading === false ? <span>Sign In</span> : <Loading />}
          </Button>
        </form>
      </SignInStyles>
    </AuthenticationPage>
  );
};

export default SignInPage;
