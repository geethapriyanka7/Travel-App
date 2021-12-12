import React from 'react'
import axios from 'axios'
import Button from '@mui/material/Button';
import "./Test.css"

export default function Test() {

    var myParams = [{
        email: "jwayne@gmail.com"
    }]

    if (myParams !== "") {
        axios.post('http://localhost:5000/a', myParams)
            .then(function(response){
                console.log(response);
       //Perform action based on response
        })
        .catch(function(error){
            console.log(error);
       //Perform action based on error
        });
    }

    return (
        <div>
            <p align="center">Hello World</p>
            
            <div align="center">
                <Button className="bb">Geetha</Button>
                <br></br>
            <Button className ="bb" variant="outlined" color="success">Kirti</Button>
            </div>
            
        </div>
    )
}
