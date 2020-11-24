import React from 'react';
import { Link } from 'react-router-dom';

function StoreButton() {
  return (
<div className="container">
  <div className="storeButton">
    <Link className="storeLink" to="/TpIndex">Contact Target</Link>
  </div>
</div>
  )
}

export default StoreButton;