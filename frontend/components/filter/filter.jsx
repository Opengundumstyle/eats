import React from "react";

const Filter = ({props}) =>{
      
 const handleCategory =(e)=>{
     let where = e.target.value;
     props.history.push(`/search?where=${where}&near=&price=`)
 }

 const handlePrice = (e) =>{
     let price = e.target.value;
     props.history.push(`/search?where=&near=&price=${price}`)
 }
console.log('what is the props in Filter',props)
    return(
      
          <div className="filters-container">
            <div className="filter-title">Filters</div>
            <div className="price-filter-container">
               <div className="price-buttons">
                    <button value="$" onClick={handlePrice}>$</button>
                    <button value="$$"  onClick={handlePrice} >$$</button>
                    <button value="$$$"  onClick={handlePrice} >$$$</button>
                    <button value="$$$$"  onClick={handlePrice} >$$$$</button>
               </div>
            </div>
         <div className="category-filter-container">
            <div>Category</div>
            <div className="category-buttons">
                    <button value="chinese" onClick={handleCategory}>Chinese</button>
                    <button value="korean" onClick={handleCategory}>Korean</button>
                    <button value="japanese" onClick={handleCategory}>Japanese</button>
                    <button value="Hong Kong Style Cafe" onClick={handleCategory}>Hong Kong Style Cafe</button>
                    <button value="Dim Sum" onClick={handleCategory}>Dim Sum</button>
                    <button value="ramen" onClick={handleCategory}>Ramen</button>
                    <button value="bubble" onClick={handleCategory}>Boba</button>
                    <button value="Tea Rooms" onClick={handleCategory}>Tea Rooms</button>
                    <button value="noodles" onClick={handleCategory}>Noodles</button>
                    <button value="izakaya" onClick={handleCategory}>Izakaya</button>
                    <button value="steakhouse" onClick={handleCategory}>Steakhouse</button>
                    <button value="fried food" onClick={handleCategory}>Fried Food</button>
                    
                    
            </div>
           </div>
         </div>
    )
}

export default Filter