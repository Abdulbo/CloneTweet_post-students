import React from 'react';
import "./SignUp.scss"

//icons
import TwiteerIcons from "../../img/twitter.svg";
import { Link } from 'react-router-dom';

const SignUp = () => {
    return (
        <div className="content-SignUp">
         <span>
         <img className="iconTweet" src={TwiteerIcons} alt="rasmTweet" />
         <Link to="/" className="SignBtn"> Next</Link>
         </span>
            <h3>Create your account</h3>

           <form>
               <input type="text"  placeholder="  Name" />
               <input type="number" placeholder="  Phone" />
           </form>

       
        </div>
    );
};



export default SignUp;