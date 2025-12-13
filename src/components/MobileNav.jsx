import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const MobileNav = () => {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { key: "nav_home", path: "/" },
    { key: "nav_about", path: "/about" },
    { key: "nav_projects", path: "/projects" },
    { key: "nav_contact", path: "/contact" },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const changeLanguage = (e) => {
    const lang = e.target.value;
    i18n.changeLanguage(lang);
    localStorage.setItem("lang", lang);
  };

  return (
    <nav className="bg-gray-700 p-3 sticky top-0 z-50 shadow-lg">
      <div className="flex justify-between items-center">
        <span className="text-white text-lg font-bold">{t("menu")}</span>

        <button
          onClick={toggleMenu}
          className="text-white text-2xl p-1 focus:outline-none focus:ring-2 focus:ring-blue-400 rounded"
          aria-expanded={isOpen}
        >
          {isOpen ? "✕" : "☰"}
        </button>
      </div>

      {isOpen && (
        <ul className="absolute left-0 w-full bg-gray-700 shadow-xl border-t border-gray-600">
          {navItems.map((item) => (
            <li key={item.key} onClick={toggleMenu}>
              <Link
                to={item.path}
                className="block text-white p-4 hover:bg-gray-600 transition duration-150 ease-in-out"
              >
                {t(item.key)}
              </Link>
            </li>
          ))}

          <li className="p-4 border-t border-gray-600">
            <div className="relative inline-block w-full">
              <select
                onChange={changeLanguage}
                value={i18n.language}
                className="
                  appearance-none bg-gray-800 text-white border border-gray-600 
                  rounded-md py-2 pl-3 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500 
                  transition duration-150 ease-in-out cursor-pointer w-full
                "
              >
                <option value="pl">{t("language.pl") || "Polski"}</option>
                <option value="en">{t("language.en") || "English"}</option>
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
          </li>
        </ul>
      )}
    </nav>
  );
};

export default MobileNav;
