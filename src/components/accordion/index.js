import { useState, useContext, createContext } from "react";
import {
  Container,
  Inner,
  Title,
  Frame,
  Item,
  Header,
  Body
} from "./styles/accordion";

const ToggleContext = createContext();

export default function Accordion({ children, ...restProps }) {
  return (
    <Container {...restProps}>
      <Inner>{children}</Inner>
    </Container>
  );
}

Accordion.Title = ({ children, ...restProps }) => {
  return <Title {...restProps}>{children}</Title>;
};

const AccordionItem = ({ children, ...restProps }) => {
  const [toggleShow, setToggleShow] = useState(false);

  return (
    <ToggleContext.Provider value={{ toggleShow, setToggleShow }}>
      <Item {...restProps}>{children}</Item>
    </ToggleContext.Provider>
  );
};

const AccordionHeader = ({ children, ...restProps }) => {
  const { toggleShow, setToggleShow } = useContext(ToggleContext);
  return (
    <Header onClick={() => setToggleShow(prev => !prev)} {...restProps}>
      {children}
      {toggleShow ? (
        <img src="/images/icons/close-slim.png" alt="Close" />
      ) : (
        <img src="/images/icons/add.png" alt="Open" />
      )}
    </Header>
  );
};

const AccordionBody = ({ children, ...restProps }) => {
  const { toggleShow } = useContext(ToggleContext);

  return toggleShow ? <Body {...restProps}>{children}</Body> : null;
};

Accordion.Item = AccordionItem;
Accordion.Header = AccordionHeader;
Accordion.Body = AccordionBody;
