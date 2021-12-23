import { IProps } from "./IProps";
import styles from "./styles.module.scss";
import { BsArrowRightShort } from "react-icons/bs";

export const Skill = ({ discoveryLink, logo: Icon, title }: IProps) => {
  return (
    <a
      className={styles.skillContainer}
      href={discoveryLink}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className={styles.skillContent}>
        <Icon size="4.5rem" />
        <h2>{title}</h2>
      </div>
      <h3>
        Ver mais <BsArrowRightShort size="1.5rem" />
      </h3>
    </a>
  );
};
