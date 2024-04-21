import React from "react";

export default function Header(){
    return(
        <header>
            <div className="header">
                <h1>@Bakeji</h1>

                <div className="logo">
                    <img src="/github.png" alt="github logo" />
                    <p>Github Repositories</p>
                </div>
            </div>
        </header>
    )
}