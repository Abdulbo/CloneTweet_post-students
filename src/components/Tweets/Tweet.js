import React from 'react';
import "./Tweets.scss";

import tweets from "../../components/Assets/Data2";

const Tweet = ({last,username}) => {

    return (
        <>
           {tweets.length > 0 &&
            <ul className="user-list">
                  {
                    tweets.filter(i =>{ 
                            if(last){
                                return i
                                 }
                                return i.username === username
                            }
                        ).map(t => (
                        <li className="tweet-item" key={t.id}>
                            <span>
                                <img className="userImg" src={t.img} alt="userImg" />
                            </span>
                            <span>     
                                <h3>{t.username}</h3>
                                <p>{t.tweet}</p>
                            </span>
                        </li>
                    ))  
                  }      
            </ul>
            }
        </>
    );
};



export default Tweet;