import styled from "styled-components";

export const ProjectContainer = styled.div`
  width: 20rem;
  background-color: var(--black-1);
  box-shadow: 10px 10px var(--black-3);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1rem;
  padding: 2rem;
`;

export const TextContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  flex-direction: column;

  h2 {
    font-weight: 700;
    font-size: 1.5rem;
    color: var(--white);
  }
`;

export const TagsContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 0.25rem;

  span {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 0.5rem;
    padding: 0.4rem;
    font-size: 0.9rem;
    font-weight: 600;
    background-color: var(--black-3);
    color: var(--gray);
  }
`;

export const GitContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  a {
    background: var(--purple);
    color: var(--white);
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 0.5rem;
    transition: filter 0.2s;

    &:hover {
      filter: brightness(1.2);
    }
  }
`;
