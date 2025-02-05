import Head from "next/head";
import axios from "axios";
import 'dotenv/config';
import EventList from "@/components/events/event-list";

const EventsPage = ({events}) => {

    return (
        <div>
            <Head>
                <title>Chicago Networking Meetup - Events</title>
            </Head>
            <h1>Events Page</h1>
            <br />
            <EventList events={events} />
        </div>
    );
};

export default EventsPage;

export async function getServerSideProps() {
    // fetch data from events api
    try {
        const response = await axios.get("https://serpapi.com/search", {
            params: {
              engine: "google_events",
              q: 'Networking events in Chicago',
              api_key: process.env.SERP_API_KEY,
            },
          });
          const {data} = response;
          const {events_results} = data;

          return {
            props: {
                events: events_results || ['No events']
            }
          }
    } catch (error) {
        return {
            props: {
                events: ['error']
            }
        }
    }
}