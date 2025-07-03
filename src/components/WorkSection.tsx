import WorkCard from "./ui/work-card";

const workData = [
  {
    imageUrl: "iti.jpg",
    companyName: "Information Technology Institute",
    date: "Nov 2024 - June 2025",
    jobTitle: "Full Stack MEARN Developer Intern",
    description:
      "Completed an intensive MEARN stack program culminating in a capstone group project that is an AI-powered recruitment system designed to streamline the hiring process. The system features company profile management, job posting creation, CV parsing, AI-conducted interviews with automated feedback, applicant ranking, and integrated communication tools.",
  },
  {
    imageUrl: "nordra.jpg",
    companyName: "Nordra",
    date: "Feb 2024 - June 2024",
    jobTitle: "Frontend Engineer Intern",
    description:
      "Worked on Arkvell’s platform, enhancing UI consistency with React and Carbon Templating, improving performance with TanStack Query, and ensuring code reliability through Cypress and Jest testing. Collaborated with backend teams and adhered to scalable design patterns.",
  },
];

export default function WorkSection() {
  return (
    <section>
      <h2 className="font-bold text-xl mb-3">Work Experience</h2>
      <div className="flex gap-4 flex-col">
        {workData.map((item, index) => (
          <WorkCard key={index} {...item} />
        ))}
      </div>
    </section>
  );
}
