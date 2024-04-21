import React, { useContext } from "react";
import Pagnation from "./pagnation";
import { AppContext } from "../context/context";
import {Link} from "react-router-dom";

export default function Repositories() {

  const{data} = useContext(AppContext);
  return (
    <div className="repo-pg">
      <div className="repos">
        {data.map((repo) => (
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
      </div>
      <Pagnation />
    </div>
  );
}
