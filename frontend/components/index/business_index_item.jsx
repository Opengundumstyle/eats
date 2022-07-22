import React from 'react';
import {withRouter} from 'react-router-dom'
import {FaRegStarHalf,FaRegStar} from 'react-icons/fa'
import { FaRegComment,FaRegClock } from "react-icons/fa";
class IndexItem extends React.Component{

   constructor(props){
       super(props);
       this.handleClick = this.handleClick.bind(this)
   }


handleClick(){
    const businessId = this.props.business.id
     this.props.history.push(`/businesses/${businessId}`)
}

getRating(rating){
     let newRating  = Math.floor(rating)
     if(rating - newRating >= 0.5) {
           newRating = newRating + 0.5
     }

     return newRating

}

render(){
        const {business_rating,name,price,openhour,closehour,review,website} = this.props.business;
        const rating = this.getRating(business_rating)
        let displayStar 
     
        switch (rating) {
            case 1:
              displayStar = <FaRegStar color="yellow"/>
                break;
            case 1.5:
                displayStar = <div><FaRegStar color="red"/><br /><FaRegStarHalf color="yellow"/></div>
                break;
            case 2:
                displayStar = <div><FaRegStar color="red"/><FaRegStar  color="red"/></div>
                break;
            case 2.5: 
                 displayStar = <div><FaRegStar color="red"/><FaRegStar color="red"/><FaRegStarHalf color="red"/></div>
                 break;
            case 3:
                displayStar = <div><FaRegStar color="red"/><FaRegStar color="red"/><FaRegStar color="red"/></div>
                break;
            case 3.5:
                displayStar = <div><FaRegStar color="red"/><FaRegStar color="red"/><FaRegStar color="red"/><FaRegStarHalf color="red"/></div>
                break;
             case 4:
                 displayStar = <div><FaRegStar color="red"/><FaRegStar color="red"/><FaRegStar color="red"/><FaRegStar color="gold"/></div>
                break;   
             case 4.5:
                displayStar = <div><FaRegStar color="red"/><FaRegStar color="red"/><FaRegStar color="red"/><FaRegStar color="gold"/><FaRegStarHalf color="gold"/></div>
                break;
             case 5:
                displayStar = <div><FaRegStar color="yellow"/><FaRegStar color="yellow"/><FaRegStar color="yellow"/><FaRegStar color="yellow"/><FaRegStar color="yellow"/></div>
                break;
            default:
                break;
        }
        

        return(
            <div className='businesses-index-item'
               onClick={this.handleClick} >

                <div className='index-image-div'>
                    <img className="profile-pic" src={this.props.business.photoUrl}/>
                </div>
              

                <div className='index-info-div'>
                            <div className="index-item-info">
                               <h1>{name}</h1>
                                <span className="index-item-copy">
                                    {business_rating ? displayStar : 'No reviews yet'}
                                </span>
                                  <div>{price}</div> 

                                  <div className='hour-index'>
                                    <div> < FaRegClock color='green'/></div>
                                    <div>{`${openhour}-${closehour}`}</div>
                                  </div>
                                  <div className='review-index'>
                                    <div>< FaRegComment/></div>
                                    <div className='index-reviews'>{review}</div>
                                  </div>
                            </div>
                            <br />
                          <hr />
                            <div>
                                <button className='index-website' src={website}>Website</button> 
                            </div>
                </div>
             </div>
             
           )
         }
    }

export default withRouter(IndexItem)