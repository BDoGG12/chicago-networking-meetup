import { Button, Form } from "react-bootstrap";
import { useState } from "react";
import { auth } from "@/services/firebase.config";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/router";
import { isEmail, validatePassword } from "@/hooks/validationHooks";

const SignUp = () => {
  const [validated, setValidated] = useState(false);
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleSubmit = async (e) => {
    const form = e.currentTarget;
    
    createUserWithEmailAndPassword(auth, userName, password)
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
      <h2>Sign Up</h2>
      <br />
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            required
            value={userName}
            type="email"
            placeholder="Enter email"
            onChange={setUserName}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            required
            value={password}
            type="password"
            placeholder="Password"
            onChange={setPassword}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control required type="password" placeholder="Password" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default SignUp;
