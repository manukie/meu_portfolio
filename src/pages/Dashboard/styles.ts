import styled from "styled-components";

export const StyledHeader = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  background-color: var(--color-gray-600);
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
  background-color: var(--color-gray-600);
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
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 50rem;
  background-color: var(--color-gray-500);
  gap: 7rem;
`

export const AboutMeSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  margin-left: 8rem;
  width: 48%;
`

export const BackgroundImageSection = styled.div`
  width: 50%;
  height: 100%;
  overflow: hidden; 

  img {
    width: 100%;
    height: 100%;
    mask-image: linear-gradient(
      to right,
      transparent 7%,
      black 50%, 
      transparent 85%
    );
  }
`;


export const AboutMeContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  gap: 3rem;
` 

export const NameIconDiv = styled.div`
  display: flex;
  flex-direction: row;
  gap: 3rem;
`

export const AboutProjects = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2rem;
`

export const AboutTechnologies = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1.5rem;
`
