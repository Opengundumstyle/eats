import React from "react";
import {withRouter} from 'react-router-dom'
import { Link } from 'react-router-dom';
import Greeting from '../greeting/greeting_container'
import {FaRegStar} from 'react-icons/fa'

class ReviewForm extends React.Component{
   constructor(props){
      
     super(props);
     this.state =  {
      rating: 5,
      body: '',
     }
     this.handleSubmit = this.handleSubmit.bind(this)
     this.navigateToBusinessShow = this.navigateToBusinessShow.bind(this);
   }
  
   componentDidMount(){
     (this.props.formType === 'edit review')? 
     this.props.fetchReview(this.props.reviewId)
     .then(() => this.setState(
       {body:this.props.review.body,
        rating:this.props.review.rating})):null;
  } 



  handleSubmit(e){
     e.preventDefault()
     
     const businessId = this.props.businessId;
     const userId =  this.props.userId;
     const body = this.state.body
     const rating = this.state.rating

     const review = Object.assign({},{
      business_id: businessId,
      user_id:userId,
      body:body,
      rating:rating
     });


    
    if (this.props.formType === 'create review') {
          this.props.createReview(review)
          this.navigateToBusinessShow();
     }
     else{
         let newReview = Object.assign({},review,{id:this.props.match.params.reviewId})
          this.props.updateReview(newReview)
          this.navigateToBusinessShow();
         };
  }

  update(property) {
   return e => this.setState({ [property]: e.currentTarget.value });
 }

  navigateToBusinessShow() {
    const url = `/businesses/${this.props.businessId}`
    this.props.history.push(url);
 }

   
  render(){
        // console.log('rendering business',this.props.business)
        // console.log('rendering business name',this.props.business.name)
      
      
     return(

      <div>
            <div className="review-nav">
                <div> <Link to='/' className='log-box'><img className='nav-logo' src={window.logoURL} alt="logo"/></Link></div>
                <div className='nav-greeting'><Greeting/> </div>
            </div>
      
          <div className="review-form">
              <form onSubmit={this.handleSubmit}>
                     <label className="review-form-title">Restaurant rating</label>
                      <br />
                      <fieldset className="rating-selector">
                          <span className="star-group">
                          <input type="radio" value="1" id="radio5" name="rating" onChange={this.update("rating")} />
                                            <label htmlFor="radio5"><FaRegStar color="red"/></label>

                                            <input type="radio" value="2" id="radio4" name="rating" onChange={this.update("rating")} />
                                            <label htmlFor="radio4"><FaRegStar color="red"/></label>
                                            
                                            <input type="radio" value="3" id="radio3" name="rating" onChange={this.update("rating")} />
                                            <label htmlFor="radio3"><FaRegStar color="red"/></label>
                                            
                                            <input type="radio" value="4" id="radio2" name="rating" onChange={this.update("rating")} />
                                            <label htmlFor="radio2"><FaRegStar color="gold"/></label>
                                            
                                            <input type="radio" value="5" id="radio1" name="rating" onChange={this.update("rating")} />
                                            <label htmlFor="radio1"><FaRegStar color="gold"/></label>
                               </span>
                      </fieldset>

                      <input 
                       type="number" 
                       value={this.state.rating}
                       onChange={this.update("rating")}/>
                       <br />

                       <textarea 
                        value={this.state.body}
                         onChange={this.update("body")}
                        
                         />
                         <br />
                       <input type="submit" />
                        
              </form>
     
              <div>
                <button onClick={this.navigateToBusinessShow}>Cancel</button>
              </div>

           </div>

          </div>

        
     )
  }

}


export default withRouter(ReviewForm)