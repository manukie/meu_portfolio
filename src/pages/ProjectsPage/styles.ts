import styled from "styled-components";

export const StyledHeader = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  background-color: var(--color-gray-500);
  height: 6rem;
`

export const HeaderButtons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  gap: 4.4rem;
`

export const StyledFooter = styled.footer`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  height: 12rem;
  background-color: var(--color-gray-500);
`

export const AboutMeFooter = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 4.5rem;
`

export const FooterText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  gap: 1.5rem;
`

export const FooterIcons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`

export const InstagramDiv = styled.div`
  background-color: var(--color-instagram);
  color: var(--color-gray-100);
  height: 4.5rem;
  width: 4.5rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;

  &:hover {
  background: var(--color-tertiary);
  color: var(--color-gray-400);
  transition: background 0.2s ease;
}
`

export const LinkedinDiv = styled.div`
  background-color: var(--color-linkedin);
  color: var(--color-gray-100);
  height: 4.5rem;
  width: 4.5rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &:hover {
    background: var(--color-quartiary);
    color: var(--color-gray-400);
    transition: background 0.2s ease;
  }
`

export const GithubDiv = styled.div`
  background-color: var(--color-twitter);
  color: var(--color-gray-100);
  height: 4.5rem;
  width: 4.5rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;

  &:hover {
  background: var(--color-gray-500);
  color: var(--color-gray-300);
  transition: background 0.2s ease;
}
`

export const PageContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 145rem;
  background-color: var(--color-gray-600);
`

export const ProjectsDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  gap: 6rem;
`

export const InfoProjectsDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`

export const ProjectsCardDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  margin: 0 auto;
  max-width: 1000px; 
  overflow-x: auto;
  overflow-y: auto;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const ProjectCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  gap: 1rem;
  width: 70%;
`

export const ProjectInfoBox = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2rem;
  margin-bottom: 1rem;
  margin-top: 1.5rem;
`

export const ProjectAccessBox = styled.div`
  display: flex;
  flex-direction: row;
  gap: 4rem;
  margin-top: 2rem;
`

export const ProjectRedirectBox = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  cursor: pointer;

  &:hover {
    background: var(--color-gray-400);
    border-radius: 8rem;
    transition: background 0.2s ease;
  }
`