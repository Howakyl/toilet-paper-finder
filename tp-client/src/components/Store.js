import React from 'react';

const Store = (props) => {
    console.log('PROPS' , props)
    console.log(props.store.brands.brandName)
    return (
        <div className="container">
            {/* <p>{props.store.name}</p> */}
            <h1>Brands sold by {props.store.name}</h1>
            <div className="storeCard">
                <div className="storeCard-img mr-4"></div>
                <h2>Charmin</h2>
            </div>
            <div className="storeCard">
                <div className="storeCard-img"></div>
                <h2>Scott 1000</h2>
            </div>
            <div className="storeCard">
                <div className="storeCard-img"></div>
                <h2>Angel Soft</h2>
            </div>
        </div>
    )
}
export default Store;