import React, { useState } from "react";
import { AppContext } from "../context/context";
import { useContext } from "react";
export default function Pagnation(){
    const[disablePrevBtn, setDisablePrevBtn] =useState(false)
    const[disableNextBtn, setDisableNextBtn] =useState(false)
    const{setCurrentPage,totalPages, setTotalPages, currentPage,} = useContext(AppContext);
    const pageNumbers = [];

    for(let i = 1; i <= totalPages; i++){
        pageNumbers.push(i);
    }
    console.log(pageNumbers)
    function NextBtn(){
        if(currentPage <totalPages){
            setCurrentPage((prev)=> prev + 1);
}
        
    }

    function PrevBtn(){
        if(currentPage > 1){
            setCurrentPage((prev)=> prev - 1);
        }
    }
        function pageNumberBtn(number){
            setCurrentPage(number);
        }

    return(
        <div className="pag">
            <button disabled={currentPage === 1?  true : false} onClick={PrevBtn} className={`prev-btn ${currentPage===1?"grey":""}`}>Prev</button>
            <div className="pg-nb">
                {pageNumbers.map((number) => (
                    <button onClick={()=>pageNumberBtn(number)} key={number} className={`btn ${currentPage===number? "ch-btn": ""}`}>
                        {number}
                    </button>
                ))}
        
            </div>
            <button disabled={currentPage===totalPages? true : false} onClick={NextBtn} className={`nxt-btn ${currentPage===totalPages?"grey":""}`}>Next</button>
        </div>
    )
}