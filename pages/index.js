import Button from 'react-bootstrap/Button';
import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Chicago Networking Meetup</title>
      </Head>
      <h1>Welcome to Chicago Networking Meetup!</h1>
      <Button variant="primary">Click Me</Button>
    </div>
  );
}
