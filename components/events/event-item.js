import { Card, Button } from "react-bootstrap";
import { useRouter } from "next/router";
import Link from "next/link";

const EventItem = ({ title, imgSrc, description, link }) => {
  const router = useRouter();

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={imgSrc} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Link 
        href={link}
        target="_blank"
        >
          <Button variant="primary">
            Get Tickets
          </Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default EventItem;
