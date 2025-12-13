import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import {
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
  ClipboardDocumentCheckIcon,
} from "@heroicons/react/24/outline";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  const { t } = useTranslation();
  const [copied, setCopied] = useState(null);

  const handleCopy = (value, field) => {
    navigator.clipboard.writeText(value).then(() => {
      setCopied(field);
      setTimeout(() => setCopied(null), 2000);
    });
  };

  const contactInfo = [
    {
      icon: EnvelopeIcon,
      label: t("contact_email"),
      value: "damianarg2115@gmail.com",
      action: () => handleCopy("damianarg2115@gmail.com", "email"),
      type: "email",
      description: t("contact_email_desc"),
    },
    {
      icon: PhoneIcon,
      label: t("contact_phone"),
      value: "+48 519 674 593",
      action: () => handleCopy("+48519674593", "phone"),
      type: "phone",
      description: t("contact_phone_desc"),
    },
    {
      icon: MapPinIcon,
      label: t("contact_location"),
      value: "Brodnica",
      fullValue: "woj. kujawsko-pomorskie, Polska",
      type: "location",
      description: t("contact_location_desc"),
    },
  ];

  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/DamianAr420",
      icon: faGithub,
      description: t("contact_github_desc"),
    },
  ];

  return (
    <div className="mx-auto max-w-5xl px-0 space-y-12">
      <header className="text-center py-8 bg-blue-600 text-white rounded-xl shadow-lg">
        <h1 className="text-4xl font-extrabold mb-2">
          <ClipboardDocumentCheckIcon className="inline-block w-8 h-8 mr-3" />
          {t("contact_recruiter_title")}
        </h1>
        <p className="text-lg opacity-90 max-w-3xl mx-auto px-4">
          {t("contact_recruiter_subtitle")}
        </p>
      </header>

      <div className="bg-white p-8 rounded-xl shadow-2xl border-t-4 border-blue-600">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b pb-2">
              {t("contact_direct_info_title")}
            </h2>
            <div className="space-y-8">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <item.icon className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider">
                      {item.label}
                    </h3>

                    {item.type === "location" ? (
                      <div>
                        <span className="text-lg font-semibold text-gray-900 block">
                          {item.value}
                        </span>
                        <span className="text-sm text-gray-600">
                          {item.fullValue}
                        </span>
                      </div>
                    ) : item.type === "email" || item.type === "phone" ? (
                      <button
                        onClick={item.action}
                        className="text-lg font-semibold text-gray-900 hover:text-blue-600 transition duration-150 inline-flex items-center"
                      >
                        {item.value}
                        {copied === item.type ? (
                          <FontAwesomeIcon
                            icon={faCheck}
                            className="w-4 h-4 ml-3 text-green-500"
                          />
                        ) : (
                          <span className="text-sm ml-3 text-blue-500 hover:text-blue-700">
                            (Kopiuj)
                          </span>
                        )}
                      </button>
                    ) : (
                      <span className="text-lg font-semibold text-gray-900">
                        {item.value}
                      </span>
                    )}

                    <p className="text-sm text-gray-500 mt-1">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b pb-2">
              {t("contact_pro_links_title")}
            </h2>
            <div className="space-y-8">
              {socialLinks.map((link, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <FontAwesomeIcon
                    icon={link.icon}
                    className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1"
                  />
                  <div>
                    <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider">
                      {link.name}
                    </h3>
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-lg font-semibold text-gray-900 hover:text-blue-600 transition duration-150 break-all"
                    >
                      {link.url
                        .replace(/(^\w+:|^)\/\//, "")
                        .replace("www.", "")}
                    </a>
                    <p className="text-sm text-gray-500 mt-1">
                      {link.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <section className="text-center py-6">
        <p className="text-lg font-medium text-gray-700 max-w-3xl mx-auto">
          {t("contact_recruiter_footer")}
        </p>
      </section>
    </div>
  );
};

export default Contact;
