import React, { useEffect, useState } from "react";
import "../assets/style.css";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export default function Header() {
  const { t, i18n } = useTranslation();
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [language, setLanguage] = useState(i18n.language || "en");

  const buttons = [
    { label: "header.buttons.home", path: "/" },
    { label: "header.buttons.projects", path: "/projects" },
    { label: "header.buttons.about", path: "/about" },
    { label: "header.buttons.contact", path: "/contact" },
  ];

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    const prefersDark = storedTheme === "dark";
    setIsDarkMode(prefersDark);
    document.documentElement.classList.toggle("dark", prefersDark);
  }, []);

  useEffect(() => {
    const savedLang = localStorage.getItem("lang");
    if (savedLang) {
      setLanguage(savedLang);
      i18n.changeLanguage(savedLang);
    }
  }, [i18n]);

  const toggleTheme = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    document.documentElement.classList.toggle("dark", newMode);
    localStorage.setItem("theme", newMode ? "dark" : "light");
  };

  const changeLanguage = (e) => {
    const newLang = e.target.value;
    setLanguage(newLang);
    i18n.changeLanguage(newLang);
    localStorage.setItem("lang", newLang);
  };

  return (
    <nav className="w-full p-4 bg-background rounded-xl shadow-lg space-y-4 transition-colors duration-300">
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
        <label className="flex items-center gap-3 cursor-pointer">
          <div className="relative">
            <input
              type="checkbox"
              checked={isDarkMode}
              onChange={toggleTheme}
              className="sr-only"
            />
            <div className="block w-14 h-8 bg-muted rounded-full"></div>
            <div
              className={`absolute top-1 left-1 w-6 h-6 bg-background rounded-full shadow transition-transform duration-300 ${
                isDarkMode ? "translate-x-6" : ""
              }`}
            ></div>
          </div>
          <span className="text-foreground font-medium">
            {t("header.darkmode")}
          </span>
        </label>

        <div className="flex items-center gap-2">
          <label htmlFor="language" className="text-foreground font-medium">
            {t("header.language")}
          </label>
          <select
            id="language"
            value={language}
            onChange={changeLanguage}
            className="px-3 py-1 bg-background border border-muted rounded-md text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <option value="en">English</option>
            <option value="pl">Polski</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {buttons.map((button, index) => (
          <Link to={button.path} key={index}>
            <button className="headerButton w-full bg-primary text-text px-4 py-2 rounded-xl font-semibold text-lg interactive">
              {t(button.label)}
            </button>
          </Link>
        ))}
      </div>
    </nav>
  );
}
