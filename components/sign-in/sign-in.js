import { Button, Form } from "react-bootstrap";
import { useState } from "react";
import { auth } from "@/services/firebase.config";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/router";
import { isEmail, validatePassword } from "@/hooks/validationHooks";

const SignIn = () => {
  const [validated, setValidated] = useState(false);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleUserName = (e) => {
    e.preventDefault();

    const userNameVal = e.target.value;
    setUserName(userNameVal)
  };

  const handlePassword = (e) => {
    e.preventDefault();
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    const form = e.currentTarget;

    signInWithEmailAndPassword(auth, userName, password)
      .then((userObject) => {
        const { user } = userObject;
        const isEmailValid = isEmail(userName);
        const isPasswordValid = validatePassword(password);
        if (user && isEmailValid && isPasswordValid) {
          router.push("/");
        }
      })
      .catch((error) => {
        console.log(error.message);
      });
    e.preventDefault();
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
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default SignIn;
