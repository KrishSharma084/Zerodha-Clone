import React from 'react';

function LeftSection({
    imageURL,
    productName, 
    productDescription, 
    tryDemo, 
    learnMore, 
    googlePlay, 
    appStore}) {
    return ( 
        <div className="container">
            <div className="row p-5">
                <div className="col-6">
                    <img src={imageURL} alt="image" />
                </div>
                <div className="col-6 p-5 mt-5">
                    <h1 style={{marginLeft:"20px"}}>{productName}</h1>
                    <p style={{marginLeft:"20px"}}>{productDescription}</p>
                    <div style={{marginLeft:"20px"}}>
                        <a href={tryDemo} style={{textDecoration:"none"}}>TryDemo <i className="fa-solid fa-arrow-right-long"></i></a>
                        <a href={learnMore} style={{marginLeft:"50px", textDecoration:"none"}}>Learn More <i className="fa-solid fa-arrow-right-long"></i></a> 
                    </div>
                    
                    <div className='mt-3' style={{marginLeft:"20px"}}>
                        <a href={googlePlay}><img src="/media/images/googlePlayBadge.svg" alt="google play" style={{marginRight:"30px"}}/></a>

                        <a href={appStore}><img src="media/images/appstoreBadge.svg" alt="app store" /></a>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default LeftSection;