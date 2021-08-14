import "./Erorr.css";
import { Link } from "react-router-dom";




const Erorr = () =>{
    return (
        <>
         <span className="erorr-wrapper">
             <h1 className="erorr-title">Erorr 400</h1>
            <Link className="homePage-btn"  to="/" >Home</Link>
         </span>
        </>
    )
}

export default Erorr