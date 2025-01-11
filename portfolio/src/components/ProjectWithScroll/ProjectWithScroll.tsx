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
      ref={ref}
      animate={controls}
      variants={{
        hidden: { opacity: 0, rotateX: 0, rotateY: 0 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.8, ease: "easeOut" },
        },
      }}
    >
      <div>
        <ProjectItem project={project} />
      </div>
    </motion.div>
  );
}
