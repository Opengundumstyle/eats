import {Link} from 'react-router-dom';
import BusinessDetail from './business_detail';
import React from 'react';

const BusinessShow = ({business,businessId,getOne}) =>{
     const businesses = {
          [businessId]: business
     }
    return (
        <div>
            <h1>{business.name}</h1>
            <Link to="/">Back to view more businesses</Link>
        </div>
    )
}


export default BusinessShow


