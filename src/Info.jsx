import React, { useState, useEffect } from "react";

import { BrowserRouter } from 'react-router-dom';


import "./pages/styles/work.css";

const Info = () => {


     // usestate for setting a javascript
    // object for storing and using data
    const [data, setdata] = useState({
        path : 0,
        result : 0,
  
    });
 
    // Using useEffect for single rendering
    useEffect(() => {
        // Using fetch to fetch the api from 
        // flask server it will be redirected to proxy
        fetch("/data").then((res) =>
            res.json().then((data) => {
                // Setting a data from api
                setdata({
                    path: data.Path,
                    result: data.Result, 
                    
                });
            })
        );
    }, []);
 


    return(
        <div class= "info-page">
            <h1>Classification result</h1>
            {/* Calling a data from setdata for showing */}
            <p>{data.path}</p>
            <p>{data.result}</p>
                
        </div>
    );
}

export default Info;