import React, { createContext} from 'react'
import UseLocalStorage from '../hooks/useLocalStorage'



 export const MainContext=createContext()
function MainProvider({children}) {
const [basket, setBasket] = UseLocalStorage("basket",[])
    function addBasket(item){
        const index=basket.findIndex((x)=>x._id===item._id)
        if (index!==-1) {
            basket[index].count++
            setBasket([...basket])
            
        }
        else{
            setBasket([...basket,{...item,count:1}])
        }
    }
     function decreaseBasket(item){
        const index=basket.findIndex((x)=>x._id===item._id)
        if (basket[index].count>1) {
            basket[index].count-- 
            setBasket([...basket])
        }
     }
     function removeBasket(item){
        setBasket(basket.filter((x)=>x._id!==item._id))
     }

     function getTotal(){
        setBasket(basket.reduce(
            (accumulator, currentValue) => accumulator + (currentValue.price*currentValue.count),
            0,
          ))
     }
  return (
   <MainContext.Provider value={{basket,addBasket,removeBasket,decreaseBasket,getTotal}}>

    {children}
   </MainContext.Provider>
  )
}

export default MainProvider
