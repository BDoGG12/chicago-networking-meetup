import Button from "react-bootstrap/Button";
import Head from "next/head";
import Link from "next/link";
import axios from "axios";
import FeaturedEvents from "@/components/events/featured-events";

export default function Home({events}) {
  return (
    <div className="min-h-screen bg-gray-100">
      <Head>
        <title>Chicago Networking Meetup</title>
      </Head>
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-20 bg-blue-600 text-white">
        <h1 className="text-5xl font-bold">Discover Meetups Near You</h1>
        <p className="mt-4 text-lg">
          Join local events and connect with like-minded people.
        </p>
        <Link href="/events">Browse Events</Link>
      </section>

      <FeaturedEvents events={events} />

      {/* Community Section */}
      <section className="py-12 bg-gray-200 text-center">
        <h2 className="text-3xl font-bold mb-4">Join Our Community</h2>
        <p className="text-lg text-gray-600">
          Connect with professionals and enthusiasts.
        </p>
        <Link href="/sign-up">Sign Up Now</Link>
      </section>
    </div>
  );
}


export async function getServerSideProps() {
  // fetch data from events api
  try {
    const response = await axios.get("https://serpapi.com/search", {
      params: {
        engine: "google_events",
        q: "Networking events in Chicago",
        hl: "en",
        gl: "us",
        htichips: "event_type:Virtual-Event,date:today",
        api_key: process.env.SERP_API_KEY,
      },
    });
    const { data } = response;
    const { events_results } = data;

    return {
      props: {
        events: events_results || ["No events"],
      },
    };
  } catch (error) {
    return {
      props: {
        events: ["error"],
      },
    };
  }
}