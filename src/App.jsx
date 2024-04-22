import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/homepage";
import Repository from "./pages/repository";
import NotFound from "./pages/404";
import { AppContext } from "./context/context";

export default function App(){
  const [data, setData] = React.useState([]);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [fetched, setFetched]= React.useState(false);
  const [totalPages, setTotalPages] = React.useState(1);



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
   
    let ttlPages
    
      const pages = link.split(",");
      pages.forEach(link =>   {
        const match = link.includes('rel="last"') && link.match(/&page=(\d+)/);
        
        if (match) {
          const pageNumber = parseInt(match[1]);
          ttlPages = pageNumber;
          console.log(pageNumber)
          
          
        }
      })
     
      // pass the response to the state
    
    
    setTotalPages(ttlPages); 
    setData(repositories);
    setFetched(true)
    

  

      

  } catch (error){
    console.log(error);
  }
}
   
// call api when the current page changes
  useEffect(()=>{
    fetchData();
  }, [currentPage])
  return(
    <div className="app">
      <AppContext.Provider value={{data, fetched,setTotalPages, totalPages, currentPage, setCurrentPage}}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/repository/:repoName" element={<Repository />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      </AppContext.Provider>

    </div>
  )

}