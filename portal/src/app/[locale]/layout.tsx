import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import {unstable_setRequestLocale} from 'next-intl/server';
 
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "360 Digital Marketing",
  description: "This is a Digital Marketing Website",
};
const locales = ['en', 'de'];
 
export function generateStaticParams() {
  return locales.map((locale) => ({locale}));
}

export default async function LocaleLayout({
  children,
  params: { locale }
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {

  unstable_setRequestLocale(locale);
  // Fetch messages based on the locale
  const messages = await getMessages();
 
  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
