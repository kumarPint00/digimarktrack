import React from "react";
import SoftwareDevelopment from "../components/user/pages/services/softwaredevelopment/SoftwareDevelopment";
import TranslationsProvider from "@/components/TranslationsProvider";
import initTranslations from "@/app/i18n";

const i18nNamespaces = [
  "landingPage",
  "navbar",
  "webDevelopment",
  "contentWriting",
  "digitalMarketing",
  "eCommerce",
  "graphicDesign",
  "itConsulting",
  "mobileDevelopment",
  "reputationManagment",
  "seoManagement",
  "socialMediaMarketing",
  "softwareDevelopment",
];

const page = async ({ params: { locale } }: any) => {
  const { t, resources } = await initTranslations(locale, i18nNamespaces);

  return (
    <>
      <TranslationsProvider
        namespaces={i18nNamespaces}
        locale={locale}
        resources={resources}
      >
        <SoftwareDevelopment />
      </TranslationsProvider>
    </>
  );
};

export default page;
