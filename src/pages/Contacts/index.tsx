import GlobalStyle from "../../styles/GlobalStyles"
import { StyledText1, StyledTitle4, StyledTitle1, StyledTitlePower, StyledTitle3, StyledText2, StyledText3, StyledHeadline } from "../../styles/Typography"
import { PhoneIconDiv, LinkedinIconDiv, EmailIconDiv, ContentDiv, ContactTextDiv, ContactCardDiv, StyledHeader, HeaderButtons, StyledFooter, AboutMeFooter, FooterText, FooterIcons, InstagramDiv, LinkedinDiv,  PageContent, ContactCard, GithubDiv } from "./styles"
import { FaWhatsapp } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { StyledButton5, StyledButton5Deactivated } from "../../styles/Buttons";
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
              <StyledTitle1>Let's set up a conversation and <StyledTitlePower>develop our creativity</StyledTitlePower> together?</StyledTitle1>
              <StyledText1>Advertise your brand organically within Dribbble's design inspiration feed.</StyledText1>
            </ContactTextDiv>

            <ContactCardDiv>
              <ContactCard>
                <PhoneIconDiv>
                  <FaWhatsapp size={20}/>
                </PhoneIconDiv>
                <ContentDiv>
                  <StyledTitle4>Meu Celular</StyledTitle4>
                  <StyledText3>Meu celular para contato.</StyledText3>
                  <StyledHeadline>Entrar em contato</StyledHeadline>
                </ContentDiv>
              </ContactCard>

              <ContactCard>
                <EmailIconDiv>
                  <MdOutlineMailOutline size={20}/>
                </EmailIconDiv>
                <ContentDiv>
                  <StyledTitle4>Meu E-Mail</StyledTitle4>
                  <StyledText3>Meu E-Mail para contato.</StyledText3>
                  <StyledHeadline>Entrar em contato</StyledHeadline>
                </ContentDiv>
              </ContactCard>

              <ContactCard>
                <LinkedinIconDiv>
                  <CiLinkedin size={20}/>
                </LinkedinIconDiv>
                <ContentDiv>
                  <StyledTitle4>Meu Linkedin</StyledTitle4>
                  <StyledText3>Minha rede profissional.</StyledText3>
                  <StyledHeadline onClick={clickLinkedin}>Entrar em contato</StyledHeadline>
                </ContentDiv>
              </ContactCard>
            </ContactCardDiv>
          </PageContent>

          <StyledFooter>
            <AboutMeFooter>
              <StyledTitle1>FOTO MINHA</StyledTitle1>
              <FooterText>
                <StyledTitle3>Thank you!</StyledTitle3>
                <StyledText2>Follow me on my social networks and let's talk</StyledText2>
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