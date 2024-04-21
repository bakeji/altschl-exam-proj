import React, { useContext } from "react";
import {Link} from "react-router-dom"
import { AppContext } from "../context/context";
export default function RepoInfo(){
    const {selectedRepo} = useContext(AppContext)
    console.log(selectedRepo)
    return(
        <div className="repo-info">
            <div className="repo-name">
                <h1>REPOSITORY NAME</h1>
                <Link><p>{selectedRepo.url}</p></Link>
            </div>


            <div className="flex">
                <div className="flx-item">
                <p>Fork Count: {selectedRepo.forks_count}</p>
                <p>Disabled: {selectedRepo.disabled}</p>
                <p>Stargazers: {selectedRepo.stargazers_count}</p>
                <p>Date Created:{selectedRepo.created_at}</p>
                <p>open Issues:{selectedRepo.open_issues}</p>
                <p>clone Url:{selectedRepo.clone_url}</p>
                </div>
                
                <div className="flx-item">
                <p>Visibility:{selectedRepo.visibility}</p>
                <p>DESCRIPTION: {selectedRepo.description} </p>
                <p>Language: {selectedRepo.language}</p>
                <p>Default Branch:{selectedRepo.default_branch}</p>
                <p>Archived: {selectedRepo.archived}</p>
                <p>Watchers: {selectedRepo.watchers}</p>

                </div>
            </div>
        </div>
    )
}