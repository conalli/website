import { combineStyles } from "@utils/styles";
import type { ProjectInfo } from "@utils/data";

function ProjectCard({ project }: { project: ProjectInfo }) {
  return (
    <div
      className={combineStyles(
        "w-[200px] h-[125px] xs:w-[400px] xs:h-[200px]",
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
