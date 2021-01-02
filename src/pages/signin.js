import React, { useContext, useState } from "react";
import { FooterContainer } from "../containers/footer";
import { HeaderContainer } from "../containers/header";
import { Form } from "../components";
import { FirebaseContext } from "../context/firebase";
import * as ROUTES from "../constants/routes";
import { useHistory } from "react-router-dom";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const { firebase } = useContext(FirebaseContext);
  const history = useHistory();

  const isInvalid = password === "" || email === "";

  const handleSignIn = e => {
    e.preventDefault();

    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        history.push(ROUTES.BROWSE);
      })
      .catch(err => {
        console.log(err);
        setError(err.message);
      })
      .finally(() => {
        setEmail("");
        setPassword("");
      });
  };

  return (
    <>
      <HeaderContainer>
        <Form>
          <Form.Title>Sign In</Form.Title>
          {error && <Form.Error>{error}</Form.Error>}
          <Form.Base onSubmit={handleSignIn} method="POST">
            <Form.Input
              placeholder="Email Address"
              value={email}
              onChange={({ target }) => setEmail(target.value)}
            />
            <Form.Input
              type="password"
              autocomplete="off"
              placeholder="Password"
              value={password}
              onChange={({ target }) => setPassword(target.value)}
            />
            <Form.Submit disabled={isInvalid}>Sign In</Form.Submit>
          </Form.Base>
          <Form.Text>
            New to Netflix?{" "}
            <Form.Link to={ROUTES.SIGN_UP}>Sign Up Now</Form.Link>
          </Form.Text>
          <Form.TextSmall>
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot. Learn More.
          </Form.TextSmall>
        </Form>
      </HeaderContainer>
      <FooterContainer />
    </>
  );
};

export default Signin;
