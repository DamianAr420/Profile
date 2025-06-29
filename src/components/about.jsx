import React from "react";
import { useTranslation } from "react-i18next";
import meImage from "../img/me.jpg";
import "../assets/style.css";

export default function About() {
  const { t } = useTranslation();

  const techSkills = [
    "CSS",
    "HTML",
    "Figma",
    "SQL",
    "Vue",
    "Node.js",
    "React.js",
    "MongoDB",
    "TypeScript",
    "JavaScript",
    "Express.js",
    "Tailwind CSS",
    "Microsoft 365",
  ];

  const softSkills = [
    t("about.soft.abilityToWork"),
    t("about.soft.timeManagement"),
    t("about.soft.attentionToDetail"),
    t("about.soft.punctuality"),
    t("about.soft.commitment"),
    t("about.soft.teamwork"),
  ];

  return (
    <section className="text-foreground px-4 py-10 max-w-4xl mx-auto space-y-10">
      <div className="text-center">
        <img
          src={meImage}
          alt="Damian"
          className="w-32 h-32 mx-auto rounded-full shadow mb-4 object-cover"
        />
        <h1 className="text-3xl font-bold">Damian Argalski</h1>
        <p className="text-muted-foreground">{t("about.role")}</p>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-2">{t("about.skills")}</h2>
        <div className="flex flex-wrap gap-2">
          {techSkills.map((skill, i) => (
            <span
              key={i}
              className="px-3 py-1 bg-muted text-xs font-medium rounded-md"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-2">{t("about.softSkills")}</h2>
        <ul className="list-disc list-inside space-y-1 text-muted-foreground">
          {softSkills.map((skill, i) => (
            <li key={i}>{skill}</li>
          ))}
        </ul>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-2">{t("about.education")}</h2>
        <div className="space-y-3">
          <div className="border p-3 rounded-lg shadow-sm bg-background">
            <p className="font-medium">{t("about.uni.title")}</p>
            <p className="text-sm text-muted-foreground">
              {t("about.uni.years")}
            </p>
            <p className="text-sm">{t("about.uni.specialization")}</p>
          </div>
          <div className="border p-3 rounded-lg shadow-sm bg-background">
            <p className="font-medium">{t("about.tech.title")}</p>
            <p className="text-sm text-muted-foreground">
              {t("about.tech.years")}
            </p>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-2">{t("about.experience")}</h2>
        <div className="border p-4 rounded-lg shadow-sm bg-background space-y-2">
          <p className="font-medium">{t("about.job.company")}</p>
          <p className="text-sm text-muted-foreground">
            {t("about.job.dates")}
          </p>
          <p className="font-semibold">{t("about.job.role")}</p>
          <ul className="list-disc list-inside space-y-1 text-muted-foreground text-sm">
            <li>{t("about.job.task1")}</li>
            <li>{t("about.job.task2")}</li>
            <li>{t("about.job.task3")}</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
