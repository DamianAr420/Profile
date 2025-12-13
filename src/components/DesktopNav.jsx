import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const DesktopNav = () => {
  const { t, i18n } = useTranslation();

  const navItems = [
    { key: "nav_home", path: "/" },
    { key: "nav_about", path: "/about" },
    { key: "nav_projects", path: "/projects" },
    { key: "nav_contact", path: "/contact" },
  ];

  const changeLanguage = (e) => {
    const lang = e.target.value;
    i18n.changeLanguage(lang);
    localStorage.setItem("lang", lang);
  };

  return (
    <nav className="w-64 min-h-full bg-gray-900 text-white p-4 shadow-lg flex-shrink-0">
      <h2 className="text-xl font-semibold mb-6 border-b border-gray-700 pb-2">
        {t("menu")}
      </h2>

      <ul className="space-y-2">
        {navItems.map((item) => (
          <li key={item.key}>
            <Link
              to={item.path}
              className="block p-3 rounded-lg hover:bg-blue-700 transition duration-150 ease-in-out"
            >
              {t(item.key)}
            </Link>
          </li>
        ))}
      </ul>

      <div className="mt-8">
        {" "}
        <div className="relative inline-block w-full">
          <select
            value={i18n.language}
            onChange={changeLanguage}
            className="
              appearance-none bg-gray-800 text-white border border-gray-600 
              rounded-md py-2 pl-3 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500 
              transition duration-150 ease-in-out cursor-pointer w-full
            "
          >
            <option value="pl">{t("language.pl")}</option>
            <option value="en">{t("language.en")}</option>
          </select>

          <div
            className="
              pointer-events-none absolute inset-y-0 right-0 
              flex items-center px-2 text-gray-400
            "
          >
            <svg
              className="fill-current h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
            </svg>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default DesktopNav;
