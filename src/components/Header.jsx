import "./header.scss";
import github from "../img/GitHub_Logo_White.png";

const Header = () => {
  return (
    <div className="header">
      <div className="header-left">
        <a href="https://github.com/abdurrahmankucuk90" target={"_blank"}>
          <img className="githubImg" src={github} alt="github link" />
        </a>
      </div>
      <div className="header-right">
        <a href="">My Page</a>
      </div>
    </div>
  );
};

export default Header;
