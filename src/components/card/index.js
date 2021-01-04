import React, { useState, useContext, createContext } from "react";

import {
  Container,
  Group,
  Title,
  SubTitle,
  Text,
  Feature,
  FeatureTitle,
  FeatureText,
  FeatureClose,
  Maturity,
  Content,
  Meta,
  Entities,
  Item,
  Image
} from "./styles/card";

export const FeatureContext = createContext();

const Card = ({ children, ...restProps }) => {
  const [showFeature, setShowFeature] = useState(false);
  const [itemFeature, setItemFeature] = useState({});

  return (
    <FeatureContext.Provider
      value={{ showFeature, setShowFeature, itemFeature, setItemFeature }}>
      <Container {...restProps}>{children}</Container>
    </FeatureContext.Provider>
  );
};

export default Card;

Card.Group = ({ children, ...restProps }) => {
  return <Group {...restProps}>{children}</Group>;
};

Card.Title = ({ children, ...restProps }) => {
  return <Title {...restProps}>{children}</Title>;
};

Card.SubTitle = ({ children, ...restProps }) => {
  return <SubTitle {...restProps}>{children}</SubTitle>;
};

Card.Text = ({ children, ...restProps }) => {
  return <Text {...restProps}>{children}</Text>;
};

Card.Entities = ({ children, ...restProps }) => {
  return <Entities {...restProps}>{children}</Entities>;
};

Card.Meta = ({ children, ...restProps }) => {
  return <Meta {...restProps}>{children}</Meta>;
};

const Item_ = ({ item, children, ...restProps }) => {
  const { setShowFeature, setItemFeature } = useContext(FeatureContext);

  return (
    <Item
      onClick={() => {
        setItemFeature(item);
        setShowFeature(true);
      }}
      {...restProps}>
      {children}
    </Item>
  );
};

Card.Image = ({ ...restProps }) => {
  return <Image {...restProps} />;
};

Card.Item = Item_;
