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
        const {business_rating,name,price,openhour,closehour,review} = this.props.business;
     
        return(
            <div className='businesses-index-item'
               onClick={this.handleClick}
               >
                 <h1>{name}</h1>
                 <div className="index-item-info">
                 
                 <span className="index-item-copy">
                    {business_rating || 'No reviews yet'}
                </span>

                 </div>
                  <div>{price}</div>
                  <div>{`${openhour}-${closehour}`}</div>
                  <div>{review}</div>
                   <img className="profile-pic" src={this.props.business.photoUrl}/>
               </div>
             )
         }
    }

export default withRouter(IndexItem)