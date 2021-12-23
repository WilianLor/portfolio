import {
  Page,
  ProfileContainer,
  ExperienceContainer,
  ContactButton,
  ProfileContent,
  SocialMedias,
  TextContent,
  ExperienceBackground,
  ExperienceContent,
  ExperienceSkills,
  ExperienceYears,
  ProjectContainer,
  ProjectContent,
  Projects,
  ProjectsTitle,
} from "../styles/styles";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { SiTsnode, SiReact, SiNextdotjs } from "react-icons/si";
import Head from "next/head";

import { BsArrowRightShort } from "react-icons/bs";

import { Skill } from "../components/Skill";
import { Project } from "../components/Project";

const Home = () => {
  return (
    <Page>
      <Head>
        <title>Wilian Lorencetto</title>
      </Head>
      <ProfileContainer id="home">
        <ProfileContent>
          <TextContent>
            <h1>Wilian Lorencetto</h1>
            <p>
              17 anos, Desenvolvedor full-stack Javascript, Borborema, São
              Paulo, Brasil
            </p>
            <ContactButton
              href="https://wa.me/+55016997128962"
              target="_blank"
              rel="noopener noreferrer"
            >
              Mande-me uma mensagem!
            </ContactButton>
          </TextContent>
          <SocialMedias>
            <a
              className="socialMedia"
              href="https://github.com/WilianLor"
              target="_blank"
            >
              <BsGithub color="#fff" size="3.5rem" />
            </a>
            <a
              className="socialMedia"
              href="https://www.linkedin.com/in/wilian-lorencetto-62a4031a7/"
              target="_blank"
            >
              <BsLinkedin color="#fff" size="3.5rem" />
            </a>
            <a
              className="socialMedia"
              href="https://app.rocketseat.com.br/me/wilianlorencetto"
              target="_blank"
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 35 35"
                color="#fff"
                height="3.5rem"
                width="3.5rem"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g>
                  <path d="M29.2636 0.716062L24.4739 0.00753861C24.3322 -0.0208023 24.1905 0.0358761 24.1339 0.092558L22.0933 2.7566C21.9516 2.92665 21.9233 3.15338 21.9799 3.35177C22.0366 3.55015 21.8666 3.7202 21.6682 3.69186L19.9961 3.32342C19.741 3.26674 19.4576 3.35177 19.2876 3.5785L12.6558 12.0808C12.5424 12.2508 12.3157 12.3075 12.1173 12.2225L9.59495 11.0888C9.36822 10.9755 9.11316 11.0038 8.91477 11.1455L7.63943 12.0241C7.44104 12.1658 7.15763 12.1941 6.9309 12.0808L6.3074 11.769C5.91063 11.5706 5.42884 11.7974 5.31547 12.2225L4.86201 14.2347C4.74865 14.7165 4.94704 15.1983 5.37215 15.4534L6.33574 16.0485L9.42491 17.9474L10.927 18.8826C11.3521 19.1377 11.8906 19.081 12.259 18.7692L14.7813 16.5586C14.9797 16.3886 15.2915 16.3319 15.5182 16.4736L16.2834 16.8704C16.5385 17.0121 16.8502 16.9554 17.0486 16.757L18.324 15.5667C18.5224 15.3683 18.8341 15.34 19.0608 15.4534L20.9597 16.3319C21.2431 16.4736 21.5832 16.3886 21.7816 16.1335L22.6601 14.9999L29.3202 6.46927C29.632 6.0725 29.4336 5.47734 28.9235 5.36398L27.4498 5.02388C27.138 4.9672 26.9963 4.57043 27.223 4.3437L29.5186 1.48126C29.7454 1.14117 29.6037 0.772744 29.2636 0.716062Z"></path>
                  <path d="M7.29885 17.8907C7.15715 17.8056 7.01544 17.9473 7.07212 18.089L7.78065 19.9595C7.83733 20.1012 7.83733 20.243 7.80899 20.3847L7.18549 22.822C7.15714 22.992 7.21383 23.1621 7.32719 23.2471L9.11267 24.6358C9.28272 24.7492 9.50944 24.7492 9.65115 24.6075L11.5216 22.9637C11.635 22.8787 11.7767 22.822 11.8901 22.7936L14.0157 22.5669C14.1574 22.5386 14.214 22.3402 14.0723 22.2552L7.29885 17.8907Z"></path>
                  <path d="M6.67557 24.1824C6.56221 24.0974 6.39216 24.0691 6.25046 24.1257L4.74839 24.8626C4.66337 24.8909 4.60668 24.976 4.55 25.061L1.34748 32.9681C1.34748 32.9965 1.34748 32.9964 1.34748 33.0248C1.37582 33.0531 1.40416 33.0815 1.46084 33.0815L2.1977 32.7981C2.22605 32.7981 2.25438 32.7981 2.28272 32.7981C2.31106 32.8264 2.33941 32.8831 2.31107 32.9114L0.015448 36.6808C-0.0412339 36.7658 0.0721325 36.8508 0.128814 36.7658L8.43271 28.4336C8.51773 28.3485 8.54608 28.2635 8.57442 28.1502L8.74446 25.9962C8.74446 25.8545 8.68778 25.7412 8.60276 25.6561L6.67557 24.1824Z"></path>
                </g>
              </svg>
            </a>
          </SocialMedias>
        </ProfileContent>
      </ProfileContainer>
      <ExperienceContainer id="experiences">
        <ExperienceBackground>
          <ExperienceContent>
            <ExperienceYears>
              <span>2+</span> Anos de experiência.
            </ExperienceYears>
            <ExperienceSkills>
              <p>
                Técnico em Desenvolvimento de Sistemas - ETEC, Novo
                Horizonte-SP, desenvolvedor web mobile e backend.
              </p>
              <section>
                <Skill
                  logo={SiReact}
                  title="ReactJs"
                  discoveryLink="https://reactjs.org/"
                />
                <Skill
                  logo={SiNextdotjs}
                  title="NextJs"
                  discoveryLink="https://nextjs.org/"
                />
                <Skill
                  logo={SiReact}
                  title="React-Native"
                  discoveryLink="https://reactnative.dev/"
                />
                <Skill
                  logo={SiTsnode}
                  title="NodeJs"
                  discoveryLink="https://nodejs.org/en/"
                />
              </section>
            </ExperienceSkills>
          </ExperienceContent>
        </ExperienceBackground>
      </ExperienceContainer>
      <ProjectContainer id="projects">
        <ProjectContent>
          <ProjectsTitle>
            <h2>Principais projetos</h2>
            <a
              href="https://github.com/WilianLor?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
            >
              Todos os repositórios <BsArrowRightShort size="2rem" />
            </a>
          </ProjectsTitle>
          <Projects>
            <Project
              name="World Soccer Manager"
              description="Comando seu time como um treinador ou como um presidente."
              frontend="https://github.com/WilianLor/worldsocceronline-front"
              backend="https://github.com/WilianLor/worldsocceronline-back"
              tags={["ReactJs", "Typescript", "MongoDB", "ExpressJs", "NodeJs"]}
            />
            <Project
              name="ChatApp"
              description="Chat web inspirado no whatsapp."
              frontend="https://github.com/WilianLor/chatapp-front"
              backend="https://github.com/WilianLor/chatapp-back"
              tags={[
                "ReactJs",
                "Typescript",
                "MongoDB",
                "ExpressJs",
                "NodeJs",
                "Socket.io",
              ]}
            />
            <Project
              name="Poupp"
              description="Controle suas movimentações e melhore sua saúde financeira."
              frontend="https://github.com/gustavo-bueno/front-poupp"
              backend="https://github.com/WilianLor/back-poupp"
              tags={[
                "React-Native",
                "Typescript",
                "MongoDB",
                "ExpressJs",
                "NodeJs",
              ]}
            />
          </Projects>
        </ProjectContent>
      </ProjectContainer>
    </Page>
  );
};

export default Home;
