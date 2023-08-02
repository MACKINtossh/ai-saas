import LandingHero from "@/components/LandingHero";
import LandingNavbar from "@/components/LandingNavbar";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

type Props = {};

const LandingPage = () => {
  return (
    <div className="h-full">
    <LandingNavbar />
    <LandingHero />
    </div>
  );
};

export default LandingPage;
