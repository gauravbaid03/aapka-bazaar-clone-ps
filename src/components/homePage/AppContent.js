import React, { useState, useEffect} from 'react'
import Categories from './Categories.js'
import './AppContent.css'

import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap/js/dist/carousel'

function App(){

    const [category,setProducts]=useState([]);
         useEffect(()=>{
            fetch("http://localhost:5000/categories")
            .then(resp=>resp.json())
            .then(setProducts);
          },[category])

    var showprods=[];

      for (let index = 0; index < category.length; index++) {
            showprods.push(<Categories data={category[index]}/>);

    }

    return(

        <div className="app-content">

            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
                    </ol>
                    <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img className="d-block w-100" src="static/images/offers/offer1.jpg" alt="First"/>
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src="static/images/offers/offer2.jpg" alt="Second slide"></img>
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src="static/images/offers/offer3.jpg" alt="Third slide"></img>
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src="static/images/offers/offer4.jpg" alt="Third slide"></img>
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src="static/images/offers/offer5.jpg" alt="Third slide"></img>
                    </div>
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next"href="#carouselExampleIndicators"role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
            </div>
            <br />

            <div>
                {showprods}
            </div>

        </div>
    )
  }

export default App;