import { Badge } from "./ui/badge";
import ProjectCard from "./ui/project-card";
const projectsData = [
  {
    image: "taleex.png",
    title: "TaleeX",
    description:
      "Group capstone project for an AI-powered recruitment platform. I worked on the frontend part of the project, building features like company profiles and applicant ranking and management.",

    // gitLink: "https://github.com/TaleeX-Team/TaleeX-client",
    deployLink: "https://taleex.vercel.app/landing-page",
    tags: ["React", "Tanstack-Query", "TailwindCSS", "React-Router", "Shadcn"],
  },
  {
    image: "ng-commerce.png",
    title: "Angular Commerce",
    tags: ["Angular", "TailwindCSS"],

    description:
      "Angular E-commerce Template is a modern, minimalist but functioning responsive e-commerce template built with Angular and TailwindCSS",
    gitLink: "https://github.com/AmroGFarghali/ng-commerce",
    deployLink: "https://ng-commerce-nine.vercel.app/",
  },
  {
    image: "fast-react-pizza.png",
    title: "Fast React Pizza",
    description:
      "A simple React app for ordering pizzas. Users can browse a dynamic menu, add items to a cart, and place orders without logging in. Includes priority ordering, GPS support, and order tracking via unique IDs.",

    gitLink: "https://github.com/AmroGFarghali/fast-react-pizza",
    deployLink: "https://fast-react-pizza-six-opal.vercel.app/",
    tags: ["React", "Redux", "TailwindCSS", "React-Router"],
  },
];
export default function ProjectsSection() {
  return (
    <section className="mt-28">
      <div className="flex flex-col gap-3 items-center">
        <Badge className="text-sm">My Projects</Badge>
        <h2 className="text-3xl sm:text-5xl font-bold tracking-tighter">
          Check out my latest work
        </h2>
        <p className="text-muted-foreground sm:text-xl">
          I've worked on a variety of projects, here's my more recent ones!
        </p>
      </div>

      <div id="projects" className="mt-15">
        <ul className="grid md:grid-cols-2 gap-2">
          {projectsData.map((item, index) => (
            <ProjectCard key={index} {...item} />
          ))}
        </ul>
      </div>
    </section>
  );
}
