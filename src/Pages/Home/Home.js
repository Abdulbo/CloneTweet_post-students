import React from 'react';
import HeadreHome from './HeadreHome';
import "./Home.scss"
import  Tweet from "../../components/Tweets/Tweet";
import MainHome from './MainHome';


const Home = () => {
    return (
        <div className="content-home">
             <HeadreHome />
             <MainHome />
             <Tweet last={true} />
        </div>
    );
};


export default Home;