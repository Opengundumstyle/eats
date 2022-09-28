import React from 'react';
import IndexItem from './business_index_item'
import  Map from '../map/map';
import  Navbar from '../nav/navbar_container'
import Filter from '../filter/filter';


class BusinessIndex extends React.Component {

    componentDidMount() {
        this.props.getAll()
    }

    render() {
        return (
            <div>
                 < Navbar/>
            <div className='businesses-index-page-box'>
                 <div className='filter-div'>
                    <Filter props={this.props}/>
                 </div>
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
                  </div>
               </div>
            </div>
        )
    }
  }

export default BusinessIndex

