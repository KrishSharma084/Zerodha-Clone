import React from 'react';

function Hero() {
    return ( 
        <div className="container">
            <div className="row p-5 mt-5  text-center border-bottom">
                <h1 >
                Pricing
                </h1>
                <h3 className=' fs-4 text-muted mt-2'>
                    Free equity investments and flat ₹20 intraday and F&O trades
                </h3>
            </div>

            <div className="row p-5 mt-5 ">
                <div className="col-4 p-5">
                    <img src="media/images/pricingEquity.svg" alt="" style={{width:"110%"}}/>
                    <h1 className='fs-3 text-center'>Free equity delivery</h1>
                    <p className='text-center'>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
                </div>
                <div className="col-4 p-5">
                <img src="media/images/intradayTrades.svg" alt="" style={{width:"110%"}} />
                    <h1 className='fs-3'>Intraday and F&O trades</h1>
                    <p className='text-center'>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
                </div>
                <div className="col-4 p-5">
                    <img src="media/images/pricingEquity.svg" alt="" style={{width:"110%"}}/>
                    <h1 className='fs-3 text-center'>Free equity delivery</h1>
                    <p className='text-center'>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
                </div>
            </div>
            
        </div>
     );
}

export default Hero;