import {
  Container,
  SubContainer,
  FormWrap,
  WelcomeWrap,
} from "../components/sign-in/sign-in-styles";
import {
  buttonGreenTheme,
  buttonTransparentTheme,
} from "../components/styles/themes";
import { Form } from "../components/sign-in/form-component";
import { Welcome } from "../components/sign-in/welcome-component";
import { RegisterDataModel } from "../models/sign-in-model";
import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { ButtonTheme } from "../models/common";

export function SignIn() {
  // ----- Initial data with sign in as default
  const signInFormData: RegisterDataModel = buildRegisterData(
    "Sign in to WPP Web Simulator",
    "SIGN IN",
    buttonGreenTheme,
    undefined,
    formHandleOnClick,
    true
  );

  const signInWelcomeData: RegisterDataModel = buildRegisterData(
    "New Here?",
    "SIGN UP",
    buttonTransparentTheme,
    "Join us with your personal data and start connecting with everyone",
    welcomeHandleOnClick,
    true
  );

  const signUpWelcomeData: RegisterDataModel = buildRegisterData(
    "Welcome!",
    "SIGN IN",
    buttonTransparentTheme,
    "Sign in with your personal data and chat with everyone",
    welcomeHandleOnClick,
    false
  );

  const signUpFormData: RegisterDataModel = buildRegisterData(
    "Sign up to WPP Web Simulator",
    "SIGN UP",
    buttonGreenTheme,
    undefined,
    formHandleOnClick,
    false
  );

  const [FormData, setFormData] = useState<RegisterDataModel>(signInFormData);
  const [WelcomeData, setWelcomeData] =
    useState<RegisterDataModel>(signInWelcomeData);
  const prevWelcomeDataRef = useRef<RegisterDataModel>(signInWelcomeData);
  const prevFormDataRef = useRef<RegisterDataModel>(signInFormData);

  useEffect(() => {
    if (WelcomeData.isSignIn) {
      prevWelcomeDataRef.current = signUpWelcomeData;
      //Esta invertido porque son lo contrario, cuando Welcome es sign In el form es para Sing Up
      prevFormDataRef.current = signUpFormData;
    } else {
      prevWelcomeDataRef.current = signInWelcomeData;
      prevFormDataRef.current = signInFormData;
    }
  });

  function formHandleOnClick() {
    if (!prevFormDataRef.current.isSignIn) {
      alert("SIGN IN");
    } else {
      alert("SIGN UP");
    }
  }

  function welcomeHandleOnClick() {
    setWelcomeData(prevWelcomeDataRef.current);
    setFormData(prevFormDataRef.current);
  }

  function buildRegisterData(
    title: string,
    buttonText: string,
    buttonTheme: ButtonTheme,
    description: string | undefined,
    handleOnClick: () => void,
    isSignIn: boolean
  ): RegisterDataModel {
    return {
      title: title,
      buttonText: buttonText,
      buttonTheme: buttonTheme,
      description: description,
      handleOnClick: handleOnClick,
      isSignIn: isSignIn,
    };
  }

  return (
    <Container>
      <SubContainer>
        <FormWrap>
          <Form
            title={FormData.title}
            buttonText={FormData.buttonText}
            buttonTheme={FormData.buttonTheme}
            isSigIn={FormData.isSignIn}
            handleOnClick={FormData.handleOnClick}
          />
        </FormWrap>
        <WelcomeWrap>
          <Welcome
            title={WelcomeData.title}
            buttonText={WelcomeData.buttonText}
            buttonTheme={WelcomeData.buttonTheme}
            description={WelcomeData.description ? WelcomeData.description : ""}
            handleOnClick={WelcomeData.handleOnClick}
          />
        </WelcomeWrap>
      </SubContainer>
    </Container>
  );
}
