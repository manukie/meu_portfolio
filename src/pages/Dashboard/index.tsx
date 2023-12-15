import GlobalStyle from "../../styles/GlobalStyles"
import { StyledTitle1, StyledTitlePower, StyledHeadline, StyledTitle3,  StyledText2 } from "../../styles/Typography"
import { StyledHeader, PageContent, AboutMeSection, BackgroundImageSection, AboutMeContent, NameIconDiv, AboutProjects, AboutTechnologies, HeaderButtons, StyledFooter, AboutMeFooter, FooterText, FooterIcons, InstagramDiv, LinkedinDiv, GithubDiv } from "./styles"
import { FaGithub } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { BiLogoTypescript } from "react-icons/bi";
import { DiNodejs } from "react-icons/di";
import { FaReact } from "react-icons/fa";
import { StyledButton1, StyledButton4, StyledButton5, StyledButton5Deactivated } from "../../styles/Buttons";
import { useNavigate } from "react-router-dom";
import { CiInstagram } from "react-icons/ci";
import { FaLinkedinIn } from "react-icons/fa";

export const Dashboard = () => {

  const navigate = useNavigate();

  const goToProjects = () => {
    navigate("/projects");
  };

  const goToContact = () => {
    navigate("/contact");
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

  const clickRepos = () => {
    const url = 'https://github.com/manukie?tab=repositories';
    window.open(url, '_blank')
  };

    return (
        <>
          <GlobalStyle />

          <StyledHeader>
            <StyledTitle3>João Emanuel</StyledTitle3>
            <HeaderButtons>
              <StyledButton5Deactivated>Home</StyledButton5Deactivated>
              <StyledButton5 onClick={goToProjects}>Projects</StyledButton5>
              <StyledButton5 onClick={goToContact}>Contacts</StyledButton5>
            </HeaderButtons>
          </StyledHeader>

          <PageContent>
            <AboutMeSection>
              <AboutMeContent>

                <NameIconDiv>
                  <StyledText2>Hello, my name is João Emanuel</StyledText2>
                </NameIconDiv>

                <StyledTitle1>I <StyledTitlePower>love</StyledTitlePower> creating and 
                <StyledTitlePower> developing</StyledTitlePower> projects</StyledTitle1>

                <StyledHeadline>Discover here in this environment, created especially for you, 
                  all my projects and technologies</StyledHeadline>

                <AboutProjects>
                  <StyledButton1 onClick={clickRepos}>See Projects</StyledButton1>
                  <StyledButton4 onClick={clickGithub}><FaGithub /></StyledButton4>
                </AboutProjects>

                <AboutTechnologies>
                  <FaHtml5 size={56}/>
                  <FaCss3Alt size={56}/>
                  <IoLogoJavascript size={56}/>
                  <BiLogoTypescript size={56}/>
                  <DiNodejs size={56}/>
                  <FaReact size={56}/>
                </AboutTechnologies> 

              </AboutMeContent>
            </AboutMeSection>

            <BackgroundImageSection>
              <StyledTitle1>IMAGEM AQUI</StyledTitle1>
            </BackgroundImageSection>
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