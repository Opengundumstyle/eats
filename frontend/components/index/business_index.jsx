import React,{ useState,useEffect} from 'react';
import IndexItem from './business_index_item'
import  Map from '../map/map';
import  Navbar from '../nav/navbar_container'
import Filter from '../filter/filter';

function BusinessIndex(props) {

    const [currentPage,setCurrentPage] = useState(1)
    const [itemsPerPage,setItemPerPage] = useState(10)
    
    useEffect(() => {
      props.getAll()
    }, []);

    let businessesArrLength = 0
    if (props.businesses)  businessesArrLength = props.businesses.length 

    const indexOfLastItem = currentPage * itemsPerPage
    const indexOfFirstItem = indexOfLastItem - itemsPerPage
    const currentItems = props.businesses.slice(indexOfFirstItem,indexOfLastItem)
    const totalPages = Math.ceil(businessesArrLength/itemsPerPage)
    const pageNumbers  = []

    for(let  i = 0; i < totalPages;i++){
         pageNumbers.push(i)
    }
    
    return (
      <div>
        <div className='list-nav'>
          <Navbar />
        </div>
        <div className='businesses-index-page-box'>
          <div className='filter-div'>
            <Filter props={props} />
          </div>
          <div className='buinesses-index-page'>
            {currentItems.map((business, index) => (
              <IndexItem
                business={business}
                index={index}
                key={business.id}
                price={business.price}
                openhour={business.openhour}
                closehour={business.closehour}
                rating={business.rating}
                review={business.review}
                website={business.website}
                categories={business.categoriesItem}
              />
            ))}
              <div className='pagination'>
               {
                pageNumbers.map(
                    number =>(
                        <button key ={number} onClick={()=>setCurrentPage(number+1)} className="pagination-button">
                                {number + 1}
                        </button>
                    )
                )
              }
             </div>
          </div>
        
          <div className='businesses-map'>
            <Map businesses={props.businesses} />
          </div>
        </div>
      </div>
    );
  }
  


  export default BusinessIndex;