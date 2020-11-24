import React from 'react';
import { Link } from 'react-router-dom'
import img1 from '../images/toilet123.png'
import img2 from '../images/store.png'
import img3 from '../images/TP Fight.png'

const Home  = () => {
    return (
        <div>
            <h1>Welcome!</h1>
            <h3 className='homeTp'>View TP Availibility By:</h3>
            <div className="iconContainer">
                <div className="icon1" data-toggle="modal" data-target="#exampleModal">
                    <img src= {img1}/>
                    <h3>Brand</h3>
                </div>
                <div className="icon2" data-toggle="modal" data-target="#exampleModal">
                    <img src={ img2 } alt="toiletpaper"/>
                    <h3>Store</h3>
                </div>
            </div>
            <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">Allow "TP Tracker" to access your location while you are using the app?</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body">App explanation for While User App: "Your location is use to show relevant passes, set  up location suse, and improve accurate store ditances."</div>
                <div className="modal-footer">
                <Link to="/index">
                    <div className="modalBtns">Allow While Using App</div>
                </Link>
                <Link to='/index'>
                <div className="modalBtns">Allow Once</div>
                </Link>
                <Link to='/' data-dismiss="modal">
                <div className="modalBtns"><strong>Don't Allow</strong></div>
                </Link>
                    {/* <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button type="button" className="btn btn-primary">Save changes</button> */}
                </div>
                </div>
            </div>
</div>
            <div>
                <img className="img-fluid" src={ img3 } alt="fight"/>
            </div>
        </div>
    );
};

export default Home;