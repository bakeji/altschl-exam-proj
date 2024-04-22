import React, { useContext } from "react";
import BackBtn from "../component/back-btn";
import Header from "../component/header";
import RepoInfo from "../component/repo-info";
import {useParams} from "react-router-dom";
import { AppContext } from "../context/context";



export default function Repository(){



    const {data}= useContext(AppContext)

    const {repoName} = useParams();
    const selectedRepo = data.find((repo)=> repo.name===repoName )

    return(
        <div className="repository">
            <AppContext.Provider value={{selectedRepo}}>
            <Header />
            <BackBtn />
            <RepoInfo />
            
            </AppContext.Provider >
        </div>
    )
}