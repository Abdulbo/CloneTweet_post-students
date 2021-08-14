import './App.css';
import {Switch , Route} from "react-router-dom";

//components;
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Profile from "./Pages/Profile/Profile";
import SignUp from "./Pages/SignUp/SignUp";
//erorr
import Erorr from "./Pages/Erorr/Erorr"

//component
import SaidBar from './components/Saidbar/SaidBar';
import News from './components/news/News';
//Route
import Public from './routes/Public';
import Private from './routes/Private';


function App() {
      return (
          <>
            <div className="Wrapper">
              <SaidBar />
              <Switch>
                    <Public  path="/login/" component={Login} />
                    <Public  path="/" component={Home}  exact/>
                    <Private  path="/profile/:username" component={Profile} />
                    <Public  path="/login/" component={Login} />
                    <Public  path="/signup" component={SignUp} />
                    <Route path="*" component={Erorr} />
              </Switch>
              <News />
            </div>
          </>
      );
}

export default App;
