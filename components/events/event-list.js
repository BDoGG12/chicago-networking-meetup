import { useState } from "react";
import { Col, Row } from "react-bootstrap";
import EventItem from "@/components/events/event-item";

const EventList = ({ events }) => {
  return (
    <Row xs={1} md={2} className="g-4">
      {Array.from({ length: events.length }).map((_, idx) => (
        <Col key={idx}>
          <EventItem
            title={events[idx].title}
            description={events[idx].description}
            imgSrc={events[idx].image}
            link={events[idx].link}
          />
        </Col>
      ))}
    </Row>
  );
};

export default EventList;
