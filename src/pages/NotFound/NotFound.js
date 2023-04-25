import { Link } from "react-router-dom";

import { BsArrowReturnLeft } from "react-icons/bs";

const NotFound = () => {
  return (
    <div className="container main">
      <div className="notFoundText">
        <h2>ERROR 404</h2>
        <h1>Opa! Algo deu errado.</h1>
        <p>
          Paramos por aqui, clique abaixo para retornar ou use o menu de
          navegação.
        </p>
        <Link to={"/"}>
          <BsArrowReturnLeft className="returnButton" />
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
