import React from 'react';
import './NotFound.css';

const NotFound = () => {
    return (
        <div className="container404">
            <div className='notFound'>
            <h1 className='title404'>404</h1>
            <h2>Search result not found</h2>
            <p className=''>
                Please check that the Web site address is spelled correctly. Or go to our home page, 
               <br /> and use the menus to navigate to a specific section.
            </p>
        </div>
        </div>
    );
};

export default NotFound;