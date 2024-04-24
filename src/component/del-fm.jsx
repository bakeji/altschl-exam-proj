import React from "react";
export default function DelForm(props){
    return(
        <div className="mod-fm">
            <label htmlFor="repo">Repository Name</label>
            <input
            value={props.inputValue}
             type="text"
              id="repo"
               name="repo"
               onChange={props.handleChange} />
        </div>

    )
}
