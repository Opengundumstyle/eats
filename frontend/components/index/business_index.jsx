import React from 'react';
import IndexItem from './business_index_item'
class BusinessIndex extends React.Component {

    componentDidMount() {
        this.props.getAll()
    }
  
    render() {
        return (
             <div>
                 {this.props.businesses.map(business =>(
                                 <IndexItem 
                                    business={business}
                                    key={business.id}
                                    price={business.price}
                                    openhour={business.openhour}
                                    closehour={business.closehour}/>
                                           ))}
             </div>
        )
    }
  }

export default BusinessIndex

