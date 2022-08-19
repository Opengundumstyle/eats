import React from "react";
import {withRouter} from 'react-router-dom'

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
 
    // if(this.props.formType === 'edit review') {
    //   const body =  this.props.location.state
    //    this.setState({body:body})
    //       }
     
     (this.props.formType === 'edit review')? 
      this.props.fetchReview(this.props.reviewId)
       .then(() => this.setState(
            {body:this.props.review.body,
            rating:this.props.review.rating})):null;
      
      // console.log('what props is this',this.props)
      // console.log('what is the review like',this.props.review)
  
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

    // console.log('what is the review like',review)
    
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

    console.log('what is the props here',this.props)
    console.log('what is this businessid',this.props.businessId)
    console.log('what is the state',this.state)
    console.log('what is the review like',this.props.review)
     
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