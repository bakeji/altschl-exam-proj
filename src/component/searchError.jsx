import React from "react";

export default function SearchError(){
    return(
        <div className="srch-err">
            <img src="/search-nt.svg" alt="" />
            <p>Sorry, we couldn't find any repository matching your search</p>
        </div>
    )
}