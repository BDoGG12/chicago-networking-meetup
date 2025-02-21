import { Card, Button } from "react-bootstrap";
import { useRouter } from "next/router";
import { useState } from "react";
import classes from "@/components/events/event-item.module.css";
import EventModal from "@/components/modals/event-modal";
import { addFavoriteEvent } from "@/services/firestore-service";
import HeartButton from "@/components/icons/heart-button";

const EventItem = ({ title, imgSrc, description, link }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [isFavorite, setIsFavorite] = useState(false);

  const handleFavorites = () => {
    setIsFavorite(!isFavorite);
    addFavoriteEvent(title, description, link, imgSrc)
      .then(() => {
        console.log("Favorite Events a Success");
      })
      .catch((e) => {
        console.error("Error favoriting event", e);
      });
  };

  return (
    <div>
      <Card className={classes.cardItem}>
        <Card.Img variant="top" src={imgSrc} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <div className="d-flex justify-content-between align-items-center">
            <Button variant="primary" onClick={handleShow}>
              View Event Detail
            </Button>
            <HeartButton onClick={handleFavorites} isFavorite={isFavorite} />
          </div>
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
