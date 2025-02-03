import { Card, Button } from "react-bootstrap";
import { useRouter } from "next/router";
import Link from "next/link";
import classes from "@/components/events/event-item.module.css";

const EventItem = ({ title, imgSrc, description, link }) => {
  const router = useRouter();

  return (
    <Card className={classes.cardItem}>
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
