
import React from 'react';
import "./News.scss"

import Data from "../Assets/Data";

const News = () => {
   
    return (
        <div className="contentNews">
            {
                Data.length > 0 &&
             <ul className="list-item">
                 <form>
                     < input placeholder="    Search-Twitter" className="news-search" type="search" />
                 </form>
                 {
                   Data.map( dataItem => (     
                    <li className="item-news" key={dataItem.id}> 
                        <h3>{dataItem.title}</h3>
                        <p>{dataItem.discription}</p>
                        <img src={dataItem.img} alt="rasm" />
                    </li>
                   ))
                 }
            </ul>
            }
        </div>
    );
};



export default News;