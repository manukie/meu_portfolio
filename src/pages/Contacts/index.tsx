import GlobalStyle from "../../styles/GlobalStyles"
import { StyledTitle4, StyledTitle1, StyledTitlePower, StyledTitle3, StyledText2, StyledPhoneText, StyledEmailText } from "../../styles/Typography"
import { PhoneIconDiv, LinkedinIconDiv, EmailIconDiv, ContentDiv, ContactTextDiv, ContactCardDiv, StyledHeader, HeaderButtons, StyledFooter, AboutMeFooter, FooterText, FooterIcons, InstagramDiv, LinkedinDiv,  PageContent, ContactCard, GithubDiv } from "./styles"
import { FaWhatsapp } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { LinkedinButton, StyledButton5, StyledButton5Deactivated } from "../../styles/Buttons";
import { useNavigate } from "react-router-dom";
import { CiInstagram } from "react-icons/ci";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

export const Contacts = () => {
    
  const navigate = useNavigate();

  const goToProjects = () => {
    navigate("/projects");
  };

  const goToDashboard = () => {
    navigate("/");
  };

  const clickLinkedin = () => {
    const url = 'https://www.linkedin.com/in/joaoemanuelor/';
    window.open(url, '_blank');
  };

  const clickInstagram = () => {
    const url = 'https://www.instagram.com/jeliver_?igshid=OGQ5ZDc2ODk2ZA==';
    window.open(url, '_blank')
  };

  const clickGithub = () => {
    const url = 'https://github.com/manukie';
    window.open(url, '_blank')
  };

    return (
        <>
          <GlobalStyle />

          <StyledHeader>
            <StyledTitle3>João Emanuel</StyledTitle3>
            <HeaderButtons>
              <StyledButton5 onClick={goToDashboard}>Home</StyledButton5>
              <StyledButton5 onClick={goToProjects}>Projects</StyledButton5>
              <StyledButton5Deactivated>Contacts</StyledButton5Deactivated>
            </HeaderButtons>
          </StyledHeader>


           <PageContent>
            <ContactTextDiv>
              <StyledTitle1>Que tal interagir? <StyledTitlePower>Entre em contato </StyledTitlePower> 
              através das redes ao lado!</StyledTitle1>

            </ContactTextDiv>

            <ContactCardDiv>
              <ContactCard>
                <PhoneIconDiv>
                  <FaWhatsapp size={20}/>
                </PhoneIconDiv>
                <ContentDiv>
                  <StyledTitle4>Número de celular</StyledTitle4>
                  <StyledPhoneText>31 99902-3365</StyledPhoneText>
                </ContentDiv>
              </ContactCard>

              <ContactCard>
                <EmailIconDiv>
                  <MdOutlineMailOutline size={20}/>
                </EmailIconDiv>
                <ContentDiv>
                  <StyledTitle4>Email profissional</StyledTitle4>
                  <StyledEmailText>joaoemanuelor@gmail.com</StyledEmailText>
                </ContentDiv>
              </ContactCard>

              <ContactCard>
                <LinkedinIconDiv>
                  <CiLinkedin size={20}/>
                </LinkedinIconDiv>
                <ContentDiv>
                  <StyledTitle4>Meu Linkedin</StyledTitle4>
                  <LinkedinButton onClick={clickLinkedin}>Acessar</LinkedinButton>
                </ContentDiv>
              </ContactCard>
            </ContactCardDiv>
          </PageContent>

          <StyledFooter>
            <AboutMeFooter>
              <FooterText>
                <StyledTitle3>Muito obrigado por visitar!</StyledTitle3>
                <StyledText2>Me siga nas minha redes sociais para interagirmos!</StyledText2>
              </FooterText>
            </AboutMeFooter>
            <FooterIcons>
              <InstagramDiv onClick={clickInstagram}>
                <CiInstagram />
              </InstagramDiv>
              <LinkedinDiv onClick={clickLinkedin}>
                <FaLinkedinIn />
              </LinkedinDiv>
              <GithubDiv onClick={clickGithub}>
                <FaGithub />
              </GithubDiv>
             </FooterIcons>
          </StyledFooter>
        </>
    )
}