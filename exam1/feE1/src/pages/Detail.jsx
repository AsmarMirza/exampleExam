import React, { useEffect, useState } from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import { useParams } from 'react-router-dom'

function Detail() {
    const [menu, setMenu] = useState([])
    useEffect(() => {
        getMenu()
    }, [])
    
    const {id}=useParams()
    async function getMenu(){
        const res=await fetch("http://localhost:3000/ourmenu/"+id)
        const data=await res.json()
        setMenu(data)
    }
  return (
    <div>
           <HelmetProvider>
      <Helmet>
        <title>Detail</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
      </HelmetProvider>
      <div style={{width:"300px",height:"200px",textAlign:"center",border:"1px solid black"}}>
        <h4>{menu.name}</h4>
        <p>{menu.description}</p>
        <h5>{menu.price}</h5>
      </div>
    </div>
  )
}

export default Detail
