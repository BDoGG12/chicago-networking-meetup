import { Card, Button } from "react-bootstrap";
import { useRouter } from "next/router";
import { useState } from "react";
import classes from "@/components/events/event-item.module.css";
import EventModal from "@/components/modals/event-modal";

const EventItem = ({ title, imgSrc, description, link }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <Card className={classes.cardItem}>
        <Card.Img variant="top" src={imgSrc} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <Button variant="primary" onClick={handleShow}>View Event Detail</Button>
        </Card.Body>
      </Card>

      {show && (
        <>
          <EventModal
            show={show}
            closeHandle={handleClose}
            showHandle={handleShow}
            title={title}
            description={description}
            link={link}
          />
        </>
      )}
    </div>
  );
};

export default EventItem;
