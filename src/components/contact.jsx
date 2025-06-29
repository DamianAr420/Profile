import React from "react";
import { useTranslation } from "react-i18next";
import { Mail, Phone, Github } from "lucide-react";

export default function Contact() {
  const { t } = useTranslation();

  const contacts = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: t("contact.email"),
      value: "damianarg2115@gmail.com",
      link: "mailto:damianarg2115@gmail.com",
    },
    {
      icon: <Phone className="w-5 h-5" />,
      label: t("contact.phone"),
      value: "+48 519 674 593",
      link: "tel:+48123456789",
    },
    {
      icon: <Github className="w-5 h-5" />,
      label: "GitHub",
      value: "DamianAr420",
      link: "https://github.com/DamianAr420",
    },
  ];

  return (
    <section className="max-w-xl mx-auto py-12 px-4 text-foreground">
      <h1 className="text-3xl font-bold text-center mb-4">
        {t("contact.title")}
      </h1>
      <p className="text-muted-foreground text-center mb-8">
        {t("contact.description")}
      </p>

      <div className="space-y-4">
        {contacts.map((item, index) => (
          <a
            key={index}
            href={item.link}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-4 p-4 rounded-lg bg-background border border-muted hover:bg-muted/10 transition"
          >
            {item.icon}
            <div>
              <p className="text-sm text-muted-foreground">{item.label}</p>
              <p className="font-medium text-primary">{item.value}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
