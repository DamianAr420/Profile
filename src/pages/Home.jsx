import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import SkillShare from "../img/SkillShare.png";

const Home = () => {
  const { t } = useTranslation();

  return (
    <div className="space-y-16">
      <section className="text-center py-16 md:py-32 bg-gray-800 rounded-xl shadow-2xl">
        <p className="text-lg md:text-xl text-blue-400 font-medium mb-3">
          {t("home_hero_tagline")}
        </p>
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-white leading-tight mb-8 max-w-4xl mx-auto px-4">
          {t("home_hero_headline")}
        </h1>

        <Link
          to="/projects"
          className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base md:text-lg font-bold rounded-full text-white bg-blue-600 hover:bg-blue-700 transition duration-300 ease-in-out transform hover:scale-105 shadow-lg ring-4 ring-blue-500/50"
        >
          {t("home_cta_projects")}
          <ArrowRightIcon className="w-5 h-5 ml-2" />
        </Link>

        <p className="mt-4 text-sm text-gray-400">{t("home_cta_guarantee")}</p>
      </section>

      <section className="py-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b-2 border-blue-500 inline-block pb-1">
          {t("home_tech_title")}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-blue-500">
            <h3 className="text-xl font-semibold mb-2">
              {t("home_tech_frontend_title")}
            </h3>
            <p className="text-gray-600">{t("home_tech_frontend_skills")}</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-blue-500">
            <h3 className="text-xl font-semibold mb-2">
              {t("home_tech_backend_title")}
            </h3>
            <p className="text-gray-600">{t("home_tech_backend_skills")}</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-blue-500">
            <h3 className="text-xl font-semibold mb-2">
              {t("home_tech_tools_title")}
            </h3>
            <p className="text-gray-600">{t("home_tech_tools_skills")}</p>
          </div>
        </div>
      </section>

      <section className="py-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">
          {t("home_featured_title")}
        </h2>

        <Link
          to="/projects#project1"
          className="
            relative block w-full h-64 sm:h-80 rounded-xl overflow-hidden shadow-2xl 
            group transition duration-300 ease-in-out transform hover:scale-[1.01]
          "
          style={{
            backgroundImage: `url(${SkillShare})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-60 transition duration-300 p-6 sm:p-8 flex flex-col justify-end">
            <span className="text-sm font-light uppercase text-blue-300">
              {t("project_case_study")}
            </span>
            <h3 className="text-2xl sm:text-4xl font-extrabold text-white mt-1 leading-tight">
              {t("project1_title")}
            </h3>
            <p className="text-sm sm:text-lg font-mono text-gray-200 mt-1">
              Vue | Tailwind CSS | Node.js | MongoDB
            </p>
            <ArrowRightIcon className="absolute top-4 right-4 w-6 h-6 sm:top-6 sm:right-6 sm:w-8 sm:h-8 text-white transition duration-300 group-hover:text-blue-400" />
          </div>
        </Link>

        <div className="text-center mt-10">
          <Link
            to="/projects"
            className="text-lg font-semibold text-blue-600 hover:text-blue-800 transition duration-150"
          >
            {t("home_view_all_projects")} →
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
