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

reviewsNums(reviews){
    let counts = 0;
    for(let i = 0; i < reviews.length; i++){
        counts += 1;
    }
    return counts===0?'':counts
  }
  

getCategory(categories){
     let categoriesArr = Object.values(categories);
     let categoryList = [];
    for(let category of categoriesArr){
        categoryList.push(<div className='category-tag'>{category.category}</div>)
    }
       return categoryList
}

render(){
        const {business_rating,name,price,openhour,closehour,review,website} = this.props.business;
        const index = this.props.index
        const rating = this.getRating(business_rating)
        const categories = this.props.categories
        let categoriesList = this.getCategory(categories)
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
                displayStar = <div><FaRegStar color="gold"/><FaRegStar color="gold"/><FaRegStar color="gold"/><FaRegStar color="gold"/><FaRegStar color="gold"/></div>
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
                               <div className='index-item-name'>{`${index+1}. ${name}`}</div>
                                <div className="index-item-copy">
                                    {business_rating ? displayStar : ''}
                                </div>
                                <div className='categories-price'>
                                  <div className='categories-index'>{categoriesList}</div>
                                  <div>{price}</div> 
                                </div>
                                  <div className='hour-index'>
                                    <div> < FaRegClock color='green'/></div>
                                    <div>{`${openhour}-${closehour}`}</div>
                                  </div>
                                  <div className='review-index'>
                                    <div>< FaRegComment/></div>
                                    <div className='index-reviews'>{review?review:'no reviews yet..'}</div>
                                  </div>
                            </div>
                            <br />
                          <hr />
                           {
                            <div>
                                {website?<a href={website} target='_blank'><button className='index-website'>View&nbsp;Website</button></a>:''}
                            </div>
}
                </div>
             </div>
             
           )
         }
    }

export default withRouter(IndexItem)