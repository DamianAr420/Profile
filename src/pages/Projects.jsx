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
import QuizWizLogo from "../img/QuizWizLogo.png";

const projectData = [
  {
    id: 4,
    titleKey: "project_quiz_title",
    descriptionKey: "project_quiz_desc",
    image: QuizWizLogo,
    technologies: ["Vue", "Tailwind CSS", ".NET", "PostgreSQL"],
    githubUrlFront: "https://github.com/DamianAr420/QuizWiz-Frontend",
    githubUrlBack: "https://github.com/DamianAr420/QuizWiz-Backend",
    liveUrl: "https://quiz-wiz-steel.vercel.app",
    featured: true,
    recruitmentTask: false,
  },
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
      className={`group bg-white rounded-3xl transition-all duration-500 hover:-translate-y-3 flex flex-col h-full relative ${
        project.featured
          ? "ring-1 ring-blue-500/50 shadow-[0_30px_60px_rgba(59,130,246,0.1)]"
          : "shadow-[0_15px_45px_rgba(0,0,0,0.03)] hover:shadow-[0_30px_70px_rgba(0,0,0,0.06)]"
      }`}
    >
      <div className="absolute top-5 right-5 z-20 flex items-center gap-2">
        {project.featured && (
          <div
            className="bg-amber-500/10 text-amber-600 p-2 rounded-full backdrop-blur-sm border border-amber-200/50 shadow-sm"
            title={t("projects_featured")}
          >
            <StarIcon className="w-4 h-4" />
          </div>
        )}
        {project.recruitmentTask && (
          <div
            className="bg-indigo-500/10 text-indigo-600 p-2 rounded-full backdrop-blur-sm border border-indigo-200/50 shadow-sm"
            title={t("projects_recruitment_task")}
          >
            <AcademicCapIcon className="w-4 h-4" />
          </div>
        )}
      </div>

      <div className="p-4 pt-4 pb-0">
        <div className="relative aspect-[16/10] overflow-hidden rounded-2xl shadow-inner bg-slate-100">
          <img
            src={project.image}
            alt={t(project.titleKey)}
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
        </div>
      </div>

      <div className="p-6 flex flex-col flex-grow space-y-5">
        <h3 className="text-2xl font-black text-slate-900 leading-tight group-hover:text-blue-600 transition-colors">
          {t(project.titleKey)}
        </h3>

        <p className="text-slate-600 text-sm leading-relaxed mb-auto flex-grow font-medium">
          {t(project.descriptionKey)}
        </p>

        <div className="flex flex-wrap gap-2 pt-5 border-t border-slate-100">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-[10px] font-black text-slate-500 bg-slate-100 border border-slate-200 rounded-lg uppercase tracking-wider"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="space-y-3 pt-2">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 px-4 bg-slate-950 text-white rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition-all shadow-lg shadow-slate-950/20 hover:bg-gradient-to-r hover:from-blue-600 hover:to-indigo-600 active:scale-95"
            >
              <GlobeAltIcon className="w-5 h-5" />
              {t("projects_live_button")}
            </a>
          )}

          <div className="grid grid-cols-2 gap-3">
            {project.githubUrlFront ? (
              <>
                <a
                  href={project.githubUrlFront}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3 px-3 bg-slate-50 border border-slate-200 text-slate-700 rounded-xl font-bold text-xs flex items-center justify-center gap-2 hover:bg-slate-100 hover:text-slate-900 transition-all"
                >
                  <CodeBracketSquareIcon className="w-4 h-4" />
                  Frontend
                </a>
                <a
                  href={project.githubUrlBack}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3 px-3 bg-slate-50 border border-slate-200 text-slate-700 rounded-xl font-bold text-xs flex items-center justify-center gap-2 hover:bg-slate-100 hover:text-slate-900 transition-all"
                >
                  <CodeBracketSquareIcon className="w-4 h-4" />
                  Backend
                </a>
              </>
            ) : (
              project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="col-span-2 py-3 px-3 bg-slate-50 border border-slate-200 text-slate-700 rounded-xl font-bold text-xs flex items-center justify-center gap-2 hover:bg-slate-100 hover:text-slate-900 transition-all"
                >
                  <CodeBracketSquareIcon className="w-4 h-4" />
                  {t("projects_code_button")}
                </a>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="mx-auto max-w-7xl px-4 py-20 bg-slate-50/50">
      <header className="mb-24 text-center">
        <h1 className="text-5xl md:text-7xl font-black text-slate-950 leading-tight mb-6 tracking-tight">
          {t("projects_main_title")}
        </h1>
        <p className="text-xl text-slate-600 max-w-2xl mx-auto font-medium leading-relaxed">
          {t("projects_main_subtitle")}
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {projectData.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      <footer className="mt-24 text-center">
        <p className="text-slate-500 font-medium text-sm">
          {t("projects_call_to_action")} →
        </p>
      </footer>
    </div>
  );
};

export default Projects;
