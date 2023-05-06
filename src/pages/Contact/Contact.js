// Pages
import Form from "../../components/Form/Form";

// Icons
import { BsFillTelephoneFill } from "react-icons/bs";
import { AiFillLinkedin } from "react-icons/ai";
import { BsGithub } from "react-icons/bs";

const Contact = () => {
  return (
    <div className="container main contact">
      <h1 className="title-contact">Contatos</h1>

      <main className="container contacts-content">
        <div className="container contact">
          <BsFillTelephoneFill className="icon-contact" />
          <p className="text-contact">(85) 98849-2584</p>
        </div>

        <div className="container contact">
          <a
            href="https://www.linkedin.com/in/renato-guimaraes-quirino/"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillLinkedin id="icon-linkedin" className="icon-contact" />
          </a>
          
          <a
            href="https://github.com/RenatoGuii"
            target="_blank"
            rel="noreferrer"
          >
            <BsGithub id="icon-github" className="icon-contact" />
          </a>
        </div>
      </main>

      <Form />
    </div>
  );
};

export default Contact;
