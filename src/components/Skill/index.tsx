import { IProps } from "./IProps";
import { SkillContainer, SkillContent } from "./styles";
import { BsArrowRightShort } from "react-icons/bs";

export const Skill = ({ discoveryLink, logo: Icon, title }: IProps) => {
  return (
    <SkillContainer href={discoveryLink} target="_blank" rel="noopener noreferrer">
      <SkillContent>
        <Icon size="4.5rem" />
        <h2>{title}</h2>
      </SkillContent>
      <h3>
        Ver mais <BsArrowRightShort size="1.5rem" />
      </h3>
    </SkillContainer>
  );
};
