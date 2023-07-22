import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

type Props = {};

const LandingPage = () => {
  return (
    <div>
      <p>Landing Page</p>
      <div>
        <Link href="/sign-in">
          <Button>Login</Button>
        </Link>
        <Link href="/sign-up">
          <Button>Register</Button>
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
