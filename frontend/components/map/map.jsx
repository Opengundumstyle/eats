import React from 'react'
import Marker from '../../util/marker';

class Map extends React.Component{

  componentDidMount() {
    // set the map to show SF
    const mapOptions = {
      center: { lat: 37.7758, lng: -122.435 }, // this is SF
      zoom: 11.5
    };
    // wrap this.mapNode in a Google Map
    this.map = new google.maps.Map(this.mapNode, mapOptions);
    this.Marker = new Marker(this.map)
    this.Marker.updateMarker(this.props.businesses)
  }

  componentDidUpdate() {
    this.Marker.updateMarker(this.props.businesses)
  }
   render(){
       return (
          <div id="map-container" ref={map => this.mapNode = map } style={{width:342.51,height:690}}>
                Map
           </div>               
       )
   }
}


export default Map
