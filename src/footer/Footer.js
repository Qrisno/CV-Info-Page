import "./Footer.css";
import fb from "../assets/fb.svg";
import insta from "../assets/insta.svg";

import git from "../assets/github.svg";
import twit from "../assets/twitter.svg";
export function Footer() {
  return (
    <div className="footer">
      <img src={fb} />
      <img src={insta} />
      <img src={git} />
      <img src={twit} />
    </div>
  );
}

export default Footer;
