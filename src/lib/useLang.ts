"use client";
import { useEffect, useState } from "react";

export const useLang = () => {
  const [lang, setLang] = useState(document.querySelector("html")?.lang!);
  useEffect(() => {
    const htmlElement = document.querySelector("html");

    if (htmlElement) {
      setLang(htmlElement.lang);
    }
  }, []);

  return lang;
};
