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
        const {name,price,openhour,closehour} = this.props.business;
        return(
            <div className='businesses-index-item'
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
                  <div>{price}</div>
                  <div>{`${openhour}-${closehour}`}</div>
        
                   <img className="profile-pic" src={this.props.business.photoUrl}/>
               </div>
             )
         }
    }

export default withRouter(IndexItem)