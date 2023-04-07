import type { ProjectData } from "@utils/projectData";
import { combineStyles } from "@utils/styles";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

function ProjectCard({
  project,
  index,
  lastSelected,
  selectProject,
  listRef,
}: {
  project: ProjectData;
  index: number;
  lastSelected: boolean;
  selectProject: (project: ProjectData) => void;
  listRef: React.RefObject<HTMLDivElement>;
}) {
  const [showDescription, setShowDescription] = useState(false);
  const z = lastSelected ? "z-20" : "";
  return (
    <motion.div
      initial={{ scale: 0, x: -100 }}
      animate={{ scale: 1, x: 0, transition: { delay: (index + 1) * 0.1 } }}
      className={combineStyles(
        z,
        "w-[200px] h-[125px] tall:h-[150px] xs:w-[400px] xs:max-md:h-[200px] md:h-[200px] flex justify-center items-center rounded shadow-lg hover:cursor-pointer",
        project.styles.container
      )}
      onClick={() => {
        selectProject(project);
        setShowDescription((prev) => !prev);
      }}
      drag
      dragConstraints={listRef}
      onDragStart={() => selectProject(project)}
      onDragEnd={() => setShowDescription(showDescription)}
      dragSnapToOrigin
    >
      <AnimatePresence>
        {showDescription && lastSelected ? (
          <CardDescription project={project} />
        ) : (
          <CardLogo project={project} />
        )}
      </AnimatePresence>
    </motion.div>
  );
}

function CardLogo({ project }: { project: ProjectData }) {
  const titleStyles = project.styles.title ?? "";
  return (
    <motion.div
      className="p-4 w-full m-auto flex justify-center"
      initial={{ x: 10, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -10, opacity: 0 }}
    >
      {project.logoSrc ? (
        <img
          key="card-logo"
          draggable={false}
          src={project.logoSrc}
          alt={project.title}
        />
      ) : (
        <h3
          key="card-logo-text"
          className={combineStyles("text-4xl", titleStyles)}
        >
          {project.title}
        </h3>
      )}
    </motion.div>
  );
}

function CardDescription({ project }: { project: ProjectData }) {
  return (
    <motion.div
      className="p-2 w-4/5 flex flex-col items-center"
      key="card-logo-description"
      initial={{ x: -10, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: 10, opacity: 0 }}
    >
      <h3 className="md:text-xl font-bold">{project.title}</h3>
      <p className="text-xs md:text-lg">{project.description}</p>
      <a
        href={project.href}
        className={
          "under underline md:no-underline text-xs md:text-lg font-bold after:bg-white md:pt-4"
        }
      >
        click for details
      </a>
    </motion.div>
  );
}

export default ProjectCard;
