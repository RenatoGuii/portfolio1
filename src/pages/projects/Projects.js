// Icons
import { AiFillHtml5 } from "react-icons/ai";
import { DiCss3 } from "react-icons/di";
import { IoLogoJavascript } from "react-icons/io";
import { DiReact } from "react-icons/di";
import { BsFillBootstrapFill } from "react-icons/bs";
import { DiSass } from "react-icons/di";
import { SiFirebase } from "react-icons/si";

// Images
import loopstudius from "../../assets/imgs/loopstudius.png";
import miniBlog from "../../assets/imgs/miniblog.png";
import ragnarok from "../../assets/imgs/ragnarok.png";
import flappybird from "../../assets/imgs/flappybird.png";
import card from "../../assets/imgs/card.png";
import tip from "../../assets/imgs/tip.png";

const Projects = () => {
  return (
    <div className="container main projects">
      <h1 className="title-project">Projetos</h1>

      <main className="row">
        <div className="col-sm-6 col-md-3 project-item my-3 mx-3">
          <img src={loopstudius} alt="" />
          <div className="iconsProject">
            <DiReact className="iconProject" />
            <BsFillBootstrapFill className="iconProject" />
          </div>
          <p className="textProject">Loopstudios</p>
          <div className="hover-info">
            <span>30/03/2023</span>
            <a
              href="https://loopstudius-landing-page.vercel.app/"
              target="_blank"
            >
              Visitar
            </a>
          </div>
        </div>

        <div className="col-sm-6 col-md-3 project-item my-3 mx-3">
          <img src={miniBlog} alt="" />
          <div className="iconsProject">
            <DiReact className="iconProject" />
            <SiFirebase className="iconProject" />
          </div>
          <p className="textProject">Mini Blog</p>
          <div className="hover-info">
            <span>15/02/2023</span>
            <a href="https://mini-blog-ten.vercel.app/" target="_blank">
              Visitar
            </a>
          </div>
        </div>

        <div className="col-sm-6 col-md-3 project-item my-3 mx-3">
          <img src={ragnarok} alt="" />
          <div className="iconsProject">
            <AiFillHtml5 className="iconProject" />
            <DiCss3 className="iconProject" />
            <IoLogoJavascript className="iconProject" />
          </div>
          <p className="textProject">Ragnarok</p>
          <div className="hover-info">
            <span>26/11/2022</span>
            <a href="https://renatoguii.github.io/gow_website/" target="_blank">
              Visitar
            </a>
          </div>
        </div>

        <div className="col-sm-6 col-md-3 project-item my-3 mx-3">
          <img src={flappybird} alt="" />
          <div className="iconsProject">
            <AiFillHtml5 className="iconProject" />
            <DiCss3 className="iconProject" />
            <IoLogoJavascript className="iconProject" />
          </div>
          <p className="textProject">Flappy Bird</p>
          <div className="hover-info">
            <span>04/10/2022</span>
            <a href="https://renatoguii.github.io/Flappy-Bird/" target="_blank">
              Visitar
            </a>
          </div>
        </div>

        <div className="col-sm-6 col-md-3 project-item my-3 mx-3">
          <img src={card} alt="" />
          <div className="iconsProject">
            <AiFillHtml5 className="iconProject" />
            <DiCss3 className="iconProject" />
            <IoLogoJavascript className="iconProject" />
          </div>
          <p className="textProject">Interactive Card</p>
          <div className="hover-info">
            <span>27/08/2022</span>
            <a
              href="https://renatoguii.github.io/Interactive-Card/"
              target="_blank"
            >
              Visitar
            </a>
          </div>
        </div>
        <div className="col-sm-6 col-md-3 project-item my-3 mx-3">
          <img src={tip} alt="" />
          <div className="iconsProject">
            <AiFillHtml5 className="iconProject" />
            <DiCss3 className="iconProject" />
            <IoLogoJavascript className="iconProject" />
          </div>
          <p className="textProject">Tip Calculator</p>
          <div className="hover-info">
            <span>22/07/2022</span>
            <a
              href="https://renatoguii.github.io/Tip-Calculator/"
              target="_blank"
            >
              Visitar
            </a>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Projects;
