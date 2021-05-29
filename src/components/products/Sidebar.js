import React, {useState, useEffect} from 'react'
import Products from './Products.js'

function Sidebar(data) {

    const [products,setProducts]=useState([]);

         useEffect(()=>{
            fetch("http://localhost:5000/products")
            .then(resp=>resp.json())
            .then(setProducts);
          },[products])

    var showprods=[];

      for (let index = 0; index < products.length; index++) {
        showprods.push(<Products data={products[index]}/>);
    }

    return (
        <div className="d-flex justify-content-center products-container">
            <div className="col-3 side-menu">
                <a className="list-group-item list-group-item-action active flex-fill" id="list-home-list" data-bs-toggle="list" href="#list-home" role="tab" aria-controls="home">Fruits and Vegetables</a>
                <a className="list-group-item list-group-item-action flex-fill" id="list-profile-list" data-bs-toggle="list" href="#list-profile" role="tab" aria-controls="profile">Bakery Cakes and Dairy</a>
                <a className="list-group-item list-group-item-action flex-fill" id="list-messages-list" data-bs-toggle="list" href="#list-messages" role="tab" aria-controls="messages">Beverages</a>
                <a className="list-group-item list-group-item-action flex-fill" id="list-settings-list" data-bs-toggle="list" href="#list-settings" role="tab" aria-controls="settings">Beauty and Hygiene</a>
                <a className="list-group-item list-group-item-action flex-fill" id="list-settings-list" data-bs-toggle="list" href="#list-settings" role="tab" aria-controls="settings">Baby Care</a>
            </div>
            <div className="container">
                <div className="row flex-fill">
                    {showprods}
                </div>
            </div>
        </div>
    )
}

export default Sidebar
