import { Avatar, AvatarFallback, AvatarImage } from "./avatar";

interface WorkProps {
  imageUrl: string;
  companyName: string;
  date: string;
  jobTitle: string;
  description: string;
}
export default function WorkCard({
  imageUrl,
  companyName,
  date,
  jobTitle,
  description,
}: WorkProps) {
  return (
    <div className="flex justify-between items-center">
      <div className="flex gap-6 items-center">
        <Avatar className="border size-12 m-auto bg-muted-background dark:bg-foreground">
          <AvatarImage src={imageUrl} />
          <AvatarFallback>{companyName}</AvatarFallback>
        </Avatar>
        <div id="ResumeInfo">
          <h3 className="text-sm font-semibold">{companyName}</h3>
          <p className="text-sm">{jobTitle}</p>
        </div>
      </div>
      <p className="text-sm text-muted-foreground">{date}</p>
    </div>
  );
}
