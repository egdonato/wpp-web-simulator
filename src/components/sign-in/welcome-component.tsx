import { Fragment } from "react";
import { ButtonTheme } from "../../models/common";
import { Button } from "../common/button";
import { Description } from "../common/description";
import { Title } from "../common/title";

export function Welcome(props: {
  title: string;
  buttonText: string;
  buttonTheme: ButtonTheme;
  description: string;
  handleOnClick: () => void;
  textClassName?: string;
}) {
  //Props
  const title = props.title;
  const buttonText = props.buttonText;
  const buttonTheme = props.buttonTheme;
  const description = props.description;
  const handleOnClick = props.handleOnClick;
  const textClassName = props.textClassName;

  return (
    <Fragment>
      <Title className={textClassName} text={title} color="#FFFFFF"></Title>
      <Description className={textClassName} text={description}></Description>
      <Button
        handleOnClick={handleOnClick}
        theme={buttonTheme}
        text={buttonText}
      />
    </Fragment>
  );
}
