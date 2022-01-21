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
}) {
  //Props
  const title = props.title;
  const buttonText = props.buttonText;
  const buttonTheme = props.buttonTheme;
  const description = props.description;

  return (
    <Fragment>
      <Title text={title} color="#FFFFFF"></Title>
      <Description text={description}></Description>
      <Button theme={buttonTheme} text={buttonText} />
    </Fragment>
  );
}
