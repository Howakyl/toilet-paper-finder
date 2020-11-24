import React from 'react';
import Map from '../components/Map';

class TpIndex extends React.Component {
    state = {
        productsArr: [
            {
                name: "Target",
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
                brands: [{
                    brandName: "Charmin Ultra Soft",
                    url: "https://www.safeway.com/shop/product-details.970011733.html",
                    price: 13.99,
                    stock: 75,
                    ply: 2
                }]
            }
            ]}
    
    

    render () {

        return (
            <div>
                <Map />
            <div className="app">
                <div className="storeContainer">
                    {this.state.productsArr.map((store, index) => {
                    return ( 
                        <h4>{store.name}</h4>
                    )
                    })}
                </div>
                </div>
            </div>
        );
    };
};

export default TpIndex;