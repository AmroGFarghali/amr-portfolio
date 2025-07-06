import { Badge } from "./ui/badge";

const skills = ["React", "Typescript", "Tailwind CSS", "Angular"];
export default function Skills() {
  return (
    <section>
      <h2 className="font-bold text-xl mb-3">Skills</h2>
      <ul id="skills" className="flex flex-wrap gap-1">
        {skills.map((skill, index) => (
          <Badge key={index}>{skill}</Badge>
        ))}
      </ul>
    </section>
  );
}
