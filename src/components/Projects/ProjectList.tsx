import { projects } from "@utils/data";
import ProjectCard from "./ProjectCard";
import { useState } from "react";

function Projects() {
  const [open, setOpen] = useState<boolean>();
  return (
    <div className="tall:pt-4 grid grid-cols-mobileProjects short:grid-rows-mobileProjects tall:grid-rows-tallMobile xs:grid-cols-projects xs:grid-rows-projects">
      {projects.map((p) => (
        <ProjectCard key={p.href} project={p} />
      ))}
    </div>
  );
}

export default Projects;
