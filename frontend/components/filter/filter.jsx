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
                    <button value="ramen" onClick={handleCategory}>Ramen</button>
                    <button value="bubble" onClick={handleCategory}>Boba</button>
                    <button value="steakhouse" onClick={handleCategory}>Steakhouse</button>
                    <button value="fried food" onClick={handleCategory}>Fried Food</button>
                    <button value="desserts" onClick={handleCategory}>Desserts</button>
                    
            </div>
           </div>
         </div>
    )
}

export default Filter