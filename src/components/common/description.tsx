import { Description as DescriptionStyled } from "../sign-in/sign-in-styles";

export function Description(props: { text: string }) {
  const text = props.text;
  return (
    <div>
      <DescriptionStyled>{text}</DescriptionStyled>
    </div>
  );
}
