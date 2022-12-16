import "./Header.css";
import profile from "../assets/profile.svg";

export function Header() {
  return (
    <div className="header">
      <img src={profile} />

      <div className="titles">
        <h1>Laura Smith</h1>
        <h3>Front End Developer</h3>
        <p>website</p>
      </div>
      <button>one</button>
      <button>two</button>
    </div>
  );
}

export default Header;
