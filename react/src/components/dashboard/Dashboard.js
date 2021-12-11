import React, { useEffect, useState} from 'react'

function Dashboard() {

    const [data,setData] = useState({})

    useEffect(() => {
        fetch("http://localhost:5000/")
    .then(response => response.text ())
    .then(text => {
      try {
          const data = new Map(Object.entries(JSON.parse(text)));
          setData(data)
          console.log(data)
        //   console.log(data)
          // Do your JSON handling here
      } catch(err) {
          console.log(err)
         // It is text, do you text handling here
      }
    })

    },[])

    
 
    
    return (
        <div>
  
        

        </div>
    )
}

export default Dashboard
