import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import Link from "next/link";

const EventModal = ({ show, closeHandle, showHandle, title, description, link }) => {

  return (
    <Modal show={show} onHide={closeHandle} backdrop="static" keyboard={false}>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{description}</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={closeHandle}>
          Close
        </Button>
        <Link href={link} target="_blank">
          <Button variant="primary">Get Tickets</Button>
        </Link>
      </Modal.Footer>
    </Modal>
  );
};

export default EventModal;
