import React, { useContext } from "react";
import { AppContext } from "../context/context";
export default function SearchFilter(){

    const{handleChange, inputValue} = useContext(AppContext)

    return(
        <div className="search-filter">
            <div className="search">
                <input
                 value={inputValue.search}
                onChange={handleChange}
                name="search"
                 type="text" 
                 placeholder="search for a repository...." />
                <button><img src="/search.png" alt="search icon" /></button>
            </div>

            <div className="filter">
                <select 
                onChange={handleChange} 
                value={inputValue.filter} 
                name="filter" 
                id="Filter">
                    <option value="">Filter by language</option>
                    <option value="react">react</option>
                    <option value="html">html</option>
                    <option value="javascript">javascript</option>
                    <option value="css">Css</option>
                    <option value="python">python</option>
                    <option value="dart">Dart</option>
                </select>
            </div>
        </div>
    )
}