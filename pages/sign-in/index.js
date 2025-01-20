import SignIn from "@/components/sign-in/sign-in";
import Head from "next/head";

const SignInPage = () => {
  return (
    <div>
      <Head>
        <title>Chicago Networking Meetup - Sign Up</title>
      </Head>
      <SignIn />
    </div>
  );
};

export default SignInPage;
