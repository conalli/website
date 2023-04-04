import { ProjectData, projects } from "@utils/projectData";
import ProjectCard from "./ProjectCard";
import { useRef, useState } from "react";
import { combineStyles } from "@utils/styles";

function ProjectList() {
  const [selected, setSelected] = useState<ProjectData>(projects[3]);
  const listRef = useRef<HTMLDivElement>(null);
  const selectProject = (project: ProjectData) => {
    setSelected(project);
  };
  return (
    <div
      ref={listRef}
      className={combineStyles(
        "tall:pt-4 grid grid-cols-mobileProjects short:grid-rows-mobileProjects tall:grid-rows-tallMobile xs:grid-cols-projects xs:grid-rows-projects"
      )}
    >
      {projects.map((p, idx) => (
        <ProjectCard
          key={p.href}
          listRef={listRef}
          lastSelected={selected.title === p.title}
          selectProject={selectProject}
          project={p}
          index={idx}
        />
      ))}
    </div>
  );
}

export default ProjectList;
