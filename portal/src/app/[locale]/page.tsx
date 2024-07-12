import React from "react";
import LandingPage from "./components/user/landing-page/page";
import initTranslations from "../i18n";
import TranslationsProvider from "@/components/TranslationsProvider";

const i18nNamespaces = ["landingPage", "home", "navbar", "webDevelopment"];

export default async function Home({ params: { locale } }:any) {
  const { t, resources } = await initTranslations(locale, i18nNamespaces);
  return (
    <>
    <TranslationsProvider
        namespaces={i18nNamespaces}
        locale={locale}
        resources={resources}
      >
      <LandingPage />
      </TranslationsProvider>
    </>
  );
}
