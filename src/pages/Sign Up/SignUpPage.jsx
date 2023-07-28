import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Label } from "../../Components/label";
import Input from "../../Components/input";
import { useForm } from "react-hook-form";
import Field from "../../Components/field";
import Button from "../../Components/button";
import Loading from "../../Components/loading";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db } from "../../firebase/firebase-config";
import { Link, useNavigate } from "react-router-dom";
import { addDoc, collection } from "firebase/firestore";
import AuthenticationPage from "../AuthenticationPage/AuthenticationPage";
import InputPasswordToggle from "../../Components/input/InputPasswordToggle";
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
  const handleSignUp = async (values) => {
    setIsLoading(true);
    if (!isValid) return;
    const user = await createUserWithEmailAndPassword(
      auth,
      values.email,
      values.password
    );
    await updateProfile(auth.currentUser, {
      displayName: values.fullname,
    });
    const colRef = collection(db, "users");
    addDoc(colRef, {
      fullname: values.fullname,
      email: values.email,
      password: values.password,
    });
    setIsLoading(false);
    reset();
    toast.success("Create User successfully!!");
    navigate("/sign-in");
  };
  const ClickIconInput = () => {
    setIconStatePassword(!iconStatePassword);
  };
  useEffect(() => {
    document.title = "Register Page";
    const arrErrors = Object.values(errors);
    if (arrErrors.length > 0) {
      toast.error(arrErrors[0]?.message, {
        pauseOnHover: false,
      });
    }
  }, [errors]);
  return (
    <AuthenticationPage>
      <SignUpPageStyles>
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
            <InputPasswordToggle
              ClickIconInput={ClickIconInput}
              control={control}
              iconStatePassword={iconStatePassword}
            />
          </Field>
          <span style={{ display: "inline-block", marginBottom: "20px" }}>
            Do you have an account?{" "}
            <Link style={{ color: "#2EBAC1" }} to="/sign-in">
              Sign In
            </Link>
          </span>
          <Button kind="primary" type="submit" isLoading={isLoading}>
            {isLoading === false ? <span>Sign Up</span> : <Loading />}
          </Button>
        </form>
      </SignUpPageStyles>
    </AuthenticationPage>
  );
};

export default SignUpPage;
