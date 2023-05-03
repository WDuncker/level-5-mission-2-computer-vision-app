import Logo from "../src-assets/turnersCarsLogo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  return (
    <div>
      <div className={["header"]}>
        <div className={["header__left"]}>
          <div className={["header__left--logo"]}>
            <img src={Logo} alt="Logo" />
          </div>
        </div>
        <div className={["header__right"]}>
          <div className={["header__right--login"]}>
            <FontAwesomeIcon icon={faUser} />
            <p>Login or Register</p>
          </div>
          <div className={["header__right--phone"]}>
            <FontAwesomeIcon icon={faPhone} />
            <p>0800 887 637</p>
          </div>
          <div className={["header__right--findus"]}>
            <FontAwesomeIcon icon={faLocationDot} />
            <p>Find Us</p>
          </div>
        </div>
      </div>
    </div>
  );
}
