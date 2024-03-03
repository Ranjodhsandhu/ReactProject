import { HEADER_LOGO } from '../utils/constants';
import { useState } from "react";
const Header = () => {
    const [btnName, setBtnName] = useState("Login");
    // NOTE: everytime setBtnName is called whole component is re-rendered and const value of
    // btnName is reset to whatever the new value is passed in setBtnName
    // this is the reason why even const variable is updated on state method call in React
    // But based on the Reconcilliation algorithm only the button is refreshed but everything stays
    // the same on this component
    console.log("logged in");
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={HEADER_LOGO} alt="logo" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                    <button className="login-btn" onClick={()=>{ 
                        btnName==="Login" 
                        ? setBtnName("Logout")
                        : setBtnName("Login");
                        }}>
                            {btnName}
                    </button>
                </ul>
            </div>
        </div>
    )
}
export default Header;