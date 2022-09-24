import React from "react";
import Nav from '../nav/navbar_container'
import IndexItem from "../index/business_index_item";
import  Map from '../map/map';

class SearchIndex extends React.Component{

    constructor(props){
        super(props);
        this.state ={
            businesses:[]
        }
    }

    componentDidMount(){
         console.log('what is the props',this.props)
        this.props.getBusinesses()
        .then(()=>this.setState(this.selectBusinesses()))
    }
    
    componentDidUpdate(prevProps) {
        const { location } = this.props
        if (location.search !== prevProps.location.search) {
            this.selectBusinesses()
        }
    }

   selectBusinesses(){
       const businesses = this.props.businesses
       const location = this.props.location
       let params = new URLSearchParams(location.search);
       let where = params.get("where").replace('%20', ' ').toLowerCase();
       let near = params.get("near").replace('%20', ' ').toLowerCase();
       let results = [];
       console.log('what is this businesses',businesses)
   
       if(near==='' || near ==="san francisco" || near==="sf"){
            if(where ===''){
                results = businesses
            }else{
                    results = businesses.filter(business =>(
                        business.name.toLowerCase().includes(where) || Object.keys(business.categoriesItem).toString().toLowerCase().includes(where)
                     ))
             }
      }
       this.setState({businesses:results})
   }


    render(){
    
        const  businesses = this.state.businesses;
        // console.log('what is this state',this.state)
        // console.log('businesses rendeing',businesses)
        return(
            <div>
                <Nav/>
            <div className="search-index-map">
                <div className="index-search-businesses-info" >
                 
                 <h1 className="result-title">All Results</h1>
                 {businesses.length === 0?
                    <p>We couldn't find a match. Please try another search.</p> :
                  <div> {businesses.map((business,index) =>
                    (<IndexItem
                           business={business}
                           index={index}
                           key={business.id}
                           price={business.price}
                           openhour={business.openhour}
                           closehour={business.closehour}
                           rating={business.rating}
                           review={business.review}
                           website= {business.website}
                           categories={business.categoriesItem}/>
                       ))} 
                     </div> 
                        }
                </div>
                  <div className='businesses-map'>
                      <Map businesses={businesses}/>
                  </div>
            </div>
        </div>
        )
    }
}

export default SearchIndex