import React from "react";
import { Link as ReactRouterLink } from "react-router-dom";
import {
  Input,
  Submit,
  Base,
  Container,
  Error,
  Title,
  Text,
  TextSmall,
  Link
} from "./styles/form";

const Form = ({ children, ...restProps }) => {
  return <Container {...restProps}>{children}</Container>;
};

export default Form;

Form.Base = ({ children, ...restProps }) => {
  return <Base {...restProps}>{children}</Base>;
};

Form.Error = ({ children, ...restProps }) => {
  return <Error {...restProps}>{children}</Error>;
};

Form.Title = ({ children, ...restProps }) => {
  return <Title {...restProps}>{children}</Title>;
};

Form.Text = ({ children, ...restProps }) => {
  return <Text {...restProps}>{children}</Text>;
};

Form.TextSmall = ({ children, ...restProps }) => {
  return <TextSmall {...restProps}>{children}</TextSmall>;
};

Form.Link = ({ children, ...restProps }) => {
  return <Link {...restProps}>{children}</Link>;
};

Form.Input = ({ children, ...restProps }) => {
  return <Input {...restProps}>{children}</Input>;
};

Form.Submit = ({ children, ...restProps }) => {
  return <Submit {...restProps}>{children}</Submit>;
};
