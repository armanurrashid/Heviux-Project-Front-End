import { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../../images/heviux.png";
import "./Header.css";

class Header extends Component {
  state = { clicked: false, activeLink: "Home" };

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  handleLinkClick = (link) => {
    this.setState({ activeLink: link, clicked: false });
  };

  render() {
    return (
      <nav className="header">
        <img src={logo} alt="" style={{ width: "130px", height: "auto" }} />
        <div>
          <ul id="navbar" className={this.state.clicked ? "active" : ""}>
            <li>
              <Link
                to="/"
                className={`link ${this.state.activeLink === "Home" ? "active" : ""}`}
                onClick={() => this.handleLinkClick("Home")}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/shop"
                className={`link ${this.state.activeLink === "Shop" ? "active" : ""}`}
                onClick={() => this.handleLinkClick("Shop")}
              >
                Shop
              </Link>
            </li>
            <li>
              <Link
                to="/men"
                className={`link ${this.state.activeLink === "Men" ? "active" : ""}`}
                onClick={() => this.handleLinkClick("Men")}
              >
                Men
              </Link>
            </li>
            <li>
              <Link
                to="/women"
                className={`link ${this.state.activeLink === "Women" ? "active" : ""}`}
                onClick={() => this.handleLinkClick("Women")}
              >
                Women
              </Link>
            </li>
            <li>
              <Link
                to="/kids"
                className={`link ${this.state.activeLink === "Kids" ? "active" : ""}`}
                onClick={() => this.handleLinkClick("Kids")}
              >
                Kids
              </Link>
            </li>
          </ul>
        </div>
        <div></div>
        <div id="mobile" onClick={this.handleClick}>
          <i id="bar" className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
        {/* <div></div> */}
      </nav>
    );
  }
}

export default Header;
