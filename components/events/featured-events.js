import EventList from "@/components/events/event-list";
import classes from "@/components/events/featured-events.module.css";

const FeaturedEvents = ({events}) => {

    return (
      <section className="py-12 px-6">
      <h2 className="text-3xl font-bold text-center mb-8">Upcoming Events</h2>
      {events[0] !== "No events" && (
        <div>
           <EventList events={events} />
        </div>         
        )}
        {events[0] == "No events" && (
        <div className={classes.noEvents}>
           <h3>No current events today! More coming soon!</h3>
        </div>         
        )}
    </section>
    )
};

export default FeaturedEvents;