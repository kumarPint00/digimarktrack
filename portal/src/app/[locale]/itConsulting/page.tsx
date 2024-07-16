import React from "react";
import ItConsulting from "../components/user/pages/services/itConsulting/ItConsulting";
import TranslationsProvider from "@/components/TranslationsProvider";
import initTranslations from "@/app/i18n";

const i18nNamespaces = ["landingPage", "home", "navbar", "webDevelopment", "socialMediaMarketing"];

const page = async ({ params: { locale } }: any) => {
  const { t, resources } = await initTranslations(locale, i18nNamespaces);

  return (
    <>
      <TranslationsProvider
        namespaces={i18nNamespaces}
        locale={locale}
        resources={resources}
      >
        <ItConsulting />
      </TranslationsProvider>
    </>
  );
};

export default page;
