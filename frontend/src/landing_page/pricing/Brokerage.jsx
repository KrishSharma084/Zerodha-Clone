import React from 'react';
import { Link } from "react-router-dom";

function Brokerage() {
    return ( 
        <div className="container mt-5 border-top mb-5">
            <div className="row mt-5 p-3">
                
                <div className="col-7">
                    <Link to="/pricing" className='fs-5 text-center mb-3 p-5' style={{textDecoration:"none", marginLeft:"285px"}}>Brokerage Calculator</Link>
                    <ul className='mt-4 text-muted' style={{fontSize:"11px", lineHeight:"2.3"}}>
                        <li>Call & Trade and RMS auto-squareoff: Additional charges of ₹50 + GST per order.</li>
                        <li>Digital contract notes will be sent via e-mail.</li>
                        <li>Physical copies of contract notes, if required, shall be charged ₹20 per contract note. Courier charges apply.</li>
                        <li>For NRI account (non-PIS), 0.5% or ₹100 per executed order for equity (whichever is lower).</li>
                        <li>For NRI account (PIS), 0.5% or ₹200 per executed order for equity (whichever is lower).</li>
                        <li>If the account is in debit balance, any order placed will be charged ₹40 per executed order instead of ₹20 per executed order.</li>
                    </ul>
                </div>
                <div className="col-5">
                    <Link to="/pricing" className='fs-5 text-center mb-3 p-5' style={{textDecoration:"none", marginLeft:"175px"}}>List Of Charges</Link>
                </div>
            </div>
        </div>
     );
}

export default Brokerage;