import { Button, Form } from "react-bootstrap";
import { useState, useContext } from "react";
import { auth } from "@/services/firebase.config";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/router";
import { isEmail, validatePassword } from "@/hooks/validationHooks";
import { UserContext } from "@/context/userContext";

const SignIn = () => {
  const [validated, setValidated] = useState(false);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const { setIsLoggedIn } = useContext(UserContext);

  const handleUserName = (e) => {
    e.preventDefault();
    setUserName(e.target.value);
  };

  const handlePassword = (e) => {
    e.preventDefault();
    setPassword(e.target.value);
  };

  const handleForgotPassword = () => {
    router.push("/forgot-password"); // Navigate to forgot password page
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;

    signInWithEmailAndPassword(auth, userName, password)
      .then((userObject) => {
        const { user } = userObject;
        const isEmailValid = isEmail(userName);
        const isPasswordValid = validatePassword(password);
        if (user && isEmailValid && isPasswordValid) {
          setIsLoggedIn(true);
          router.push("/");
        }
      })
      .catch((error) => {
        console.log(error.message);
      });

    setValidated(true);
  };

  return (
    <div>
      <h2>Sign In</h2>
      <br />
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            required
            value={userName}
            onChange={handleUserName}
            type="email"
            placeholder="Enter email"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            required
            value={password}
            onChange={handlePassword}
            type="password"
            placeholder="Password"
          />
        </Form.Group>

        <Button variant="link" onClick={handleForgotPassword}>
          Forgot Password?
        </Button>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default SignIn;
