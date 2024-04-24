import React from "react";
import { Link } from "react-router-dom";

export default function ModalForm(props){
    




    return(
        <div className="mod-fm">
        
                <label htmlFor="repoName">Repository Name </label>
                <input
                 type="text" 
                 value={props.repoName}
                onChange={props.handleChange}
                 id="repoName" 
                 name="repoName" />

                 <div>
                    {props.newRepo!== ""&& <Link to={props.newRepo} ><p className="np">New Repo Link</p></Link>}
                    <p>{props.errorMessage}</p>
                 </div>
         
        </div>
    )
}