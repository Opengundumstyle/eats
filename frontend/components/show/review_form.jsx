import React from "react";
import {withRouter} from 'react-router-dom'

class ReviewForm extends React.Component{
   constructor(props){
    
     super(props);
     this.state =  {
      rating: 5,
      body: ''
     }
     this.handleSubmit = this.handleSubmit.bind(this)
     this.navigateToBusinessShow = this.navigateToBusinessShow.bind(this);
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
  
     this.props.createReview(review);
     
     this.navigateToBusinessShow();
  }

  update(property) {
   return e => this.setState({ [property]: e.currentTarget.value });
 }

  navigateToBusinessShow() {
   const url = `/businesses/${this.props.match.params.businessId}`
   this.props.history.push(url);
 }

   
  render(){
    console.log('props',this.props)
     return(
          <div className="review-form">
              <form onSubmit={this.handleSubmit}>
                
                     <label>Rating</label>

                      <br />
                      <input 
                       type="number" 
                       value={this.state.rating}
                       onChange={this.update("rating")}/>
                   
                       <label>Comment</label>
                       <br />
                       <textarea cols="30"
                        rows="10"
                        value={this.state.body}
                         onChange={this.update("body")}
                         />
                         <br />
                         <input type="submit" />
                        
              </form>
              <button onClick={this.navigateToBusinessShow}>Cancel</button>
          </div>
     )
  }

}


export default withRouter(ReviewForm)