// Icons
import { AiFillHtml5 } from "react-icons/ai"
import { DiCss3 } from "react-icons/di"
import { IoLogoJavascript } from "react-icons/io"
import { DiReact } from "react-icons/di"
import { BsFillBootstrapFill } from "react-icons/bs"
import { BsGit } from "react-icons/bs"
import { AiFillGithub } from "react-icons/ai"
import { DiSass } from "react-icons/di"

const Skill = () => {
  return (
    <div className="container main"> 
      <h1 className="title-skills">Habilidades</h1>
      <div className="container row skills">
        <div className="col-md-3 skill-item mx-3 my-3">
          <p>HTML5</p>
          <AiFillHtml5 className="icon-skill"/>
        </div>
        <div className="col-md-3 skill-item mx-3 my-3">
          <p>CSS3</p>
          <DiCss3 className="icon-skill"/>
        </div>
        <div className="col-md-3 skill-item mx-3 my-3">
          <p>JavaScript</p>
          <IoLogoJavascript className="icon-skill"/>
        </div>
        <div className="col-md-3 skill-item mx-3 my-3">
          <p>React.js</p>
          <DiReact className="icon-skill"/>
        </div>
        <div className="col-md-3 skill-item mx-3 my-3">
          <p>Bootstrap</p>
          <BsFillBootstrapFill className="icon-skill"/>
        </div>
        <div className="col-md-3 skill-item mx-3 my-3">
          <p>SASS</p>
          <DiSass className="icon-skill"/>
        </div>
        <div className="col-md-3 skill-item mx-3 my-3">
          <p>Git</p>
          <BsGit className="icon-skill"/>
        </div>
        <div className="col-md-3 skill-item mx-3 my-3">
          <p>Github</p>
          <AiFillGithub className="icon-skill"/>
        </div>
      </div>
    </div>
  )
}

export default Skill