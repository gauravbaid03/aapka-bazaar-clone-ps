import React from 'react'

import "./Products.css"

function Products({data}) {
        return (
         <div className="col-12 col-md-6 col-lg-3  d-flex flex-column  align-items-center justify-content-between prod" >
         <span className="h-10 line-height-head mt-3 "><strong>{data.name}</strong></span>
            <img src={data.imageURL} className="h-40  w-100 " alt="here"></img>
            <small className="w-100 bg-lightgray h-20 line-height overflow-hidden p-2 text-justify">{data.description}</small>
            <div className="d-flex w-100 h-5 justify-content-between  mb-2">
                <span>MRP :{data.price}</span>
                <button className="btn btn-primary">Buy Now</button>
            </div>
         </div>
        )
    }

export default Products;