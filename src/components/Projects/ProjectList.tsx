import { projects } from "@utils/data";
import ProjectCard from "./ProjectCard";
import { useState } from "react";
import "./ProjectList.scss";

function Projects() {
  const [open, setOpen] = useState<boolean>();
  return (
    <div className="grid grid-cols-mobileProjects grid-rows-mobileProjects xs:grid-cols-projects xs:grid-rows-projects">
      {projects.map((p) => (
        <ProjectCard key={p.href} project={p} />
      ))}
    </div>
  );
}

export default Projects;
