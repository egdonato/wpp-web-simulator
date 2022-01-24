import { ButtonTheme } from "./common";

export type RegisterDataModel = {
  title: string;
  buttonText: string;
  buttonTheme: ButtonTheme;
  description?: string;
  handleOnClick: () => void;
  isSignIn: boolean;
};
