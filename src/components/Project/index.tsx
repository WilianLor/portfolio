import { ProjectContainer, TagsContainer, GitContainer, TextContainer } from "./styles";
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
    <ProjectContainer>
      <TextContainer>
        <h2>{name}</h2>
        <p>{description}</p>
      </TextContainer>
      <TagsContainer>
        {tags.map((tag) => (
          <span>{tag}</span>
        ))}
      </TagsContainer>
      <GitContainer>
        <a href={frontend} target="_blank">
          Frontend <BsArrowRightShort size="1.5rem"/>
        </a>
        {backend ? (
          <a href={backend} target="_blank">
            Backend <BsArrowRightShort size="1.5rem"/>
          </a>
        ) : (
          ""
        )}
      </GitContainer>
    </ProjectContainer>
  );
};
