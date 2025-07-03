import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./avatar";
import { motion } from "framer-motion";
import { ChevronRight, ChevronRightIcon } from "lucide-react";
import { cn } from "@/lib/utils";

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
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="flex mb-4" onClick={() => setIsExpanded(!isExpanded)}>
      <div className="flex gap-6 items-start justify-between w-full">
        <div>
          <Avatar className="border size-12 m-auto bg-muted-background dark:bg-foreground self-start">
            <AvatarImage src={imageUrl} />
            <AvatarFallback>{companyName}</AvatarFallback>
          </Avatar>
        </div>

        <div id="ResumeInfo" className="w-full cursor-pointer">
          <div className="flex justify-between">
            <h3 className="text-sm font-semibold">{companyName} </h3>
            <p className="text-sm text-muted-foreground">{date}</p>
          </div>

          <p className="text-xs font-sans">{jobTitle}</p>
          {description && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{
                opacity: isExpanded ? 1 : 0,
                height: isExpanded ? "auto" : 0,
              }}
              transition={{
                duration: 0.7,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="mt-2 text-xs sm:text-sm overflow-hidden"
            >
              <div className="pb-2">{description}</div>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}
