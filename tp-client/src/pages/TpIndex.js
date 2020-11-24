import React from 'react';
import Map from '../components/Map';
import { Link } from 'react-router-dom';

class TpIndex extends React.Component {
    state = {
        productsArr: [
            {
                name: "Target",
                usualStock: "Cottonelle, Charmin, Up & Up",
                id: 0,
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
                usualStock: "The Home Store, Strong and Soft",
                id: 1,
                brands: [{
                    brandName: "The Home Store",
                    url: "https://www.dollartree.com/the-home-store-1-ply-bath-tissue-1250-sheet-rolls/194247",
                price: 48.00,
                stock: 0,
                ply: 1
                }]
            },
            {
                name: 'Safeway',
                usualStock: "Charmin Ultra Soft, Cottonelle",
                id: 2,
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
            <>
                <section className="mapContainer">
                    <Map />
                </section>
            <div className=" container storesContainer">
                <h3>Products Near You:</h3>
                    <div className="">
                        {this.state.productsArr.map((store, index) => {
                            return (
                                <div className="mb-5 blue-thing" key={index}>
                                    <h4>{store.name}</h4>
                                    <div className="progress">
                                        <div className="progress-bar bg-info" role="progressbar" style={{width: `${store.brands[0].stock}%`}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                    <section className="storeIndex-buttonContainer">
                                        <span>Usually stocks: <small><em>{store.usualStock}</em></small></span>
                                        <Link to={`stores/${store.id}`} className="btn btn-secondary store-button">Store Details</Link>
                                    </section>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </>
        );
    };
};

export default TpIndex;