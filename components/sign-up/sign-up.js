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
  const [confirmedPassword, setConfirmedPassword] = useState('');
  const [isPasswordConfirmed, setIsPasswordConfirmed] = useState(false);
  const router = useRouter();

  const handleUserName = (e) => {
    setUserName(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmedPassword = (e) => {
    setConfirmedPassword(e.target.value);
  };

  const confirmPassword = (enteredPassword) => {
    if (e.target.value === password) {
      setIsPasswordConfirmed(true);
    } else {
      setIsPasswordConfirmed(false);
    }
  };

  const handleSubmit = async (e) => {
    const form = e.currentTarget;
    console.log('form', form)
    e.preventDefault();
    createUserWithEmailAndPassword(auth, userName, password)
      .then((userObject) => {
        const { user } = userObject;
        confirmPassword(confirmedPassword);
        const isEmailValid = isEmail(userName);
        const isPasswordValid = validatePassword(password);
        if (user && isEmailValid && isPasswordValid && isPasswordConfirmed) {
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
            onChange={handleUserName}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            required
            value={password}
            type="password"
            placeholder="Password"
            onChange={handlePassword}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formConfirmPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control 
            required 
            value={confirmedPassword}
            type="password" 
            placeholder="Password"
            onChange={handleConfirmedPassword}
            />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default SignUp;
