import { Description as DescriptionStyled } from "../sign-in/sign-in-styles";

export function Description(props: { text: string; className?: string }) {
  const text = props.text;
  const className = props.className;

  return (
    <div>
      <DescriptionStyled className={className}>{text}</DescriptionStyled>
    </div>
  );
}
