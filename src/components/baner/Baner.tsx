"use client";

import Image from "next/image";

import cls from "./baner.module.scss";
import IMG from "../../assets/images/images";
import { useEffect, useRef } from "react";
import { useLang } from "src/lib/useLang";
import { useTranslate } from "src/lib/useTranslate";

export default function Baner() {
  // const t = useTranslations("banner");
  const translatedText = useTranslate({ filename: "banner", key: "title" });
  // const { t } = await useTranslation(lng, "banner", {});
  // const features = [
  //   t("features.0"),
  //   t("features.1"),
  //   t("features.2"),
  //   t("features.3"),
  // ];

  console.log(translatedText, "translatedText");

  return (
    <div className={cls.baner}>
      <Image className={cls.banerBc} src={IMG.Baner} alt='' priority />
      {/* <h2>{t("title")}</h2>
      <p>{t("description")}</p>
      {}
      <ul>
        {features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul> */}
      {/* <button className={`middleBtn`}>{t("start")}</button> */}
      <p>{translatedText} translatedText </p>
    </div>
  );
}
