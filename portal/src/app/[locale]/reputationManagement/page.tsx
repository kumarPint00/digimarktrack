import React from "react";
import ReputationManagement from "../components/user/pages/services/reputationManagement/ReputationManagement";
import TranslationsProvider from "@/components/TranslationsProvider";
import initTranslations from "@/app/i18n";

const i18nNamespaces = ["landingPage", "home", "navbar", "webDevelopment", "reputationManagment"];

const page = async ({ params: { locale } }: any) => {
  const { t, resources } = await initTranslations(locale, i18nNamespaces);
  return (
    <>
      <TranslationsProvider
        namespaces={i18nNamespaces}
        locale={locale}
        resources={resources}
      >
        <ReputationManagement />
      </TranslationsProvider>
    </>
  );
};

export default page;
