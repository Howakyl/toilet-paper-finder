import React from 'react';
import tp1 from '../images/Untitled design (10).png';
import tp2 from '../images/Untitled design (11).png';
import tp3 from '../images/Untitled design (13).png';

const Store = (props) => {
    console.log('PROPS' , props)
    console.log(props.store.brands.brandName)
    return (
        <div className="container">
            {/* <p>{props.store.name}</p> */}
            <h1>Brands Sold by {props.store.name}</h1>
            <div className="storeCard">
                <div className="storeCard-img mr-4">
                   <img className="img-fluid" src={tp1} alt=""></img>
                </div>
                <h2>Charmin</h2>
            </div>
            <div className="storeCard">
                <div className="storeCard-img">
                    <img className="img-fluid" src={tp2} alt=""></img>
                </div>
                <h2>Scott 1000</h2>
            </div>
            <div className="storeCard">
                <div className="storeCard-img">
                    <img className="img-fluid" src={tp3} alt=""></img>
                </div>
                <h2>Angel Soft</h2>
            </div>
        </div>
    )
}
export default Store;