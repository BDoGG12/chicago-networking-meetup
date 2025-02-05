import { useState } from "react";
import { Col, Row } from "react-bootstrap";
import EventItem from "@/components/events/event-item";
import classes from "@/components/events/event-list.module.css";

const EventList = ({ events }) => {
  return (
    <Row className={classes.eventList} xs={1} md={2}>
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
