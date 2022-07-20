import React from 'react';
import IndexItem from './business_index_item'
import  Map from '../map/map';

class BusinessIndex extends React.Component {

    componentDidMount() {
        this.props.getAll()
    }
  
    render() {
        return (
            <div>
                <div>
                 {this.props.businesses.map(business =>(
                                 <IndexItem 
                                    business={business}
                                    key={business.id}
                                    price={business.price}
                                    openhour={business.openhour}
                                    closehour={business.closehour}
                                    rating = {business.rating}
                                    review ={business.review}/>
                                           ))}
                                
               </div>
                      <Map/>
            
             </div>
        )
    }
  }

export default BusinessIndex

