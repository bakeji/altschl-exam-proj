import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/context";
export default function SearchFilter(){

    const{selectedRepo} = useContext(AppContext)
    const [showElements, setShowElements] = useState(false)
    const [filteredRepos, setFilteredRepos] = useState([selectedRepo])

    const [inputValue, setInputValue] = useState({
        search: "",
        filter: ""
    });

    // handle change for the input fields and options
    function handleChange(event){
        setInputValue(prevState=>{
            return{
            ...prevState,
            [event.target.name]:event.target.value
    }})
    setShowElements(true)
    }

    // show filtered data
        useEffect(()=>{
            if (showElements === true){
                const filteredRepo = selectedRepo.filter((repos)=>{
                    return (repos.name.toLowerCase().includes(inputValue.filter.toLowerCase()) && repos.language).includes(inputValue.filter) 
                })

                setFilteredRepos(filteredRepo)
            }
            

        }, [inputValue])

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
                id="filter">
                    <option value="">Filter by language</option>
                    <option value="React">React</option>
                    <option value="html">HTML</option>
                    <option value="javascript">Javascript</option>
                    <option value="css">Css</option>
                    <option value="python">Python</option>
                    <option value="dart">Dart</option>
                </select>
            </div>
        </div>
    )
}