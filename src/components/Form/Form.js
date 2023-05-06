import { useState } from "react";
import emailjs from "@emailjs/browser";
import { AiOutlineMail } from "react-icons/ai";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  const sendEmail = (e) => {
    e.preventDefault();

    const templateParams = {
      from_name: name,
      message: message,
      email: email,
    };

    if (name === "" || email === "" || message === "") {
      alert("Preencha TODOS os campos!");
      return;
    } else if (!emailPattern.test(email)) {
      alert("SIGA a seguinte máscara de email: name@email.com");
    } else {
      const button = document.getElementById("button-form");
      button.disabled = true;

      emailjs
        .send(
          "service_nmhvbil",
          "template_bzq3o8l",
          templateParams,
          "vAtHTAvyg_KScUqU3"
        )
        .then(
          (response) => {
            console.log("EMAIL ENVIADO", response.status, response.text);
            setName("");
            setEmail("");
            setMessage("");
            alert("Email enviado com SUCESSO!");
            button.disabled = false;
          },
          (err) => {
            console.log("ERROR: ".err);
          }
        );
    }
  };

  return (
    <div className="container main form">
      <h1 className="title-form">Me mande um E-Mail :)</h1>
      <p className="text-form">
        <AiOutlineMail /> renatoguimaraesquirino@gmail.com
      </p>

      <form className="container form" onSubmit={sendEmail}>
        <input
          className="input-form"
          type="text"
          placeholder="Digite seu nome"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />

        <input
          className="input-form"
          type="text"
          placeholder="Digite seu email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />

        <textarea
          className="textarea-form"
          placeholder="Digite sua mensagem..."
          onChange={(e) => setMessage(e.target.value)}
          value={message}
        />

        <input
          id="button-form"
          className="button-form"
          type="submit"
          value="Enviar"
        />
      </form>
    </div>
  );
};

export default Form;
