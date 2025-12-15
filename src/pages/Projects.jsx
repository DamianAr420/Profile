/* eslint-disable react/prop-types */
import React from "react";
import { useTranslation } from "react-i18next";
import {
  CodeBracketSquareIcon,
  GlobeAltIcon,
  StarIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/outline";

import SkillShareImage from "../img/SkillShare.png";
import TaskHubImage from "../img/taskhub.png";
import MiniGaleriaKotowImage from "../img/mgk.png";

const projectData = [
  {
    id: 1,
    titleKey: "project_skillshare_title",
    descriptionKey: "project_skillshare_desc",
    image: SkillShareImage,
    technologies: ["Vue", "Tailwind CSS", "Node.js", "MongoDB"],
    githubUrl: "https://github.com/DamianAr420/SkillShare",
    liveUrl: "https://damianar420.github.io/SkillShare/",
    featured: true,
  },
  {
    id: 2,
    titleKey: "project_taskhub_title",
    descriptionKey: "project_taskhub_desc",
    image: TaskHubImage,
    technologies: ["React", "Tailwind CSS", "Node.js", "MongoDB"],
    githubUrl: "https://github.com/DamianAr420/TaskHub",
    liveUrl: null,
    featured: false,
  },
  {
    id: 3,
    titleKey: "project_cats_title",
    descriptionKey: "project_cats_desc",
    image: MiniGaleriaKotowImage,
    technologies: ["React", "Tailwind CSS"],
    githubUrl: "https://github.com/DamianAr420/mini-galeria-kotow",
    liveUrl: "https://damianar420.github.io/mini-galeria-kotow/",
    featured: false,
    recruitmentTask: true,
  },
];

const Projects = () => {
  const { t } = useTranslation();

  const ProjectCard = ({ project }) => (
    <div
      className={`bg-white rounded-xl shadow-xl overflow-hidden transform hover:scale-[1.02] transition duration-300 relative ${
        project.featured ? "border-4 border-yellow-500 rounded-tr-none" : ""
      }`}
    >
      {project.featured && (
        <div className="absolute top-0 right-0 bg-yellow-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg flex items-center">
          <StarIcon className="w-4 h-4 mr-1" />
          {t("projects_featured")}
        </div>
      )}

      {project.recruitmentTask && (
        <div className="absolute top-0 left-0 bg-indigo-600 text-white text-xs font-bold px-3 py-1 rounded-br-lg flex items-center">
          <AcademicCapIcon className="w-4 h-4 mr-1" />
          {t("projects_recruitment_task")}
        </div>
      )}

      <div className="h-48 overflow-hidden bg-gray-200">
        <img
          src={project.image}
          alt={t(project.titleKey)}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="p-4 sm:p-6 space-y-4">
        <h3 className="text-xl sm:text-2xl font-bold text-gray-800">
          {t(project.titleKey)}
        </h3>

        <p className="text-sm sm:text-base text-gray-600 mb-4">
          {t(project.descriptionKey)}
        </p>

        <div className="flex flex-wrap gap-2 pt-2 border-t border-gray-100">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-xs font-medium text-blue-800 bg-blue-100 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="pt-4 flex lg:justify-between lg:space-x-4 flex-col lg:flex-row gap-2">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center px-3 py-2 sm:px-4 sm:py-2 border border-transparent text-xs sm:text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 transition"
            >
              <GlobeAltIcon className="w-4 h-4 sm:w-5 sm:h-5 mr-1 sm:mr-2" />
              <span className="hidden sm:inline">
                {t("projects_live_button")}
              </span>
              <span className="sm:hidden">
                {t("projects_live_button_short") || "Demo"}
              </span>
            </a>
          )}

          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center justify-center px-3 py-2 sm:px-4 sm:py-2 border border-gray-300 text-xs sm:text-sm font-medium rounded-md shadow-sm text-gray-700 bg-white hover:bg-gray-50 transition ${
              project.liveUrl ? "flex-1" : "w-full"
            }`}
          >
            <CodeBracketSquareIcon className="w-4 h-4 sm:w-5 sm:h-5 mr-1 sm:mr-2" />
            <span className="hidden sm:inline">
              {t("projects_code_button")}
            </span>
            <span className="sm:hidden">
              {t("projects_code_button_short") || "Kod"}
            </span>
          </a>
        </div>
      </div>
    </div>
  );

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:py-16 space-y-10 sm:space-y-12">
      <header className="text-center">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">
          {t("projects_main_title")}
        </h1>
        <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
          {t("projects_main_subtitle")}
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
        {projectData.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      <div className="text-center pt-8">
        <p className="text-lg text-gray-700">{t("projects_call_to_action")}</p>
      </div>
    </div>
  );
};

export default Projects;
