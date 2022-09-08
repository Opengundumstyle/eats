import React from 'react';
import IndexItem from './business_index_item'
import  Map from '../map/map';
import  Navbar from '../nav/navbar_container'


class BusinessIndex extends React.Component {

    componentDidMount() {
        this.props.getAll()
       .then(()=>console.log('businessIndex props',this.props.businesses))
       
    }
  
    render() {
        return (
            <div>
                 < Navbar/>
            <div className='businesses-index-page-box'>
                 <div className='buinesses-index-page'>
                 {this.props.businesses.map((business,index) =>(
                                 <IndexItem 
                                    business={business}
                                    index={index}
                                    key={business.id}
                                    price={business.price}
                                    openhour={business.openhour}
                                    closehour={business.closehour}
                                    rating = {business.rating}
                                    review = {business.review}
                                    website= {business.website}
                                    categories ={business.categoriesItem}/>
                                           ))}
                                
                    </div>
                  <div className='businesses-map'>
                      <Map businesses={this.props.businesses}/>
                      {/* <Map/> */}
                  </div>
               </div>
                    
            </div>
        )
    }
  }

export default BusinessIndex

