import { useContext , useEffect } from "react";
import {Auth} from "../context/Authtication";

function useAuth (settrOnly){
    
    const {token , setToken} = useContext(Auth);
    
    useEffect(() =>{
        setToken( window.localStorage.getItem("token"));
     })

     console.log(token)

    return settrOnly ? [setToken] :[token,setToken]
}


export default useAuth;