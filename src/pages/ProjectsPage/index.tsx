import GlobalStyle from "../../styles/GlobalStyles"
import { StyledText1, StyledTitle1, StyledHeadline, StyledHeadlinePower, StyledText2, StyledInfoText, StyledTitle3 } from "../../styles/Typography"
import { InfoProjectsDiv, ProjectsCardDiv, ProjectInfoBox, ProjectAccessBox, ProjectCard, ProjectRedirectBox, StyledHeader, HeaderButtons, StyledFooter, AboutMeFooter, FooterText, FooterIcons, InstagramDiv, LinkedinDiv, GithubDiv, PageContent, ProjectsDiv } from "./styles"
import { FaGithub } from "react-icons/fa";
import { IoArrowRedoSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { StyledButton5, StyledButton5Deactivated } from "../../styles/Buttons";
import { CiInstagram } from "react-icons/ci";
import { FaLinkedinIn } from "react-icons/fa";


export const Projects = () => {

    const navigate = useNavigate();

    const goToDashboard = () => {
      navigate("/");
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
  

    return (
        <>
          <GlobalStyle />

          <StyledHeader>
            <StyledTitle3>João Emanuel</StyledTitle3>
            <HeaderButtons>
              <StyledButton5 onClick={goToDashboard}>Home</StyledButton5>
              <StyledButton5Deactivated>Projects</StyledButton5Deactivated>
              <StyledButton5 onClick={goToContact}>Contacts</StyledButton5>
            </HeaderButtons>
          </StyledHeader>

          <PageContent>
            <ProjectsDiv>

              <InfoProjectsDiv>
                <StyledTitle1>My Projects</StyledTitle1>
                <StyledHeadline>Projects created at <StyledHeadlinePower>Kenzie Academy</StyledHeadlinePower></StyledHeadline>
              </InfoProjectsDiv>

              <ProjectsCardDiv>

                  <ProjectCard>
                    <StyledTitle1>Placeholder</StyledTitle1>
                    <ProjectInfoBox>
                      <StyledText2>Linguagens:</StyledText2>
                      <StyledInfoText>Teste</StyledInfoText>
                    </ProjectInfoBox>
                    <StyledText2>Descrição do projeto contendo as informações sobre finalidade da aplicação e como está organizado o repositório...</StyledText2>
                    <ProjectAccessBox>
                      <ProjectRedirectBox>
                        <FaGithub size={22}/>
                        <StyledText1>Github Code</StyledText1>
                      </ProjectRedirectBox>
                      <ProjectRedirectBox>
                        <IoArrowRedoSharp size={22}/>
                        <StyledText1>Aplicação</StyledText1>
                      </ProjectRedirectBox>
                    </ProjectAccessBox>
                  </ProjectCard>

                  <ProjectCard>
                    <StyledTitle1>Placeholder</StyledTitle1>
                    <ProjectInfoBox>
                      <StyledText2>Linguagens:</StyledText2>
                      <StyledInfoText>Teste</StyledInfoText>
                    </ProjectInfoBox>
                    <StyledText2>Descrição do projeto contendo as informações sobre finalidade da aplicação e como está organizado o repositório...</StyledText2>
                    <ProjectAccessBox>
                      <ProjectRedirectBox>
                        <FaGithub size={22}/>
                        <StyledText1>Github Code</StyledText1>
                      </ProjectRedirectBox>
                      <ProjectRedirectBox>
                        <IoArrowRedoSharp size={22}/>
                        <StyledText1>Aplicação</StyledText1>
                      </ProjectRedirectBox>
                    </ProjectAccessBox>
                  </ProjectCard>

                  <ProjectCard>
                    <StyledTitle1>Placeholder</StyledTitle1>
                    <ProjectInfoBox>
                      <StyledText2>Linguagens:</StyledText2>
                      <StyledInfoText>Teste</StyledInfoText>
                    </ProjectInfoBox>
                    <StyledText2>Descrição do projeto contendo as informações sobre finalidade da aplicação e como está organizado o repositório...</StyledText2>
                    <ProjectAccessBox>
                      <ProjectRedirectBox>
                        <FaGithub size={22}/>
                        <StyledText1>Github Code</StyledText1>
                      </ProjectRedirectBox>
                      <ProjectRedirectBox>
                        <IoArrowRedoSharp size={22}/>
                        <StyledText1>Aplicação</StyledText1>
                      </ProjectRedirectBox>
                    </ProjectAccessBox>
                  </ProjectCard>

                  <ProjectCard>
                    <StyledTitle1>Placeholder</StyledTitle1>
                    <ProjectInfoBox>
                      <StyledText2>Linguagens:</StyledText2>
                      <StyledInfoText>Teste</StyledInfoText>
                    </ProjectInfoBox>
                    <StyledText2>Descrição do projeto contendo as informações sobre finalidade da aplicação e como está organizado o repositório...</StyledText2>
                    <ProjectAccessBox>
                      <ProjectRedirectBox>
                        <FaGithub size={22}/>
                        <StyledText1>Github Code</StyledText1>
                      </ProjectRedirectBox>
                      <ProjectRedirectBox>
                        <IoArrowRedoSharp size={22}/>
                        <StyledText1>Aplicação</StyledText1>
                      </ProjectRedirectBox>
                    </ProjectAccessBox>
                  </ProjectCard>

                </ProjectsCardDiv>
              </ProjectsDiv>
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