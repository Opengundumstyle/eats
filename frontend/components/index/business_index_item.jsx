import React from 'react';
import {withRouter} from 'react-router-dom'

class IndexItem extends React.Component{
   constructor(props){
       super(props);
       this.handleClick = this.handleClick.bind(this)
   }
  
handleClick(){
    const businessId = this.props.business.id
     this.props.history.push(`/businesses/${businessId}`)
}

render(){
        const {name} = this.props.business;
        return(
            <div className='bench-index-item'
               onClick={this.handleClick}
               >
                 <h1>{name}</h1>
                 <div className="index-item-info">
                 <span className="index-item-category">Rating:</span>
                 <span className="index-item-copy">
                           No rating yet
                </span>
                 <span className="index-item-category">Descriptions:</span>
                 </div>
                   <img src='https://imagevars.gulfnews.com/2022/01/17/boba-tea-bubble-tea-stock_17e6738fd49_medium.jpg'/>
               </div>
             )
         }
    }

export default withRouter(IndexItem)