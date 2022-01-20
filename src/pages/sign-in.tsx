import {
  Container,
  SubContainer,
  Title,
  Button,
  Description,
  FormWrap,
  WelcomeWrap,
  ForgotPassword,
  Input,
} from "../styles/sign-in-styles";
import { buttonGreenTheme, buttonTransparentTheme } from "../styles/themes";
import { MdPhoneIphone, MdLock } from "react-icons/md";

export function SignIn() {
  const color = "#6e6e6b";
  const size = "20px";
  return (
    <Container>
      <SubContainer>
        <FormWrap>
          <div>
            <Title color="#2a948a">Sign in to WPP Web Simulator</Title>
          </div>
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
              <Input
                type="text"
                name="phoneNumber"
                placeholder="Phone Number"
              />
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
            <ForgotPassword href="">Forgot your password?</ForgotPassword>
          </div>
          <div>
            <Button theme={buttonGreenTheme}>SIGN IN</Button>
          </div>
        </FormWrap>
        <WelcomeWrap>
          <div>
            <Title color="#FFFFFF">New Here?</Title>
          </div>
          <div>
            <Description>
              Join us with your personal data and start connecting with everyone
            </Description>
          </div>
          <div>
            <Button theme={buttonTransparentTheme}>SIGN UP</Button>
          </div>
        </WelcomeWrap>
      </SubContainer>
    </Container>
  );
}
