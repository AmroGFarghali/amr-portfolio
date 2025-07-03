import WorkCard from "./ui/work-card";

const eduData = [
  {
    imageUrl: "GUC.jpg",
    companyName: "German University in Cairo",
    date: "2017-2022",
    jobTitle: "B.ASc in Computer Science",
  },
];

export default function EducationSection() {
  return (
    <section>
      <h2 className="font-bold text-xl mb-3">Education</h2>
      <div className="flex gap-4 flex-col">
        {eduData.map((item, index) => (
          <WorkCard key={index} {...item} />
        ))}
      </div>
    </section>
  );
}
