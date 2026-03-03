import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import QuizWiz from "../img/QuizWizLogo.png";

const Home = () => {
  const { t } = useTranslation();

  return (
    <div className="space-y-16 mx-auto max-w-7xl">
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

      <section className="py-12">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            {t("home_featured_title")}
          </h2>
          <div className="hidden sm:block h-px flex-grow mx-8 bg-gray-200"></div>
        </div>

        <Link
          to="/projects"
          className="relative block w-full group rounded-2xl overflow-hidden shadow-2xl bg-gray-900"
        >
          <div className="relative h-[400px] sm:h-[500px] w-full overflow-hidden">
            <div
              className="absolute inset-0 transition duration-700 ease-out transform group-hover:scale-110 opacity-80 group-hover:opacity-100"
              style={{
                backgroundImage: `url(${QuizWiz})`,
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundColor: "#1a202c",
              }}
            />

            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent opacity-90" />

            <div className="absolute inset-0 p-8 sm:p-12 flex flex-col justify-end">
              <div className="transform transition duration-500 translate-y-4 group-hover:translate-y-0">
                <div className="flex items-center space-x-3 mb-4">
                  <span className="px-3 py-1 bg-blue-600 text-white text-xs font-bold tracking-widest uppercase rounded-full">
                    {t("project_case_study")}
                  </span>
                  <span className="h-px w-12 bg-blue-500"></span>
                </div>

                <h3 className="text-4xl sm:text-6xl font-black text-white mb-4 tracking-tight">
                  QuizWiz
                </h3>

                <div className="flex flex-wrap gap-3 mb-6">
                  {["Vue", "Tailwind CSS", ".NET", "PostgreSQL"].map((tech) => (
                    <span
                      key={tech}
                      className="px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg text-sm font-medium text-blue-100"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="inline-flex items-center text-white font-bold text-lg group-hover:text-blue-400 transition-colors">
                  {t("home_view_all_projects")}
                  <ArrowRightIcon className="w-6 h-6 ml-3 transform transition-transform group-hover:translate-x-2" />
                </div>
              </div>
            </div>

            <div className="absolute top-6 right-6 p-4 bg-white/5 backdrop-blur-xl rounded-full border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <ArrowRightIcon className="w-8 h-8 text-white" />
            </div>
          </div>
        </Link>

        <div className="text-center mt-12">
          <Link
            to="/projects"
            className="group inline-flex items-center px-6 py-3 text-lg font-bold text-gray-700 hover:text-blue-600 transition-all"
          >
            <span className="relative">
              {t("home_view_all_projects")}
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </span>
            <ArrowRightIcon className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
