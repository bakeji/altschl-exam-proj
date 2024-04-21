import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/homepage";
import Repository from "./pages/repository";
import { AppContext } from "./context/context";

export default function App(){
  const [data, setData] = React.useState([]);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [fetched, setFetched]= React.useState(false);
  const [totalPages, setTotalPages] = React.useState(1);

  // const indexOfLastRepo = currentPage * reposPerPage;
  // const indexOfFirstRepo = indexOfLastRepo - reposPerPage;
  // const currentRepos = data.slice(indexOfFirstRepo, indexOfLastRepo);


  async function fetchData(){
    const apiKey= import.meta.env.VITE_API_KEY;
    try{
      const response = await fetch(`https://api.github.com/users/bakeji/repos?per_page=9&page=${currentPage}`,{
        method: "GET",
        headers: {
          Accept: "application/vnd.github+json",
          Authorization: `token ${apiKey}`
        },
         })
    if(!response.ok){
      throw new Error("Something went wrong")
    }

    const repositories = await response.json();

    // get link info for pagination
    const link = response.headers.get("link");
    console.log(link)
    let ttlPages
    
      const pages = link.split(",");
      pages.forEach(link => {
        const match = link.includes('rel="last"') && link.match(/&page=(\d+)/);
        console.log(match)
        if (match) {
          const pageNumber = parseInt(match[1]);
          ttlPages = pageNumber;
          setFetched(true)
          console.log(pageNumber)
          
          
        }
      })
     
      // pass the response to the state
    
    
    setTotalPages(ttlPages); 
    setData(repositories);
    // console.log(data)

  

      

  } catch (error){
    console.log(error);
  }
}
   

  useEffect(()=>{
    fetchData();
    
  
  
  }, [currentPage])
  return(
    <div>
      <AppContext.Provider value={{data,setTotalPages, totalPages, currentPage, setCurrentPage}}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/repository/:repoName" element={<Repository />} />
        </Routes>
      </BrowserRouter>
      </AppContext.Provider>

    </div>
  )

}