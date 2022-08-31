import React from 'react'
import { withRouter } from 'react-router-dom';
import Marker from '../../util/marker';

class Map extends React.Component{

  componentDidMount() {
    // set the map to show SF
    const mapOptions = {
      center: { lat: 37.7758, lng: -122.435 }, // this is SF
      zoom: 13
    };
   
    // wrap this.mapNode in a Google Map
    this.map = new google.maps.Map(this.mapNode, mapOptions);
    this.Marker = new Marker(this.map)
    
    console.log('what is the marker 1',this.Marker)
    this.Marker.updateMarker(this.props.businesses)
    console.log('what is the marker 2',this.Marker)
  }

  componentDidUpdate() {
    this.Marker.updateMarker(this.props.businesses)
  }

   render(){
    console.log('wat is the props in map ',this.props)
    console.log('testing the map 2',this.props.businesses)

       return(
          <div id="map-container" ref={map => this.mapNode = map }>
                Map
           </div>               
       )
   }
  
}


    export default Map
