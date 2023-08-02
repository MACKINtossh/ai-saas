"use client";

import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

const testimonials = [
  {
    name: "Jordan",
    avatar: "J",
    title: "Software Engineer",
    description: "This application is the best!",
  },
  {
    name: "Marcus",
    avatar: "M",
    title: "Software Engineer",
    description: "The free tier is a little slow but the Pro plan is great!",
  },
  {
    name: "Christian",
    avatar: "C",
    title: "Software Engineer",
    description: "WOW! I love it!",
  },
  {
    name: "Christian",
    avatar: "C",
    title: "Software Engineer",
    description: "WOW! I love it!",
  },
];

type Props = {};

const LandingContent = (props: Props) => {
  return (
    <div className="px-10 pb-20">
      <h2 className="text-center text-4xl text-white font-extrabold mb-10">
        Testimonials
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {testimonials.map((item) => (
          <Card
            key={item.description}
            className="bg-[#192339] border-none text-white"
          >
            <CardHeader>
              <CardTitle className="flex items-center gap-x-2">
                <div>
                  <p className="text-lg">{item.name}</p>
                  <p className="text-zinc-400 text-sm">{item.title}</p>
                </div>
              </CardTitle>
              <CardContent className="pt-4 px-0">
                {item.description}
              </CardContent>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default LandingContent;
