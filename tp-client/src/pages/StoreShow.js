import React from 'react';
import './StoreShow.css';
import '../components/Store';
import Store from '../components/Store';
import Covid from '../components/Covid';
import StoreButton from '../components/StoreButton';


class StoreShow extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
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
            ]
        }
    }

    render () {
        const storesArr = this.state.productsArr.map((store) => {
            return (
            <>
                <Store store={store} key={store.id}/>
                <Covid />
                <StoreButton />
            </>
            )
        })
        console.log(storesArr)
        return (
            // <div className="container">
            //     {this.state.productsArr.map((store, index) => {
            //         return (
            //             <>
            //             <h1>Brands Sold by: {store.name}</h1>
            //             <div>
            //                 <h2>{store.brands[0].brandName}</h2>
            //             </div>
            //             </>
            //         )
            //     })}
            // </div>
            <div>{storesArr[0]}</div>
        )
        
    }
}

export default StoreShow;