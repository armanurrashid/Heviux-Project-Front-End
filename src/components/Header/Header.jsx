import {Component} from "react";
import { Link } from 'react-router-dom';
import logo from '../../images/heviux.png'
import './Header.css'
class Header extends Component {
    state={clicked: false};
    handleClick = () => {
        this.setState({clicked:!this.state.clicked})
    }
    render(){
    return (
        <nav className='header'>
            <img src={logo} alt="" style={{width:'130px', height:'auto'}}/>
            <div>
                <ul id="navbar" className={this.state.clicked ? "active" : ""}>
                    <li>
                        <Link to="/" className='link active'>Home</Link>
                    </li>
                    <li>
                        <Link to="/shop" className='link'>Shop</Link>
                    </li>
                    <li>
                        <Link to="/men" className='link'>Men</Link>
                    </li>
                    <li>
                        <Link to="/women" className='link'>Women</Link></li>
                    <li>
                        <Link to="/kids" className='link'>Kids</Link>
                    </li>
                </ul>
            </div>
            
            <div id='mobile' onClick={this.handleClick}>
                <i id="bar" className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
            </div>
            <div>
            </div>
            
        </nav>
    );
}
}
export default Header;