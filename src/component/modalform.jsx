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
                    {props.newRepo!== ""&&<p>new repo link: <Link to={props.newRepo}>{props.newRepo}</Link></p>}
                    <p>{props.errorMessage}</p>
                 </div>
         
        </div>
    )
}