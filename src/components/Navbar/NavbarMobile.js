import { Link } from "react-router-dom";

// Icons
import { AiOutlineHome } from "react-icons/ai";
import { GiSkills } from "react-icons/gi";
import { AiFillProject } from "react-icons/ai";
import { MdPermContactCalendar } from "react-icons/md";

const NavbarMobile = () => {
  return (
    <div className="d-flex flex-column flex-shrink-0">
      <ul className="nav nav-pills nav-flush flex-column mb-auto text-center">
        <Link to={"/"} id="navLink-home" className="nav-link py-3 border-bottom border-top">
          <li className="nav-item mobile home">
            <AiOutlineHome className="iconNavMobile" />
          </li>
        </Link>

        <Link to={"/skills"} className="nav-link py-3 border-bottom border-top">
          <li className="nav-item mobile">
            <GiSkills className="iconNavMobile" />
          </li>
        </Link>

        <Link
          to={"/projects"}
          className="nav-link py-3 border-bottom border-top"
        >
          <li className="nav-item mobile">
            <AiFillProject className="iconNavMobile" />
          </li>
        </Link>
        <Link
          to={"/contact"}
          className="nav-link py-3 border-bottom border-top"
        >
          <li className="nav-item mobile">
            <MdPermContactCalendar className="iconNavMobile" />
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default NavbarMobile;
