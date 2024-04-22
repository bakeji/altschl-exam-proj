import React from "react";
import Header from "./component/header";
import {Link} from "react-router-dom";

export default function ErrBoundry(){
    return(
        <div className="nf">
             <Header />
             <div>

            <img className="nf-img" src="/404.jpg" alt="" />
            </div>

            <div className="nf-btn">
            <Link to="/" > <button  className="btn-nf">Homepage</button> </Link>
            </div>
          
         </div>
    )
}