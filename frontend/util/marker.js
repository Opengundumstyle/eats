/* global google:false */

class Marker {
    constructor(map){
      this.map = map;
      this.markers = {};
    }
  
    updateMarker(businesses){
       const businessesObj = {};

       businesses.forEach(business => businessesObj[business.id] = business);
  
      businesses
        .filter(business => !this.markers[business.id])
        .forEach(newBusinesses => this.createMarkerFromBusiness(newBusinesses, this.handleClick))
  
      Object.keys(this.markers)
        .filter(businessId => !businessesObj[businessId])
        .forEach((businessId) => this.removeMarker(this.markers[businessId]))
    }
  
    // create marker
     async createMarkerFromBusiness(business) {
      
          let currMap = this.map
          let position =  await this.codeAddress(business.address,currMap)
          const latLng = { lat: parseFloat(position.lat), lng: parseFloat(position.lng) }
        
          const marker = new google.maps.Marker({
            position:latLng,
            map: currMap,
            businessId: business.id
        });
       
    
      const content = '<div id="map-info-container">' + 
                      '<div id="map-info-pic-container">' +
                        '<img id="map-info-pic" src=' +
                          business.photoUrl +
                        '/>' + 
                        '<div id="map-info-title">' +
                          business.name +
                        '<div/>' + 
                        // '<div id="map-info-category">' +
                        //   business.category +
                        // '<div/>'
                      '<div/>'
                    '</div>'

       const infowindow = new google.maps.InfoWindow(
        {content:content,
        })
        this.markers[business.id] = marker;     
        this.markers[business.id].setMap(this.map)      
        marker.addListener('click',()=> this.handleClick(business));
        marker.addListener('mouseover',()=>infowindow.open(this.map,marker));
        marker.addListener('mouseout',()=>infowindow.close(this.map,marker));

      }


   // helper for updateMarkers
     removeMarker(marker){
     this.markers[marker.businessId].setMap(null);
      delete this.markers[marker.businessId];
    }

   // helper for createMarkerBusiness
    async codeAddress(address,map){ 
       let position = 0;
       let geocoder = new google.maps.Geocoder();
      await geocoder.geocode({'address':address}, function(results,status){
              if(status==="OK"){
                 map.setCenter(results[0].geometry.location);
                 let lat = results[0].geometry.location.lat()
                 let lng = results[0].geometry.location.lng()
                 position = {lat:lat,lng:lng}
              }
              // }else {
              //   alert('your gay: ' + status);
              // }
           })
           return position
       }
       

  }
  
  export default Marker;
  