import React from "react";
import VideoProduction from "../components/user/pages/services/videoProduction/VideoProduction";
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
        <VideoProduction />
      </TranslationsProvider>
    </>
  );
};

export default page;
