import "./Main-info.css";
import { Footer } from "../footer/Footer";
import { Header } from "../header/Header";
import profile from "../assets/profile.svg";
export function MainInfo() {
  return (
    <div className="container">
      <img className="profile" src={profile} />
      <Header></Header>
      <Footer></Footer>
    </div>
  );
}

export default MainInfo;
