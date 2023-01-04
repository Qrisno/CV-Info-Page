import "./Header.css";

import mail from "../assets/mail.svg";
import link from "../assets/link.svg";
import { Button } from "../shared/button/Button";

export function Header() {
  return (
    <div className="header">
      <div className="titles">
        <h1>Laura Smith</h1>
        <h3>Front End Developer</h3>
        <p>website</p>
      </div>
      <div className="buttons">
        <Button className="email" text="Email" theme="email" icon={mail} />
        <Button text="LinkedIn" theme="linkedin" icon={link} />
      </div>

      <div className="textual-info">
        <h4>About</h4>
        <p>
          I am a frontend developer with a particular interest in making things
          simple and automating daily tasks. I try to keep up with security and
          best practices, and am always looking for new things to learn.
        </p>
      </div>

      <div className="textual-info">
        <h4>Interests</h4>
        <p>
          Food expert. Music scholar. Reader. Internet fanatic. Bacon buff.
          Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.
        </p>
      </div>
    </div>
  );
}

export default Header;
