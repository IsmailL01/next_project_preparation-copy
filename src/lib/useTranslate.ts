import { useEffect, useState } from "react";
import { useLang } from "./useLang";
import { useTranslation } from "src/app/i18n";

interface useTranslateProps {
  filename: string;
  key: string;
}

export const useTranslate = (props: useTranslateProps) => {
  const { key, filename } = props;
  

  const lang = useLang();
  const [translatedText, setTranslatedText] = useState("");
  useEffect(() => {
    async function translateText() {
      const { t } = await useTranslation(lang, filename, {});
      setTranslatedText(t(key));
    }
    translateText();
  }, [lang]);

  return translatedText;
};
