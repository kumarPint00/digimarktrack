import WebDevelopment from "@/app/[locale]/components/user/pages/services/webDevelopment/WebDevelopment";
import initTranslations from "@/app/i18n";
import TranslationsProvider from "@/components/TranslationsProvider";
import React from "react";

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
        <WebDevelopment />
      </TranslationsProvider>
    </>
  );
};

export default page;
