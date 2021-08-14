import React from 'react';
import "./HeadreProfile.scss"
import img from "../../img/wallpapersden.com_paris-eiffel-tower-dawn_3840x2160.jpg"

const HeadrProfile = () => {
    return (
        <div className="content-headre">
            <div>
                <img  className="img-profile" src={img} alt="rasm" ></img>
            </div>
        </div>
    );
};


export default HeadrProfile;