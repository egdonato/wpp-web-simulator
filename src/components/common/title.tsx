import { Title as TitleStyled } from "../sign-in/sign-in-styles";

export function Title(props: {
  text: string;
  color: string;
  className?: string;
}) {
  const text = props.text;
  const color = props.color;
  const className = props.className;
  return (
    <div>
      <TitleStyled className={className} color={color}>
        {text}
      </TitleStyled>
    </div>
  );
}
