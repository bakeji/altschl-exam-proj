import React, { useEffect, useState } from "react";
import RepoModal from "./modal";
import { Octokit } from "@octokit/rest";
import DelModal from "./del-modal";

export default function Header(){
    
    // states
    const[newRepo, setNewRepo] = useState("");
    const [repoName, setRepoName] = useState("");
    const [Loading, setLoading] = useState(false)


// get repo name from the input field
        function handleChange(e){
            setRepoName(e.target.value)
        }


        // api authentication
    const apiKey = import.meta.env.VITE_API_KEY;
    const octokit = new Octokit({
        auth: apiKey
        })

        // create a new repo function
async function createRepo(){
    try {
        const response = await octokit.repos.createForAuthenticatedUser({
          name: repoName,
          description: "This is a new repository created using Octokit",
          private: false,
        });
  
        console.log("Repository created:", response.data);
        setNewRepo(response.data.clone_url)
      } catch (error) {
        console.error("Error creating repository:", error);
        alert(error.message)
        
      }
    
   
      
    
}
// click on the button to call the createRepo function
    function createRepoBtn(){
        createRepo()
        if(setNewRepo ===""){
            setLoading(true)
        }
    }


    

    return(
        <header>
            <div className="header">

                <div className="logo">
                    <img src="/github.png" alt="github logo" />
                    <p>Github</p>
                    </div>


                    <div className="mdl">
                        <RepoModal
                        handleChange={handleChange}
                        repoName={repoName}
                        newRepo={newRepo}
                        Loading ={Loading}
                        createRepoBtn= {createRepoBtn}
                        />
                </div>

                <div className="mdl ">
                    <DelModal />
                </div>
            </div>
        </header>
    )
}