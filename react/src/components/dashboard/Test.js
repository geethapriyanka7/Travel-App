import React from 'react'
import axios from 'axios'

export default function Test() {

    var myParams = {
        email: "jwayne@gmail.com"
    }

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
            Hello
            

        </div>
    )
}
