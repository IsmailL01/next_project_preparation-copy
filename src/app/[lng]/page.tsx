import Link from "next/link";
import { Trans } from "react-i18next/TransWithoutContext";
import { languages, fallbackLng } from "../i18n/settings";
import { useTranslation } from "../i18n";

import Header from "src/components/header/Header";
import { Footer } from "./components/Footer";
import ThemeBtn from "src/components/themeBtn/ThemeBtn";

export async function generateMetadata({ params: { lng } }) {
  const { t } = await useTranslation(lng, "banner", {});
  return { title: t("description") };
}

export default async function Page({ params: { lng } }) {
  if (languages.indexOf(lng) < 0) lng = fallbackLng;
  const { t, i18n } = await useTranslation(lng, "banner", {});

  return (
    <>
      <ThemeBtn />
      <Trans i18nKey='description' t={t}>
        Immerse yourself in the thrilling world of intergalactic battles and
        strategies. Our portal offers a variety of gaming rooms where you can:
      </Trans>
      <Header heading={t("description")} />
      {languages
        .filter((l) => lng !== l)
        .map((l, index) => {
          return (
            <span key={l}>
              {index > 0 && " or "}
              <Link href={`/${l}`}>{l}</Link>
            </span>
          );
        })}

      <Footer lng={lng} path={undefined} />
    </>
  );
}
