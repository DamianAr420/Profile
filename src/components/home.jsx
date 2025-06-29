import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "../assets/style.css";
import meImage from "../img/me.jpg";

export default function Home() {
  const { t } = useTranslation();

  return (
    <section className="text-center py-16 px-4 max-w-3xl mx-auto">
      <img
        src={meImage}
        alt="Damian"
        className="w-32 h-32 mx-auto rounded-full mb-6 shadow-lg object-cover"
      />

      <h1 className="text-4xl font-bold text-foreground">{t("home.title")}</h1>
      <h2 className="text-xl mt-2 text-muted-foreground">
        {t("home.subtitle")}
      </h2>

      <p className="mt-4 text-muted-foreground">{t("home.description")}</p>

      <div className="flex justify-center gap-4 mt-6 flex-wrap">
        <Link to="/projects">
          <button className="bg-primary text-text px-6 py-2 rounded-xl shadow hover:scale-105 transition">
            📁 {t("home.cta.projects")}
          </button>
        </Link>
        <Link to="/contact">
          <button className="bg-muted text-foreground px-6 py-2 rounded-xl shadow hover:scale-105 transition">
            📨 {t("home.cta.contact")}
          </button>
        </Link>
      </div>
    </section>
  );
}
