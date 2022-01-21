import styled from "styled-components";

export const Container = styled.div`
  background-color: #dadbd4;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SubContainer = styled.div`
  background-color: #ffffff;
  width: 85em;
  height: 40em;
  display: flex;
  justify-content: center;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
`;

export const Title = styled.span`
  font-size: 2.5em;
  font-weight: bold;
  color: ${(props) => (props.color ? props.color : "#222831")};
`;

export const Button = styled.button`
  background: ${(props) => props.theme.background};
  color: ${(props) => props.theme.color};
  border: ${(props) => props.theme.border};
  padding: ${(props) => props.theme.padding};
  width: ${(props) => props.theme.width};
  border-radius: ${(props) => props.theme.borderRadius};
  font-size: 1em;

  &:hover {
    cursor: pointer;
    background-color: ${(props) => props.theme.hoverBackground};
    color: ${(props) => props.theme.hoverColor};
  }
`;

export const Description = styled.span`
  display: block;
  font-size: 1em;
  width: 70%;
  text-align: center;
  margin: auto;
`;

export const FormWrap = styled.div`
  width: 70%;
  display: flex;
  flex-wrap: wrap;
  text-align: center;
  row-gap: 40px;
  align-content: center;

  & div {
    width: 100%;
  }
`;

export const WelcomeWrap = styled.div`
  width: 30%;
  color: white;
  background-color: #2a948a;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-content: center;
  row-gap: 40px;
  border-radius: 0 10px 10px 0;
`;

export const ForgotPassword = styled.a`
  color: #222831;
  text-decoration: none;
  border-bottom: 1px solid #222831;
  padding-bottom: 3px;
  font-size: 1.3em;

  :visited {
    color: #2a948a;
    border-color: #2a948a;
  }
`;

export const Input = styled.input`
  width: 25%;
  padding: 15px;
  padding-left: 50px;
  margin: 5px 0;
  border: none;
  background-color: #f5f5f5;
  border-radius: 5px;
  color: #6e6e6b;
`;
