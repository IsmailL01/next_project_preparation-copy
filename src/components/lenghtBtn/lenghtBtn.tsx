"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
// import { MouseEvent } from "react";

const lenghtData = ["ru", "en"];

export default function LengthBtn() {
  const router = useRouter();
  const localActive = useLocale();
  const pathname = usePathname();

  function switchLenght() {
    const currentIndex = lenghtData.indexOf(localActive);
    const nextIndex = (currentIndex + 1) % lenghtData.length;
    const nextLocale = lenghtData[nextIndex];
    const newPath = pathname.replace(`/${localActive}`, "") || "/";
    const newUrl = `/${nextLocale}${newPath}`;
    router.replace(newUrl);
  }

  return (
    <button className="miniBtn" onClick={switchLenght}>
      {localActive}
    </button>
  );
}
