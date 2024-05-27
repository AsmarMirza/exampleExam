import React, { useContext, useEffect, useState } from 'react'
import "./admin.scss"
import { Link } from 'react-router-dom'
import { MainContext } from '../context/MainProvider'
import { Helmet, HelmetProvider } from 'react-helmet-async'
function Admin() {
const {addBasket} = useContext(MainContext)
const [inp, setInp] = useState("")
    const [menu, setMenu] = useState([])
    useEffect(() => {
        getAllMenu()
    }, [])
     
    async function getAllMenu(){
        const res=await fetch("http://localhost:3000/ourmenu/")
        const data=await res.json()
        setMenu(data)
    }
    async function deleteMenu(id){
        const res=await fetch("http://localhost:3000/ourmenu/"+id,{method:"delete"})
        const data=await  res.json()
        await getAllMenu()
    }
    function asc(value){
       setMenu( menu.toSorted((a,b) => (a[value] > b[value]) ? 1 : ((b[value] > a[value]) ? -1 : 0)))
    }

    function dsc(value){
        setMenu( menu.toSorted((a,b) => (a[value] <b[value]) ? 1 : ((b[value] < a[value]) ? -1 : 0)))
     }
  return (
    <div style={{backgroundColor:"red"}}>
           <HelmetProvider>
      <Helmet>
        <title>Admin</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
      </HelmetProvider>
      <div className='inp'>
      <input type="text" name="" id="" placeholder='search By Name..'
      value={inp}
      onChange={(e)=>{setInp(e.target.value)}}
      
      />
      <button onClick={()=>asc("price")}>asc</button>
      <button onClick={()=>dsc("price")}>dsc</button>
      </div>
      <table >
        <thead>
  <tr>
    <th>Name</th>
    <th>Price</th>
    <th>Options</th>
  </tr>
  </thead>
  <tbody>
    {menu
    .filter((x)=>x.name.toLowerCase().includes(inp.toLowerCase()))
    .map((x)=>(
         <tr key={x._id}>
         <td>{x.name}</td>
         <td>{x.price}$</td>
         <td><button onClick={()=>deleteMenu(x._id)}>delete</button>
         <button>update</button>
         <button onClick={()=>addBasket(x)}>addBasket</button>
         <button><Link to={`/detail/${x._id}`}>go to detail</Link></button>
         </td>
       </tr>
    ))}
  </tbody>
  </table>
    </div>
  )
}

export default Admin
