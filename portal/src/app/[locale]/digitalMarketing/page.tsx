import React from "react";
import DigitalMarketing from "../components/user/pages/services/digitalMarketing/DigitalMarketing";
import initTranslations from "@/app/i18n";
import TranslationsProvider from "@/components/TranslationsProvider";

const i18nNamespaces = ["landingPage", "home", "navbar", "webDevelopment", "mobileDevelopment", "digitalMarketing"];

const page = async ({ params: { locale } }: any) => {
  const { t, resources } = await initTranslations(locale, i18nNamespaces);
  return (
    <>
      <TranslationsProvider
        namespaces={i18nNamespaces}
        locale={locale}
        resources={resources}
      >
        <DigitalMarketing />
      </TranslationsProvider>
    </>
  );
};

export default page;
