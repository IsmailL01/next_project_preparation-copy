"use client";

import Image from "next/image";

import cls from "./baner.module.scss";
import IMG from "@/app/assets/images/images";

export default function Baner() {
  // const t = useTranslations("banner");

  // const features = [
  //   t("features.0"),
  //   t("features.1"),
  //   t("features.2"),
  //   t("features.3"),
  // ];

  return (
    <div className={cls.baner}>
      <Image className={cls.banerBc} src={IMG.Baner} alt='' priority />
      {/* <h2>{t("title")}</h2>
      <p>{t("description")}</p>
      <ul>
        {features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul> */}
      <button className={`middleBtn`}>{t("start")}</button>
    </div>
  );
}
