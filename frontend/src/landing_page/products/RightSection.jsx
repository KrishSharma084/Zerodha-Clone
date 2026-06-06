import React from 'react';

function RightSection({
    imageURL,
    productName, 
    productDescription,
    learnMore
}) {
    return ( 
        <div className="constainer mt-5">
            <div className="row">
                <div className="col-1"></div>
                <div className="col-5 p-5" >
                    <h1 style={{marginLeft:"20px", marginTop:"120px"}}>{productName}</h1>
                    <p style={{marginLeft:"20px"}}>{productDescription}</p>
                    <a href={learnMore} style={{textDecoration:"none", marginLeft:"20px"}}>Learn More <i className="fa-solid fa-arrow-right-long"></i></a>
                </div>
                <div className="col-6">
                    <img src={imageURL} alt=""/>
                </div>
            </div>
        </div>
     );
}

export default RightSection;