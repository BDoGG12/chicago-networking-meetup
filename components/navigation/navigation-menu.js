import { Nav, Container, Navbar, Form, Button } from "react-bootstrap";
import classes from "./navigation-menu.module.css";

const NavigationMenu = ({ children }) => {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/">Chicago Networking Meetup</Navbar.Brand>
          <Form className={classes.form}>
            <Form.Control type="text" />
            <Button variant="primary" type="submit">
              Search
            </Button>
          </Form>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/events">Events</Nav.Link>
            <Nav.Link href="/sign-up">Sign Up</Nav.Link>
            <Nav.Link href="/sign-in">Sign In</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <div>{children}</div>
    </>
  );
};

export default NavigationMenu;
