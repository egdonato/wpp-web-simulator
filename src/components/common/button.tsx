import { ButtonTheme } from "../../models/common";
import { Button as ButtonStyled } from "../sign-in/sign-in-styles";

export function Button(props: { text: string; theme: ButtonTheme }) {
  const text = props.text;
  const theme = props.theme;

  return (
    <div>
      <ButtonStyled theme={theme}>{text}</ButtonStyled>
    </div>
  );
}
