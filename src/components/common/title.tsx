import { Title as TitleStyled } from "../sign-in/sign-in-styles";

export function Title(props: { text: string; color: string }) {
  const text = props.text;
  const color = props.color;
  return (
    <div>
      <TitleStyled color={color}>{text}</TitleStyled>
    </div>
  );
}
