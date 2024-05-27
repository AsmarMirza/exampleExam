import { useContext } from "react"
import { MainContext } from "../context/MainProvider"
import { Helmet, HelmetProvider } from "react-helmet-async"


function Basket() {
    const {basket,addBasket,removeBasket,decreaseBasket,getTotal}=useContext(MainContext)
    

  return (
    <div>
           <HelmetProvider>
      <Helmet>
        <title>Basket</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
      </HelmetProvider>
       
    <div style={{display:"flex",flexWrap:"wrap",backgroundColor:"green",paddingTop:"70px"}}>
  
      {basket.map((x)=>(
        <div key={x._id} style={{border:"1px solid black"}}>
         <p>{x.name}</p>
         <h3>{x.price}$</h3>
         <p>{x.description}</p>
         <h3> count:{x.count}</h3>
         <button onClick={()=>addBasket(x)}>+</button>
         <button onClick={()=>decreaseBasket(x)}>-</button>
         <button onClick={()=>removeBasket(x)}>remove basket</button>
        </div>    ))}
    </div>
    </div>
  )
}

export default Basket
