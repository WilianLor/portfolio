import styles from "./styles.module.scss";
import { IProps } from "./IProps";
import { BsArrowRightShort } from "react-icons/bs";

export const Project = ({
  description,
  frontend,
  name,
  tags,
  backend = null,
}: IProps) => {
  return (
    <div className={styles.projectsContainer}>
      <div className={styles.textContainer}>
        <h2>{name}</h2>
        <p>{description}</p>
      </div>
      <div className={styles.tagsContainer}>
        {tags.map((tag, index) => (
          <span key={index}>{tag}</span>
        ))}
      </div>
      <div className={styles.gitContainer}>
        <a href={frontend} target="_blank" rel="noopener noreferrer">
          Frontend <BsArrowRightShort size="1.5rem" />
        </a>
        {backend ? (
          <a href={backend} target="_blank" rel="noopener noreferrer">
            Backend <BsArrowRightShort size="1.5rem" />
          </a>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};
