import React from "react";
import { Link as ReactRouterLink } from "react-router-dom";
import { Background, Container, Logo, ButtonLink } from "./styles/header";

const Header = ({ bg = true, children, ...restProps }) => {
  return bg ? <Background {...restProps}>{children}</Background> : { children };
};

export default Header;

Header.Frame = ({ children, ...restProps }) => {
  return <Container {...restProps}>{children}</Container>;
};

Header.Logo = ({ to, ...restProps }) => {
  return (
    <ReactRouterLink to={to}>
      <Logo {...restProps} />
    </ReactRouterLink>
  );
};

Header.ButtonLink = ({ children, ...restProps }) => {
  return <ButtonLink {...restProps}>{children}</ButtonLink>;
};
