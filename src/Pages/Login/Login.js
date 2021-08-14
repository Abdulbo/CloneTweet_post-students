import { useRef } from "react";
import { Link } from "react-router-dom";
import "./Login.scss";



const Login = () => {
  const InputRef = useRef();
  const inputEmailRef = useRef()
    return (
        <div className="form-wrapper">
            <h3 className="login-text">Login</h3>
          <form
          onSubmit={(e) =>{
              e.preventDefault();
              window.localStorage.setItem("token" , InputRef.current.value);
              InputRef.current.value = "";
              inputEmailRef.current.value = "";
          }}

          >
              <input ref={inputEmailRef} type="email" placeholder="   email"  className="input-email" required  />
              <input ref={InputRef}  type="password" placeholder="   password"  className="input-password" required />
              <span className="wrapper-button">
               <button className="buttonSubmit">Submit</button>
            <p>Farget your Password</p>
            </span>
              
          </form>
            
            <button  className="main-button">Login with Twitter</button>
        </div>
    );
};



export default Login;