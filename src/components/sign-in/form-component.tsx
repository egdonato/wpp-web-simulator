import { ForgotPassword, Input, FormStyled } from "../sign-in/sign-in-styles";
import { Fragment } from "react";
import { MdPhoneIphone, MdLock } from "react-icons/md";
import { Title } from "../common/title";
import { Button } from "../common/button";
import { ButtonTheme } from "../../models/common";

export function Form(props: {
  title: string;
  buttonText: string;
  buttonTheme: ButtonTheme;
  isSigIn: boolean;
  handleOnClick: () => void;
}) {
  //Props
  const title = props.title;
  const buttonText = props.buttonText;
  const buttonTheme = props.buttonTheme;
  const isSigIn = props.isSigIn;
  const handleOnClick = props.handleOnClick;

  const color = "#6e6e6b";
  const size = "20px";

  return (
    <Fragment>
      <FormStyled onSubmit={handleOnClick}>
        <Title text={title} color="#2a948a"></Title>
        <div>
          <div>
            <MdPhoneIphone
              color={color}
              size={size}
              style={{
                position: "absolute",
                marginTop: "1.1em",
                marginLeft: "1em",
              }}
            />
            <Input type="text" name="phoneNumber" placeholder="Phone Number" />
          </div>
          <div>
            <MdLock
              color={color}
              size={size}
              style={{
                position: "absolute",
                marginTop: "1.1em",
                marginLeft: "1em",
              }}
            />
            <Input type="password" name="password" placeholder="Password" />
          </div>
        </div>
        <div>
          {isSigIn ? (
            <ForgotPassword href="">Forgot your password?</ForgotPassword>
          ) : null}
        </div>
        <Button theme={buttonTheme} text={buttonText} />
      </FormStyled>
    </Fragment>
  );
}
