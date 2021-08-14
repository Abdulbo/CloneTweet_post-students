
import "./Profile.scss"

//componets
import HeadrProfile from './HeadrProfile';
import Tweet from '../../components/Tweets/Tweet';

import { useParams } from 'react-router';
import MainProfiel from "./MainProfiel";

const Profile = () => {
    const {username} = useParams();
   
    return (
        <div className="content-profile">
                <HeadrProfile />
                <MainProfiel />
                <Tweet username={username}/>
                {console.log(username)}
        </div>
    );
};



export default Profile;