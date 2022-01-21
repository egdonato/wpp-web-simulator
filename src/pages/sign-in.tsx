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

export function SignIn() {
  return (
    <Container>
      <SubContainer>
        <FormWrap>
          <Form
            title="Sign in to WPP Web Simulator"
            buttonText="SIGN IN"
            buttonTheme={buttonGreenTheme}
          />
        </FormWrap>
        <WelcomeWrap>
          <Welcome
            title="New Here?"
            buttonText="SIGN UP"
            buttonTheme={buttonTransparentTheme}
            description="Join us with your personal data and start connecting with everyone"
          />
        </WelcomeWrap>
      </SubContainer>
    </Container>
  );
}
