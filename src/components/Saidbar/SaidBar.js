import "./Saidbar.scss"
//iconsImg
import TwitterIcons from "../../img/twitter.svg"
import HomeIcon from "../../img/home.png";
import LoginIcon from "../../img/login.svg";
import SignUpIcon from "../../img/add-user.svg";
import UserIcon from "../../img/user.svg";

import { NavLink } from 'react-router-dom';




const SaidBar = () => {
    return (
        <div className="wrapper-saidBar">
            <nav>
                <ul>
                    <li>
                        <img className="twitIcons" src={TwitterIcons} alt="icon"/>
                    </li>
                    <li>
                        <img src={HomeIcon} alt="HomeIcon" />
                        <NavLink activeClassName="link-blue" className="link" to="/" exact>Home</NavLink>
                    </li>
                    <li>
                        <img src={UserIcon} alt="ProfilIcon" />
                        <NavLink activeClassName="link-blue"   className="link" to="/profile">Profile</NavLink>
                    </li>
                    <li>

                        <img src={LoginIcon} alt="LoginIcon" />
                        <NavLink activeClassName="link-blue"  className="link" to="/login">Login</NavLink>
                    </li>
                    <li>
                        <img src={SignUpIcon} alt="SignUpIcon" />
                        <NavLink activeClassName="link-blue"   className="link" to="/signup">SignUp</NavLink>
                    </li>
                    <li>
                        <button className="buttonTweet">Tweet</button>
                    </li>
                </ul>
            </nav>
        </div>
    );
};


export default SaidBar;