import styled from "styled-components";

export const StyledHeader = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  background-color: var(--color-gray-600);
  height: 10vh;

  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
    gap: 3rem;
    padding: 3rem;
  }
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
  height: 14vh;
  background-color: var(--color-gray-600);

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: auto;
    gap: 3rem;
    padding: 3rem;
  }
`

export const AboutMeFooter = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 4.5rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
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
  height: 76vh;
  background-color: var(--color-gray-500);
  gap: 7rem;

  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
    align-items: center;
    justify-content: center;
    gap: 4rem;
    padding: 2rem;
  }
`;

export const AboutMeSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  margin-left: 2rem;
  margin-right: 2rem;
  width: 60%;
  text-align: center;

  @media (max-width: 768px) {
    align-items: center;
    justify-content: center;
    margin-left: 2rem;
  }
`;

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

  @media (max-width: 768px) {
    height: 0; 
    img {
      display: none;
    }
  }
}
`;


export const AboutMeContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  gap: 3rem;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;

  @media (max-width: 768px) {
    justify-content: center;
    align-items: center;
    gap: 4rem;
  }
` 

export const NameIconDiv = styled.div`
  display: flex;
  flex-direction: row;
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
