import { combineStyles } from "@utils/styles";
import type { ProjectData } from "@utils/projectData";

function ProjectCard({ project }: { project: ProjectData }) {
  return (
    <div
      className={combineStyles(
        "w-[200px] h-[125px] tall:h-[150px] xs:w-[400px] xs:max-md:h-[200px] md:h-[225px]",
        project.styles.container
      )}
    >
      <a href={project.href} className={project.styles.link}>
        {project.title}
      </a>
    </div>
  );
}

export default ProjectCard;
