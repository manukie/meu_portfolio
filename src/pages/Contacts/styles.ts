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
  justify-content: space-around;
  align-items: center;
  height: 45rem;
  background-color: var(--color-gray-500);
`

export const ContactTextDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  width: 40%;
  gap: 3rem;
`

export const ContactCardDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start; 
  gap: 5.5rem;
`

export const ContactCard = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: start;
  gap: 2rem;
`;

export const PhoneIconDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--color-secondary);
  color: var(--color-gray-100);
  width: 6rem;
  height: 6rem;
  border-radius: 1rem;
`

export const EmailIconDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--color-instagram);
  color: var(--color-gray-100);
  width: 6rem;
  height: 6rem;
  border-radius: 1rem;
`

export const LinkedinIconDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--color-linkedin);
  color: var(--color-gray-100);
  width: 6rem;
  height: 6rem;
  border-radius: 1rem;
`

export const ContentDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  gap: 1.3rem;
`