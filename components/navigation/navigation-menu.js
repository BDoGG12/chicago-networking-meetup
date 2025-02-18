import {
  Nav,
  Container,
  Navbar,
  Form,
  Button,
  NavDropdown,
} from "react-bootstrap";
import classes from "./navigation-menu.module.css";
import { UserContext } from "@/context/userContext";
import { useContext } from "react";
import { signOut } from "firebase/auth";
import { auth } from "@/services/firebase.config";
import { useRouter } from "next/router";

const NavigationMenu = ({ children }) => {
  const router = useRouter();
  const { isLoggedIn, setIsLoggedIn } = useContext(UserContext);

  const handleSignOut = async () => {
    signOut(auth)
      .then(() => {
        setIsLoggedIn(false);
        router.push("/");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/">Chicago Networking Meetup</Navbar.Brand>
          <Nav className="ms-auto align-items-center">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/events">Events</Nav.Link>
            {!isLoggedIn && (
              <>
                <Nav.Link href="/sign-up">Sign Up</Nav.Link>
                <Nav.Link href="/sign-in">Sign In</Nav.Link>
              </>
            )}
            {isLoggedIn && (
              <NavDropdown title="Your Account" id="your-account">
                <NavDropdown.Item onClick={handleSignOut}>
                  Sign Out
                </NavDropdown.Item>
              </NavDropdown>
            )}
          </Nav>
        </Container>
      </Navbar>
      <div>{children}</div>
    </>
  );
};

export default NavigationMenu;
