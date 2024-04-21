import React, { useState } from "react";
import { AppContext } from "../context/context";
import { useContext } from "react";
export default function Pagnation(){
    const[disablePrevBtn, setDisablePrevBtn] =useState(false)
    const[disableNextBtn, setDisableNextBtn] =useState(false)
    const{setCurrentPage,totalPages, setTotalPages, currentPage,} = useContext(AppContext);
    const pageNumbers = [];

    // console.log(currentPage);
    // console.log(totalPages);

    for(let i = 1; i <= totalPages; i++){
        pageNumbers.push(i);
    }
    function NextBtn(){
        if(currentPage <totalPages){
            setCurrentPage((prev)=> prev + 1);
            setDisablePrevBtn(false)
            setTotalPages(totalPages)
            console.log(currentPage) }
        else{
            setDisableNextBtn(true)
        }
    }

    function PrevBtn(){
        if(currentPage > 1){
            setCurrentPage((prev)=> prev - 1);
            setDisableNextBtn(false)
            setDisablePrevBtn(false)
        }
        else{
            setDisablePrevBtn(true)
            
        }
    }
        function pageNumberBtn(number){
            setCurrentPage(number);
        }

    return(
        <div className="pag">
            <button disabled={disablePrevBtn} onClick={PrevBtn} className="prev-btn">Prev</button>
            <div className="pg-nb">
                {pageNumbers.map((number) => (
                    <button onClick={()=>pageNumberBtn(number)} key={number} className="btn">
                        {number}
                    </button>
                ))}
        
            </div>
            <button disabled={disableNextBtn} onClick={NextBtn} className="nxt-btn">Next</button>
        </div>
    )
}