import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import {
  SparklesIcon,
  AcademicCapIcon,
  RocketLaunchIcon,
  EnvelopeIcon,
  CodeBracketIcon,
} from "@heroicons/react/24/outline";
import MyPhoto from "../img/me.jpg";

const About = () => {
  const { t } = useTranslation();

  return (
    <div className="mx-auto max-w-7xl px-0 space-y-12">
      <section className="text-center md:text-left md:flex md:items-start md:gap-10 bg-gray-50 p-6 sm:p-8 rounded-xl shadow-lg">
        <div className="flex-shrink-0 mb-4 md:mb-0 md:w-48 flex justify-center">
          <img
            src={MyPhoto}
            alt={t("about_photo_alt")}
            className="w-32 h-32 md:w-48 md:h-48 rounded-full object-cover border-4 border-blue-500 shadow-xl"
          />
        </div>
        <div className="md:flex-grow">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-3">
            {t("about_hero_headline")}
          </h1>
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed max-w-2xl mx-auto md:mx-0">
            {t("about_intro_paragraph1")}
          </p>
          <p className="mt-3 text-sm sm:text-md text-gray-600 max-w-2xl mx-auto md:mx-0">
            {t("about_intro_paragraph2")}
          </p>
          <div className="mt-6 flex justify-center md:justify-start space-x-3">
            <Link
              to="/contact"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-full shadow-sm text-white bg-blue-600 hover:bg-blue-700 transition duration-150"
            >
              <EnvelopeIcon className="w-4 h-4 mr-2" /> {t("about_cta_contact")}
            </Link>
            <Link
              to="/projects"
              className="inline-flex items-center px-4 py-2 border border-blue-600 text-sm font-medium rounded-full text-blue-600 bg-white hover:bg-blue-50 transition duration-150"
            >
              <RocketLaunchIcon className="w-4 h-4 mr-2" />
              {t("about_cta_projects")}
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-white p-8 rounded-xl shadow-lg">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 text-center border-b-2 border-blue-500 inline-block pb-1">
          <SparklesIcon className="inline-block w-6 h-6 sm:w-8 sm:h-8 mr-2 text-blue-500" />
          {t("about_philosophy_title")}
        </h2>
        <p className="text-base sm:text-lg text-gray-700 mt-4 leading-relaxed max-w-3xl mx-auto text-center">
          {t("about_philosophy_text")}
        </p>
      </section>

      <section className="bg-white p-8 rounded-xl shadow-lg">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-8 text-center border-b-2 border-blue-500 inline-block pb-1">
          <AcademicCapIcon className="inline-block w-6 h-6 sm:w-8 sm:h-8 mr-2 text-blue-500" />
          {t("about_journey_title")}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <div className="flex flex-col items-center text-center space-y-3 p-4 bg-gray-50 rounded-lg">
            <AcademicCapIcon className="flex-shrink-0 w-8 h-8 text-blue-500" />
            <h3 className="text-lg font-semibold text-gray-800">
              {t("about_journey_milestone1_title")}
            </h3>
            <p className="text-sm text-gray-600">
              {t("about_journey_milestone1_desc")}
            </p>
          </div>

          <div className="flex flex-col items-center text-center space-y-3 p-4 bg-gray-50 rounded-lg">
            <CodeBracketIcon className="flex-shrink-0 w-8 h-8 text-blue-500" />
            <div>
              <h3 className="text-lg font-semibold text-gray-800">
                {t("about_journey_milestone2_title")}
              </h3>
              <p className="text-sm text-gray-600">
                {t("about_journey_milestone2_desc")}
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center text-center space-y-3 p-4 bg-gray-50 rounded-lg lg:col-span-1 md:col-span-2">
            <RocketLaunchIcon className="flex-shrink-0 w-8 h-8 text-blue-500" />
            <div>
              <h3 className="text-lg font-semibold text-gray-800">
                {t("about_journey_milestone3_title")}
              </h3>
              <p className="text-sm text-gray-600">
                {t("about_journey_milestone3_desc")}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white p-8 rounded-xl shadow-lg">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 text-center border-b-2 border-blue-500 inline-block pb-1">
          {t("about_hobbies_title")}
        </h2>
        <p className="text-base sm:text-lg text-gray-700 mt-4 leading-relaxed max-w-3xl mx-auto text-center">
          {t("about_hobbies_text")}
        </p>
      </section>

      <section className="text-center py-10 bg-blue-600 text-white rounded-xl shadow-lg">
        <h2 className="text-2xl sm:text-3xl font-bold mb-3">
          {t("about_final_cta_headline")}
        </h2>
        <p className="text-base sm:text-lg mb-6 max-w-2xl mx-auto px-2">
          {t("about_final_cta_text")}
        </p>
        <Link
          to="/contact"
          className="inline-flex items-center px-6 py-3 border border-transparent text-base font-bold rounded-full text-blue-600 bg-white hover:bg-gray-100 transition duration-300 transform hover:scale-105"
        >
          <EnvelopeIcon className="w-5 h-5 mr-2" />
          {t("about_cta_contact_large")}
        </Link>
      </section>
    </div>
  );
};

export default About;
