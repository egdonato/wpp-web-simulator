import { ButtonTheme } from "../../models/common";
import { Button as ButtonStyled } from "../sign-in/sign-in-styles";

export function Button(props: {
  text: string;
  theme: ButtonTheme;
  handleOnClick?: () => void;
}) {
  const text = props.text;
  const theme = props.theme;
  const handleOnClick = props.handleOnClick;

  return (
    <div>
      <ButtonStyled onClick={handleOnClick} theme={theme}>
        {text}
      </ButtonStyled>
    </div>
  );
}
