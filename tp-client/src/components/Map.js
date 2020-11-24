import React, { Component } from 'react';
import {Map, Marker, GoogleApiWrapper} from 'google-maps-react';



export class MapContainer extends Component {
  render() {
        <Marker 
          position={{  lat: 47.61, lng: -122.33 }} 
          icon={{scaledSize: new this.props.google.maps.Size(25, 25)}}
          />
          

  
    // let tpMarkers = this.props.map( ( elem, index ) => 
      // (
      //   <Marker 
      //     // key={index}
      //     // title={elem.properties.place}
      //     // name={elem.properties.place}
      //     // icon={{scaledSize: new this.props.google.maps.Size(25, 25)}}
      //     // position={{ 
      //     //   lat: elem.geometry.coordinates[1], 
      //     //   lng: elem.geometry.coordinates[0] 
      //     // }}
      //     postion={{  lat: 47.61, 
      //   lng: -122.33 }}
      //   />
      // )
    // );

    return (
      <div className="mapContainer">
      <Map google={this.props.google}
      initialCenter={{
        lat: 47.61, 
        lng: -122.33
      }}
      style={{width: '60%', height: '80%'}}
      zoom={3}
      onClick={this.onMapClicked}>
      </Map>
      </div>
    );
  }
}


export default GoogleApiWrapper({
  apiKey: 'AIzaSyBHLett8djBo62dDXj0EjCimF8Rd6E8cxg',


})(MapContainer)