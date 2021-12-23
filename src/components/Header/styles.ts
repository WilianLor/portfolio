import styled from "styled-components";

export const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  background: transparent;
  display: flex;
  align-items: center;
  width: 100vw;
  height: 6rem;
`;

export const HeaderContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 1120px;
  margin: 0 auto;

  @media (max-width: 1200px) {
    width: 100%;
    justify-content: space-around;

    @media (max-width: 720px) {
      flex-direction: column;
      justify-content: center;
      gap: 0.5rem;
    }
  }

  span {
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--purple);

    @media (max-width: 720px) {
      font-size: 1.35rem;

      @media (max-width: 720px) {
      font-size: 1.2rem;
    }
    }
  }
`;

export const Nav = styled.nav`
  #link {
    font-size: 1rem;
    font-weight: 400;
    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.7);
    }

    & + #link {
      margin-left: 1.5rem;
    }
  }
`;
