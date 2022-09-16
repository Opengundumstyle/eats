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
      name:'',
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
        
        this.props.fetchBusiness(this.props.match.params.businessId)
        .then((businessInfo)=>{
            this.setState({name:businessInfo.business.name})
        })
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
  
        console.log('what is the rating',this.state.rating)
     
     return(
      <div>
            <div className="review-nav">
                <div> <Link to='/' className='log-box'><img className='nav-logo' src={window.logoURL} alt="logo"/></Link></div>
                <div className='nav-greeting'><Greeting/> </div>
            </div>
          <div className="create-form-container">
            <label className="review-form-title">{this.state.name}</label>
                <div className="review-form">
                    <form onSubmit={this.handleSubmit}>
                    <div className="review-body-container">
                      <div className="review-rating-container">
                            <br />
                            <fieldset className="rating-selector">
                                <span className="star-group">
                                                  <input type="radio" value="5" id="radio5" name="rating" onChange={this.update("rating")} checked={parseInt(this.state.rating) === 5} />
                                                    <div className="star-item" id='five-star-item'>
                                                      <div className="five-star-comment">Great</div>
                                                      <label htmlFor="radio5" className="five-star" ><FaRegStar color="white" size='2rem'/></label>
                                                    </div>
                                                    
                                                  <input type="radio" value="4" id="radio4" name="rating" onChange={this.update("rating")} checked={parseInt(this.state.rating) === 4}/>
                                                  <div className="star-item" id='four-star-item'>
                                                   <div className="four-star-comment">Good</div>
                                                     <label htmlFor="radio4" className="four-star"><FaRegStar color="white" size='2rem'/></label>
                                                   </div>
                                                  
                                                  <input type="radio" value="3" id="radio3" name="rating" onChange={this.update("rating")} checked={parseInt(this.state.rating) === 3}/>
                                                   <div className="star-item" id='three-star-item'>
                                                      <div className="three-star-comment">OK</div>
                                                      <label htmlFor="radio3" className="three-star"><FaRegStar color="white" size='2rem'/></label>
                                                  </div>
                                                  
                                                  <input type="radio" value="2" id="radio2" name="rating" onChange={this.update("rating")} checked={parseInt(this.state.rating) === 2}/>
                                                  <div className="star-item" id='two-star-item'>
                                                      <div className="two-star-comment">Could've been better</div>
                                                      <label htmlFor="radio2" className="two-star"><FaRegStar color="white" size='2rem'/></label>
                                                  </div>

                                                  <input type="radio" value="1" id="radio1" name="rating" onChange={this.update("rating")} checked={parseInt(this.state.rating) === 1} />
                                                  <div className="star-item" id='one-star-item'>
                                                      <div className="one-star-comment">Not good</div>
                                                      <label htmlFor="radio1" className="one-star"><FaRegStar color="white" size='2rem'/></label>
                                                  </div>
                                    </span>
                                   
                            </fieldset>
                          </div>
                            <textarea 
                              value={this.state.body}
                              onChange={this.update("body")}
                              placeholder={`leave your review here for ${this.state.name}:)`}
                              />
                              <br />
                    
                                <div> 
                                    <input type="submit" className="review-button" />
                                </div>
                            </div>
                   
                    </form>
                                <div className='cancel-button'>
                                      <button onClick={this.navigateToBusinessShow} className='cancel'>Cancel</button>
                                </div>

               </div>

             </div>
          </div>

         )
      
  }

}


export default withRouter(ReviewForm)