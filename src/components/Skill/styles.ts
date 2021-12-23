import styled from "styled-components";

export const SkillContainer = styled.a`
  display: flex;
  background: var(--black-1);
  width: 11rem;
  height: 15rem;
  padding: 2rem;
  transition: 0.2s;
  flex-direction: column;
  box-shadow: 10px 10px var(--black-3);

  &:hover {
    background-color: var(--purple);

    div {
      transform: translateY(-1rem);
    }

    h3 {
      color: var(--white);
    }
  }

  h3 {
    display: flex;
    color: var(--black-1);
    flex-direction: row;
    align-items: center;
    font-size: 0.8rem;
    font-weight: 500;
    gap: 0.5rem;
    transition: color 0.2s;
  }
`;

export const SkillContent = styled.div`
  height: 90%;
  display: flex;
  flex-direction: column;
  transition: 0.2s;
  justify-content: space-around;

  h2 {
    font-size: 1.2rem;
    font-weight: 700;
    transition: transform 0.2s;
  }
`;
