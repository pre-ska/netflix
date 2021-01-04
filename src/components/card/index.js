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

const Feature_ = ({ children, category, ...restProps }) => {
  const { showFeature, itemFeature, setShowFeature } = useContext(
    FeatureContext
  );

  return showFeature ? (
    <Feature
      {...restProps}
      src={`/images/${category}/${itemFeature.genre}/${itemFeature.slug}/large.jpg`}>
      <Content>
        <FeatureTitle>{itemFeature.title}</FeatureTitle>
        <FeatureText>{itemFeature.description}</FeatureText>
        <FeatureClose onClick={() => setShowFeature(false)}>
          <img src="/images/icons/close.png" alt="Close" />
        </FeatureClose>

        <Group margin="30px 0" flexDirection="row" alignItems="center">
          <Maturity rating={itemFeature.maturity}>
            {itemFeature.maturity < 12 ? "PG" : itemFeature.maturity}
          </Maturity>
          <FeatureText fontWeight="bold">
            {itemFeature.genre.charAt(0).toUpperCase() +
              itemFeature.genre.slice(1)}
          </FeatureText>
        </Group>
        {children}
      </Content>
    </Feature>
  ) : null;
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
Card.Feature = Feature_;
