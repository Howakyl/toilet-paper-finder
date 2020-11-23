import React from 'react';
import products from '../products';

class TpIndex extends React.Component {
    state = {
        productsArr: [
            {
                name: "Cottonelle Ultra Comfort",
                storeName: 'Target',
                url: "https://www.target.com/p/cottonelle-ultra-comfort-care-toilet-paper-mega-rolls/-/A-54605704?preselect=52248204#lnk=sametab",
                price: 17.99,
                stock: 100,
                ply: 2
            },{
                name: "Up & Up Soft & Strong",
                storeName: 'Target',
                url: "https://www.target.com/p/soft-strong-toilet-paper-mega-rolls-up-up-153/-/A-54278969?preselect=75558487#lnk=sametab",
                price: 9.19,
                stock: 20,
                ply: 2
            },{
                name: "The Home Store",
                storeName: 'Dollar Tree',
                url: "https://www.dollartree.com/the-home-store-1-ply-bath-tissue-1250-sheet-rolls/194247",
                price: 48.00,
                stock: null,
                ply: 1
            },{
                name: "Charmin Ultra Soft",
                storeName: 'SafeWay',
                url: "https://www.safeway.com/shop/product-details.970011733.html",
                price: 13.99,
                stock: 75,
                ply: 2
            }
        ]
    }
    // componentDidMount () {
        
    // }

    render () {
        console.log(this.state)
        return (
            <div>
                <h2>This is all of our TP!</h2>
                <ul>
                    <li>{this.state.productsArr[0].name}</li>
                </ul>
            </div>
        );
    };
};

export default TpIndex;