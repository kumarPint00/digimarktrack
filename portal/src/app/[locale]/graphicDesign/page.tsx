import React from "react";
import GraphicDesign from "../components/user/pages/services/graphicDesign/GraphicDesign";
import initTranslations from "@/app/i18n";
import TranslationsProvider from "@/components/TranslationsProvider";

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
        <GraphicDesign />
      </TranslationsProvider>
    </>
  );
};

export default page;
