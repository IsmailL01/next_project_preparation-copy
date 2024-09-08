import cls from "./navHeader.module.scss";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navItems } from "../lib/items";
import { useLocale, useTranslations } from "next-intl";

export const NavHeader = () => {
  const pathname = usePathname();
  const localActive = useLocale();
  const t = useTranslations("NavHeader");

  return (
    <nav className={cls.navHeader}>
      {navItems.map((val, index) => {
        const isActive =
          pathname === `/${localActive}${val.to}` ||
          (val.to === "/" && pathname === `/${localActive}`);

        return (
          <Link
            href={`/${localActive}${val.to}`}
            key={index}
            className={isActive ? cls.active : ""}
          >
            {t(val.text.toLowerCase())}
          </Link>
        );
      })}
    </nav>
  );
};
