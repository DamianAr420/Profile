import React from "react";
import { useTranslation } from "react-i18next";
import "../assets/style.css";
import taskhub from "../img/taskhub.png";
import mgk from "../img/mgk.png";

export default function Projects() {
  const { t } = useTranslation();

  const projects = [
    {
      title: "TaskHub",
      description: t("projects.taskHub"),
      image: taskhub,
      technologies: ["React", "Tailwind", "TypeScript", "Node.js", "MongoDb"],
      githubLink: "https://github.com/DamianAr420/TaskHub",
    },
    {
      title: "Mini Galeria Kotów",
      description: t("projects.mgk"),
      image: mgk,
      technologies: ["React", "Tailwind"],
      demoLink: "https://damianar420.github.io/mini-galeria-kotow/",
      githubLink: "https://github.com/DamianAr420/mini-galeria-kotow",
    },
    {
      title: "School Journal",
      description: t("projects.school"),
      technologies: ["React", "Node.js", "MongoDb"],
      githubLink: "https://github.com/DamianAr420/school",
    },
  ];

  return (
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 mt-4">
      {projects.map((project, index) => (
        <div
          key={index}
          className="boxShadow bg-background rounded-2xl overflow-hidden flex flex-col transition-transform hover:scale-[1.02] interactive"
        >
          {project.image && (
            <img
              src={project.image}
              alt={project.title}
              className="w-1/2 mx-auto h-48 object-cover aspect-[3/2]"
            />
          )}

          <div className="p-5 flex flex-col flex-grow space-y-4">
            <h3 className="text-xl font-semibold text-foreground">
              {project.title}
            </h3>

            <p className="text-sm text-muted-foreground leading-relaxed">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, i) => (
                <span
                  key={i}
                  className="text-xs font-medium bg-muted px-2 py-1 rounded-md"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="mt-auto pt-4 flex gap-4">
              {project.demoLink && (
                <a
                  href={project.demoLink}
                  target="_blank"
                  rel="noreferrer"
                  className="text-primary hover:underline font-semibold"
                >
                  Demo
                </a>
              )}
              <a
                href={project.githubLink}
                target="_blank"
                rel="noreferrer"
                className="text-primary hover:underline font-semibold"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
