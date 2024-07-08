import React, { Component, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const API_KEY = import.meta.env.VITE_APP_API_KEY;


const BreweryDetail = ()=>{
    let params = useParams();
    const [fullDetails, setFullDetails] = useState(null);

    useEffect(()=>{
        const getBreweryDetail = async()=>{
            try{
                const details = await fetch()

            }catch(error){
                console.log(error);
            }
        }

    },[params.address]);
    return (
        <div></div>
    )
}

export default BreweryDetail;