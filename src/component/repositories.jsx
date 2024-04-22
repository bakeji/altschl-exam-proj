import React, { useContext } from "react";
import Pagnation from "./pagnation";
import { AppContext } from "../context/context";
import {Link} from "react-router-dom";
import SearchError from "./searchError";


export default function Repositories() {

  const{data, searchError, filteredRepos, showElements} = useContext(AppContext);
      let repos = showElements? filteredRepos : data;
    
  return (
    <div className="repo-pg">
      {searchError?
      (<SearchError />)
      : 
      
      (<div className="repos">
        {repos.map((repo) => (
            <div key={repo.id} className="repo1">
              <Link  
                 style={{textDecoration:"none", marginLeft: "0", color:"#111517"}}
                  to={`./repository/${repo.name}`} >
                <h1>{repo.name}</h1> 
                <p>{`Fork Count: ${repo.forks_count}`}</p>
                <p>{`Visibility: ${repo.visibility}`}</p>
                <p>{`Language: ${repo.language} `} </p>
                <p>{`Disabled: ${repo.disabled}`}</p>
                </Link>
            
            </div>
        ))}
      </div>)
}

    { !searchError && <Pagnation />}
    </div>
  );
}
