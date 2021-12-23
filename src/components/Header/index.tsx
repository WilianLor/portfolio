import styles from "./styles.module.scss";
import AnchorLink from "react-anchor-link-smooth-scroll";

export const Header = () => {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <span>wilian.lorencetto1@gmail.com</span>
        <nav className={styles.navContainer}>
          <AnchorLink href="#home" className={styles.link}>
            Home
          </AnchorLink>
          <AnchorLink href="#experiences" className={styles.link}>
            Experiências
          </AnchorLink>
          <AnchorLink href="#projects" className={styles.link}>
            Projetos
          </AnchorLink>
        </nav>
      </div>
    </header>
  );
};
