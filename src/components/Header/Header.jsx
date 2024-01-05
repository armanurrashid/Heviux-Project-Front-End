import { faComment, faShoppingCart, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../../images/hev.png";
import "./Header.css";

class Header extends Component {
  state = { clicked: false, activeLink: "Home" };

  componentDidMount() {
    // Retrieve the active link from local storage on component mount
    const activeLink = localStorage.getItem("activeLink");
    if (activeLink) {
      this.setState({ activeLink });
    }
  }

  componentDidUpdate() {
    // Update local storage with the active link on component update
    localStorage.setItem("activeLink", this.state.activeLink);
  }

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
        <div className="d-flex justify-content-center">
          <ul id="navbar" className={this.state.clicked ? "active" : ""}>
            <li>
              <Link
                to="/login"
                className={`link ${this.state.activeLink === "Login" ? "active" : ""}`}
                onClick={() => this.handleLinkClick("Login")}
              >
                Login
              </Link>
            </li>
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
            </li><li>
              <Link
                to="/orderhistory"
                className={`link ${this.state.activeLink === "orderhistory" ? "active" : ""}`}
                onClick={() => this.handleLinkClick("orderhistory")}
              >
                History
              </Link>
            </li><li>
              <Link
                to="/userlist"
                className={`link ${this.state.activeLink === "userlist" ? "active" : ""}`}
                onClick={() => this.handleLinkClick("userlist")}
              >
                User
              </Link>
            </li>
            <li>
              <Link
                to="/productlist"
                className={`link ${this.state.activeLink === "productlist" ? "active" : ""}`}
                onClick={() => this.handleLinkClick("productlist")}
              >
                ProductList
              </Link>
            </li>
            <li>
              <Link
                to="/category"
                className={`link ${this.state.activeLink === "category" ? "active" : ""}`}
                onClick={() => this.handleLinkClick("category")}
              >
                Category
              </Link>
            </li>
            <li>
              <Link
                to="/textile"
                className={`link ${this.state.activeLink === "textile" ? "active" : ""}`}
                onClick={() => this.handleLinkClick("textile")}
              >
                Textile
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <Link
            to="/orderReview"
            className="mx-3 text-white"
            onClick={() => this.handleLinkClick("Login")}
          >
            <FontAwesomeIcon icon={faShoppingCart} size="lg" />
          </Link>
          <Link
            to="/chat"
            className="mx-3 text-white"
            onClick={() => this.handleLinkClick("Login")}
          >
            <FontAwesomeIcon icon={faComment} size="lg" />
          </Link>
          <Link
            to="/login"
            className="mx-3 text-white"
            onClick={() => this.handleLinkClick("Login")}
          >
            <FontAwesomeIcon icon={faSignOutAlt} size="lg" />
          </Link>
        </div>
        <div id="mobile" onClick={this.handleClick}>
          <i id="bar" className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
      </nav>

    );
  }
}

export default Header;