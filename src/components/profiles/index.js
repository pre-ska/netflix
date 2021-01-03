import { Link as ReactRouterLink } from "react-router-dom";
import { Name, Container, Title, Picture, Item, List } from "./styles/profiles";

const Profiles = ({ children, ...restProps }) => {
  return <Container {...restProps}>{children}</Container>;
};

export default Profiles;

Profiles.Title = ({ children, ...restProps }) => {
  return <Title {...restProps}>{children}</Title>;
};

Profiles.List = ({ children, ...restProps }) => {
  return <List {...restProps}>{children}</List>;
};

Profiles.User = ({ children, ...restProps }) => {
  return <Item {...restProps}>{children}</Item>;
};

Profiles.Picture = ({ src, ...restProps }) => {
  return (
    <Picture
      {...restProps}
      src={
        src ? `/images/users//${src}.png` : `images/misc/loading.gif`
      }></Picture>
  );
};

Profiles.Name = ({ children, ...restProps }) => {
  return <Name {...restProps}>{children}</Name>;
};
