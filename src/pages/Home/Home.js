// Images
import perfil from "../../assets/imgs/perfil.jpg";

// Icons
import { AiOutlineInstagram } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { BsGithub } from "react-icons/bs";

const Home = () => {
  return (
    <div className="container">
      <div className="titleCard">
        <h1 className="titleHome">renato.io</h1>
        <div className="borderBottonTitle"></div>
      </div>
      <main className="content">
        <div className="formatImage">
          <img src={perfil} alt="minha foto" />
        </div>
        <p className="textHome">
          Olá, meu nome é Renato Guimarães, tenho 19 anos, sou de Fortaleza-CE, e este é meu portfólio.
        </p>

        <p className="textHome">
          Sou um desenvolvedor front-end iniciante, desenvolvo páginas
          responsivas com uso de diversas tecnologias, sempre tentando seguir ao
          longo do meu aprendizado as melhores práticas de desenvolvimento web.
          Se sinta a vontade para explorar meus projetos e entrar em contato
          para quaisquer discussões.
        </p>
      </main>

      <div className="social">
        <div className="socialIcons">
          <a href="https://www.instagram.com/renatoo.gui/" target="_blank" rel="noreferrer">
            <AiOutlineInstagram className="icon instagram-icon" />
          </a>
          <a
            href="https://www.linkedin.com/in/renato-guimaraes-quirino/"
            target="_blank" rel="noreferrer" 
          >
            <AiFillLinkedin className="icon linkedin-icon" />
          </a>
          <a href="https://github.com/RenatoGuii" target="_blank" rel="noreferrer">
            <BsGithub className="icon github-icon" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
