import cls from "./footer.module.scss";

export const Footer = () => {
  return (
    <footer className={cls.footer}>
      <h2>Контакты и поддержка</h2>
      <p>Email: support@tournyverse.com</p>
      <p>Телефон: +7 (999) 123-45-67</p>
      <h3>Часто задаваемые вопросы</h3>
    </footer>
  );
};
