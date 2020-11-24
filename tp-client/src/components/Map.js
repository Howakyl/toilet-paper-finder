import React, { Component } from 'react';
import {Map, Marker, GoogleApiWrapper} from 'google-maps-react';
import icon from '../images/toilet123.png';

export class MapContainer extends Component {
  state = {
    productsArr: [
      {
          name: "Target",
          lat: 47.61,
          lng: -122.33,
          brands: [{
              brandName: "Cottonelle Ultra Comfort",
              url: "https://www.target.com/p/cottonelle-ultra-comfort-care-toilet-paper-mega-rolls/-/A-54605704?preselect=52248204#lnk=sametab",
              price: 17.99,
              stock: 100,
              ply: 2, 
          },
          {
              brandName: "Up & Up Soft & Strong",
                  url: "https://www.target.com/p/soft-strong-toilet-paper-mega-rolls-up-up-153/-/A-54278969?preselect=75558487#lnk=sametab",
                  price: 9.19,
                  stock: 20,
                  ply: 2
          },
      ]},
      {
          name: "Dollar Tree",
          lat: 47.64,
          lng: -122.31,
          brands: [{
              brandName: "The Home Store",
              url: "https://www.dollartree.com/the-home-store-1-ply-bath-tissue-1250-sheet-rolls/194247",
          price: 48.00,
          stock: null,
          ply: 1
          }]
      },
      {
          name: 'Safeway',
          lat: 47.59,
          lng: -122.30,
          brands: [{
              brandName: "Charmin Ultra Soft",
              url: "https://www.safeway.com/shop/product-details.970011733.html",
              price: 13.99,
              stock: 75,
              ply: 2
          }]
      }
    ]
  }
  render() {
          

  
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
      <div>
        <div>
        <Map google={this.props.google}
        initialCenter={{
          lat: 47.61, 
          lng: -122.33
        }}
        style={{width: '100%', height: '100%'}}
        zoom={12}
        onClick={this.onMapClicked}>
        <Marker 
            icon={{ icon, 
            scaledSize: new this.props.google.maps.Size(25, 25)}}
            />
          {this.state.productsArr.map((store, index) => {
            return ( 
              <Marker 
              key={index}
              position={{ lat:store.lat, lng:store.lng }}
              icon={{ url: icon, scaledSize: new this.props.google.maps.Size(100, 80)}}
              />
            )
          })}
        </Map>
        </div>
      </div>
    );
  }
}


export default GoogleApiWrapper({
  apiKey: 'AIzaSyBHLett8djBo62dDXj0EjCimF8Rd6E8cxg',


})(MapContainer)