import React from "react";
import Seo from "../components/user/pages/services/seo/Seo";
import TranslationsProvider from "@/components/TranslationsProvider";
import initTranslations from "@/app/i18n";

const i18nNamespaces = ["landingPage", "home", "navbar", "webDevelopment"];

const page = async ({ params: { locale } }: any) => {
  const { t, resources } = await initTranslations(locale, i18nNamespaces);

  return (
    <>
      <TranslationsProvider
        namespaces={i18nNamespaces}
        locale={locale}
        resources={resources}
      >
        <Seo />
      </TranslationsProvider>
    </>
  );
};

export default page;
