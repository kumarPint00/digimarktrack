import React from "react";
import SocialMediaMarketing from "../components/user/pages/services/socialMediaMarketing/SocialMediaMarketing";
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
        <SocialMediaMarketing />
      </TranslationsProvider>
    </>
  );
};

export default page;