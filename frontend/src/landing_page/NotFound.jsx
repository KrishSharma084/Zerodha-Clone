import React from 'react';
import { Link } from "react-router-dom";

function NotFound() {
    return ( 
         <div className='container p-5 mb-5'>
            <div className="row text-center">
                <h1 className='mt-5'>404 Not Found</h1>
                <p className='mt-3'>Sorry, the page you are looking for does not exist.</p>
                <Link style={{textDecoration:"none", color:"black"}} to="/">Go Home Page</Link>

            </div>

        </div>
     );
}

export default NotFound;