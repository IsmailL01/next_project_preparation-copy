import "./global.css";

import { dir } from "i18next";
import { languages, fallbackLng } from "../i18n/settings";
import { useTranslation } from "../i18n";
import cls from "./layout.module.scss";
import "../../styles/global.scss";
import { ThemeProvider } from "src/providers/themeProvider/ui/ThemeProvider";

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}

export async function generateMetadata({ params: { lng } }) {
  if (languages.indexOf(lng) < 0) lng = fallbackLng;
  const { t } = await useTranslation(lng, "", {});

  return {
    title: t("title"),
    content:
      "A playground to explore new Next.js 13/14 app directory features such as nested layouts, instant loading states, streaming, and component level data fetching.",
  };
}

export default async function RootLayout({ children, params: { lng } }) {
  return (
    <html lang={lng} dir={dir(lng)}>
      <head />
      <body className={cls.body}>
        <ThemeProvider>
          <section className={`${cls.sectBody} ${cls.layoutHeader}`}></section>
          <section className={`${cls.sectBody} ${cls.layoutMain}`}>
            {children}
          </section>
          <section className={`${cls.sectBody} ${cls.layoutFooter}`}>
            footer
          </section>
        </ThemeProvider>
      </body>
    </html>
  );
}
