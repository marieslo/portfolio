import { motion } from "framer-motion";
import React, { useRef } from "react";
import { useAnimation, useInView } from "framer-motion";
import ProjectItem from "../ProjectItem/ProjectItem";

export default function ProjectWithScroll({ project }: { project: any }) {
  const ref = useRef<HTMLDivElement>(null);
  const controls = useAnimation();
  const inView = useInView(ref, { once: true, margin: "0px" });

  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [inView, controls]);

  return (
<motion.div
className="min-h-screen flex items-center justify-center bg-gray-800 text-white"
initial={{ opacity: 0 }}
animate={{ opacity: 1 }}
exit={{ opacity: 0 }}
>
<div className="text-center">
        <ProjectItem project={project} />
      </div>
    </motion.div>
  );
}

