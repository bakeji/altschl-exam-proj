import React, { useEffect, useState, useContext } from "react";
import Header from "../component/header";
import SearchFilter from "../component/search-filter";
import Repositories from "../component/repositories";
import { AppContext } from "../context/context";
import Loading from "../component/loading";
import RepoModal from "../component/modal";

export default function Homepage(){
    const{data, fetched,setCurrentPage, currentPage, totalPages} = useContext(AppContext)
    const [showElements, setShowElements] = useState(false)
    const [searchError, setSearchError] = useState(false)
const [filteredRepos, setFilteredRepos] = useState([])

// handle change for the input fields and options
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
        const filteredRepo = data?.filter((repos)=>{
            return repos.name?.toLowerCase().includes(inputValue.search.toLowerCase())
            
            && repos.language?.toLowerCase().includes(inputValue.filter)
        })
        setFilteredRepos(filteredRepo)
        setSearchError(false)
    }
     if(showElements === true &&filteredRepos.length === 0){
        setSearchError(true)
    }   
}, [inputValue])



    return(
        <div className="homepage">
            <AppContext.Provider value={{currentPage, setCurrentPage, data,totalPages, searchError, fetched,filteredRepos, showElements, handleChange, inputValue}}>
            <Header />
            <SearchFilter />
        
            {fetched?<Repositories /> : <Loading />}
            </AppContext.Provider>
        </div>
    )

}