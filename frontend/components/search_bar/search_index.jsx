import React from "react";
import Nav from '../nav/navbar_container'
import IndexItem from "../index/business_index_item";
import  Map from '../map/map';
import Filter from "../filter/filter";

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
       let price = params.get("price")

       let results = [];
       if(near==='' || near ==="san francisco" || near==="sf"){
            if(where ===''){
                results = businesses
            }else{
                    results = businesses.filter(business =>(
                        business.name.toLowerCase().includes(where) || Object.keys(business.categoriesItem).toString().toLowerCase().includes(where)
                     ))
             }
      }

      if(price!==''){
         results = businesses.filter(business=>(
              business.price.includes(price)
         ))
      }
       this.setState({businesses:results})
   }


    render(){
    
        const  businesses = this.state.businesses;
        return(
            <div>
                <Nav/>
            <div className="search-index-map">

                 <div className="filter-div">
                 <Filter props={this.props}/>
                 </div>

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