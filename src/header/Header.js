import "./Header.css";
import profile from "../assets/profile.svg";
import mail from "../assets/mail.svg";
import link from "../assets/link.svg";
import { Button } from "../shared/button/Button";

export function Header() {
  return (
    <div className="header">
      <img src={profile} />

      <div className="titles">
        <h1>Laura Smith</h1>
        <h3>Front End Developer</h3>
        <p>website</p>
      </div>
      <Button text="Email" theme="email" icon={mail} />
      <Button text="LinkedIn" theme="linkedin" icon={link} />
    </div>
  );
}

export default Header;
