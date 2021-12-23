import { HeaderContainer, HeaderContent, Nav } from "./styles";
import AnchorLink from "react-anchor-link-smooth-scroll";

export const Header = () => {
  return (
    <HeaderContainer>
      <HeaderContent>
        <span>wilian.lorencetto1@gmail.com</span>
        <Nav>
          <AnchorLink href="#home" id="link">
            Home
          </AnchorLink>
          <AnchorLink href="#experiences" id="link">
            Experiências
          </AnchorLink>
          <AnchorLink href="#projects" id="link">
            Projetos
          </AnchorLink>
        </Nav>
      </HeaderContent>
    </HeaderContainer>
  );
};
