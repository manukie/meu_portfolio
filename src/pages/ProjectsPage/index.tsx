import GlobalStyle from "../../styles/GlobalStyles"
import { StyledText1, StyledTitle1, StyledHeadlinePower, StyledText2, StyledInfoText, StyledTitle3, StyledHeadline2, StyledTitleAlter, StyledTitlePAlter } from "../../styles/Typography"
import { InfoProjectsDiv, ProjectsCardDiv, ProjectInfoBox, ProjectAccessBox, ProjectCard, ProjectRedirectBox, StyledHeader, HeaderButtons, StyledFooter, AboutMeFooter, FooterText, FooterIcons, InstagramDiv, LinkedinDiv, GithubDiv, PageContent, ProjectsDiv  } from "./styles"
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

    const clickKenzie = () => {
      const url = 'https://kenzie.com.br/quem-somos';
      window.open(url, '_blank')
    };

    const clickSorceryFrontGithub = () => {
      const url = 'https://github.com/manukie/Sorcery-Contacts-Front-';
      window.open(url, '_blank')
    };

    const clickSorceryFrontPage = () => {
      const url = 'https://sorcery-contacts-front-d5crkdwbo-manukie.vercel.app/';
      window.open(url, '_blank')
    };

    const clickSorceryBackGithub = () => {
      const url = 'https://github.com/manukie/Sorcery-Contacts-Back-';
      window.open(url, '_blank')
    };

    const clickNuKenzieGithub = () => {
      const url = 'https://github.com/manukie/NuKenzie';
      window.open(url, '_blank')
    };

    const clickNuKenziePage = () => {
      const url = 'https://nu-kenzie-1za2t2yf8-manukie.vercel.app/';
      window.open(url, '_blank')
    };

    const clickKenzieBusterGithub = () => {
      const url = 'https://github.com/manukie/Kenzie-Buster';
      window.open(url, '_blank')
    };

    const clickOpenMusicPage = () => {
      const url = 'https://open-music-aa7td3ukq-manukie.vercel.app/';
      window.open(url, '_blank')
    };

    const clickOpenMusicGithub = () => {
      const url = 'https://github.com/manukie/OpenMusic';
      window.open(url, '_blank')
    };

    const clickPetKareGithub = () => {
      const url = 'https://github.com/manukie/Pet-Kare';
      window.open(url, '_blank')
    };

    const clickControlFinancePage = () => {
      const url = 'https://control-finance-kshz30riu-manukie.vercel.app/';
      window.open(url, '_blank')
    };

    const clickControlFinanceGithub = () => {
      const url = 'https://github.com/manukie/Control-Finance';
      window.open(url, '_blank')
    };

    const clickCoursesApiGithub = () => {
      const url = 'https://github.com/manukie/CoursesAPI';
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
                <StyledTitle1>Meus projetos</StyledTitle1>
                <StyledHeadline2>Projetos criados na <StyledHeadlinePower onClick={clickKenzie}>Kenzie Academy</StyledHeadlinePower></StyledHeadline2>
              </InfoProjectsDiv>

              <ProjectsCardDiv>

                  <ProjectCard>
                    <StyledTitleAlter>Sorcery Contacts <StyledTitlePAlter>(FRONT)</StyledTitlePAlter></StyledTitleAlter>
                    <ProjectInfoBox>
                      <StyledText2>Linguagens:</StyledText2>
                      <StyledInfoText>Typescript</StyledInfoText>
                    </ProjectInfoBox>
                    <StyledText2>Um site em forma de rede social em que você pode se registrar, logar e salvar seus 
                      contatos. Esse foi meu primeiro projeto fullstack, então o foco ficou muito mais em fazer 
                      questão de que tudo funcionasse do que realmente criar uma aplicação muito complexa.</StyledText2>
                    <ProjectAccessBox>
                      <ProjectRedirectBox onClick={clickSorceryFrontGithub}>
                        <FaGithub size={22}/>
                        <StyledText1>Github Code</StyledText1>
                      </ProjectRedirectBox>
                      <ProjectRedirectBox onClick={clickSorceryFrontPage}>
                        <IoArrowRedoSharp size={22}/>
                        <StyledText1>Aplicação</StyledText1>
                      </ProjectRedirectBox>
                    </ProjectAccessBox>
                  </ProjectCard>

                  <ProjectCard>
                    <StyledTitleAlter>Sorcery Contacts <StyledTitlePAlter>(BACK)</StyledTitlePAlter></StyledTitleAlter>
                    <ProjectInfoBox>
                      <StyledText2>Linguagens:</StyledText2>
                      <StyledInfoText>Typescript</StyledInfoText>
                    </ProjectInfoBox>
                    <StyledText2>O back-end que eu criei pro para meu projeto fullstack, Sorcery Contacts, que 
                      funciona como uma rede social simples onde você pode se registrar, logar, salvar 
                      contatos e tudo mais.</StyledText2>
                    <ProjectAccessBox>
                      <ProjectRedirectBox onClick={clickSorceryBackGithub}>
                        <FaGithub size={22}/>
                        <StyledText1>Github Code</StyledText1>
                      </ProjectRedirectBox>
                    </ProjectAccessBox>
                  </ProjectCard>

                  <ProjectCard>
                    <StyledTitleAlter>NuKenzie</StyledTitleAlter>
                    <ProjectInfoBox>
                      <StyledText2>Linguagens:</StyledText2>
                      <StyledInfoText>Javascript</StyledInfoText>
                    </ProjectInfoBox>
                    <StyledText2>NuKenzie é uma aplicação desenvolvida em React. Ela foi criada para ser 
                      uma aplicação para gerenciamento de gastos. Ela registra tudo que o usuário insere,
                      efetuando um cálculo automático com os valores inseridos para registrar quanto dinheiro está disponível.</StyledText2>
                    <ProjectAccessBox>
                      <ProjectRedirectBox onClick={clickNuKenzieGithub}>
                        <FaGithub size={22}/>
                        <StyledText1>Github Code</StyledText1>
                      </ProjectRedirectBox>
                      <ProjectRedirectBox onClick={clickNuKenziePage}>
                        <IoArrowRedoSharp size={22}/>
                        <StyledText1>Aplicação</StyledText1>
                      </ProjectRedirectBox>
                    </ProjectAccessBox>
                  </ProjectCard>

                  <ProjectCard>
                    <StyledTitleAlter>Kenzie Buster</StyledTitleAlter>
                    <ProjectInfoBox>
                      <StyledText2>Linguagens:</StyledText2>
                      <StyledInfoText>Python</StyledInfoText>
                    </ProjectInfoBox>
                    <StyledText2>Nesse projeto eu criei uma api para gerenciar usuários, filmes e 
                      compras, incluindo autenticação e permissões de rotas para diferentes tipos de 
                      usuário.</StyledText2>
                    <ProjectAccessBox>
                      <ProjectRedirectBox onClick={clickKenzieBusterGithub}>
                        <FaGithub size={22}/>
                        <StyledText1>Github Code</StyledText1>
                      </ProjectRedirectBox>
                    </ProjectAccessBox>
                  </ProjectCard>

                  <ProjectCard>
                    <StyledTitleAlter>Open Music</StyledTitleAlter>
                    <ProjectInfoBox>
                      <StyledText2>Linguagens:</StyledText2>
                      <StyledInfoText>JS</StyledInfoText>
                      <StyledInfoText>CSS</StyledInfoText>
                      <StyledInfoText>HTML</StyledInfoText>
                    </ProjectInfoBox>
                    <StyledText2>O Open Music é um projeto que simula uma aplicação de venda de discos, 
                      em que o usuário pode filtrar por categoria musical e preço máximo dos produtos, 
                      assim podendo buscar os itens que prioriza. Além disso, o usuário pode escolher 
                      entre um modo claro e um modo escuro para o site.
                    </StyledText2>
                    <ProjectAccessBox>
                      <ProjectRedirectBox onClick={clickOpenMusicGithub}>
                        <FaGithub size={22}/>
                        <StyledText1>Github Code</StyledText1>
                      </ProjectRedirectBox>
                      <ProjectRedirectBox onClick={clickOpenMusicPage}>
                        <IoArrowRedoSharp size={22}/>
                        <StyledText1>Aplicação</StyledText1>
                      </ProjectRedirectBox>
                    </ProjectAccessBox>
                  </ProjectCard>

                  <ProjectCard>
                    <StyledTitleAlter>Pet Kare</StyledTitleAlter>
                    <ProjectInfoBox>
                      <StyledText2>Linguagens:</StyledText2>
                      <StyledInfoText>Python</StyledInfoText>
                    </ProjectInfoBox>
                    <StyledText2>Nessa aplicação eu criei uma api para um petshop fictício, que tem o 
                      objetivo de facilitar e aprimorar o controle e organização dos dados dos animais 
                      e a sua alta gama de clientes. 
                    </StyledText2>
                    <ProjectAccessBox>
                      <ProjectRedirectBox onClick={clickPetKareGithub}>
                        <FaGithub size={22}/>
                        <StyledText1>Github Code</StyledText1>
                      </ProjectRedirectBox>
                    </ProjectAccessBox>
                  </ProjectCard>

                  <ProjectCard>
                    <StyledTitleAlter>Control Finance</StyledTitleAlter>
                    <ProjectInfoBox>
                      <StyledText2>Linguagens:</StyledText2>
                      <StyledInfoText>JS</StyledInfoText>
                      <StyledInfoText>CSS</StyledInfoText>
                      <StyledInfoText>HTML</StyledInfoText>
                    </ProjectInfoBox>
                    <StyledText2>Control Finance é uma aplicação feita para controle de gastos financeiros.
                      Nela, o usuário poderá inserir um valor por meio de um campo de entrada (input), 
                      definir seu tipo por um botão (entrada ou saída) e cadastrar a informação no sistema.
                    </StyledText2>
                    <ProjectAccessBox>
                      <ProjectRedirectBox onClick={clickControlFinanceGithub}>
                        <FaGithub size={22}/>
                        <StyledText1>Github Code</StyledText1>
                      </ProjectRedirectBox>
                      <ProjectRedirectBox onClick={clickControlFinancePage}>
                        <IoArrowRedoSharp size={22}/>
                        <StyledText1>Aplicação</StyledText1>
                      </ProjectRedirectBox>
                    </ProjectAccessBox>
                  </ProjectCard>

                  <ProjectCard>
                    <StyledTitleAlter>Courses API</StyledTitleAlter>
                    <ProjectInfoBox>
                      <StyledText2>Linguagens:</StyledText2>
                      <StyledInfoText>Typescript</StyledInfoText>
                    </ProjectInfoBox>
                    <StyledText2>Essa é uma API que faz o controle de usuários e cursos em que esses 
                      usuários serão matriculados. Essa API também tem um controle de acessos, onde 
                      alguns recursos podem ser acessados apenas por usuários que possuem certas 
                      permissões.
                    </StyledText2>
                    <ProjectAccessBox>
                      <ProjectRedirectBox onClick={clickCoursesApiGithub}>
                        <FaGithub size={22}/>
                        <StyledText1>Github Code</StyledText1>
                      </ProjectRedirectBox>
                    </ProjectAccessBox>
                  </ProjectCard>

                </ProjectsCardDiv>
              </ProjectsDiv>
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