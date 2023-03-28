import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { SignIn } from "@clerk/nextjs";
import { SignInButton } from "@clerk/nextjs";
import { api } from "~/utils/api";

const Home: NextPage = () => {
  const hello = api.example.hello.useQuery({ text: "from tRPC" });

  return (
    <>
      <SignIn path="/sign-in" routing="path" signUpUrl="/sign-up" />
      <div>
        <h1> Sign in </h1>
        <SignInButton />
      </div>
    </>
  );
};

export default Home;
