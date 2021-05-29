import React from 'react'

function Categories({data}){

    return(
        <div>

            <div className="card mb-3">
                <div className="row g-0">
                    <div className="col-md-4 fruit-basket">
                    <img src={data.imageUrl} alt={data.key}/>
                    </div>
                    <div className="col-md-8">
                    <div className="card-body card-body-odd">
                        <h3 className="card-title">{data.name}</h3>
                        <p className="card-text">{data.description}</p>
                        <button type="button" className="btn btn-danger">Explore {data.name}</button>
                    </div>
                    </div>
                </div>
            </div>
       </div>
        )
}

export default Categories;