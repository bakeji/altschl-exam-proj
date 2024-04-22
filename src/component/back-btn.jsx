import React from "react";
import { useNavigate } from "react-router-dom";
export default function BackBtn(){
    const navigate = useNavigate();
	const goBack = () => {
		navigate(-1);
	}

    

    return(
        <div className="bck-btn">
            <button onClick={goBack}> <img src="/arrow-left2.png" alt="back arrow" />Back</button>
        </div>
    )
}