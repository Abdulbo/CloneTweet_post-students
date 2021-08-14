import React from 'react';
import "./MainHome.scss"
//icons
import Smile from "../../img/smile.png";
import Gif from "../../img/gif.png";
import Img from "../../img/image.png";

const MainHome = () => {
    return (
        <div className="Main-wrapper">
           <span className="contenTweet">
             <span className="img"></span>
                <p>What's happing</p>
            </span> 
            <span className="wrapper-multimed">
                <span className="icon-wrapper">
                    <img className="icon" src={Smile} alt="SimleIcons" />
                    <img  className="icon" src={Gif} alt="GifIcons" />
                    <img  className="icon"src={Img} alt="ImgIcons" />
                </span>
                <button>Tweet</button>
            </span>
        </div>
    );
};



export default MainHome;