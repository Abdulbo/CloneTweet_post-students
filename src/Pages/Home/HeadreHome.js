import React from 'react';
import StarIcons from "../../img/star.png"
import "./HeadreHome.scss"


const HeadreHome = () => {
    return (
        <div>
            <header>
                <h1>Home</h1>
                <img src={StarIcons} alt="StartIcon" />
            </header>

        </div>
    );
};



export default HeadreHome;