import React from "react";
import Header from "../component/header";
import SearchFilter from "../component/search-filter";
import Repositories from "../component/repositories";

export default function Homepage(){
    return(
        <div className="homepage">
            <Header />
            <SearchFilter />
            <Repositories />
        </div>
    )

}