
import React, {useEffect, useState} from 'react';

const SideBar = () =>{
    return (
        <div className='SideBar'>
            <div className='Header'>
                <h1 className='header-title'>Breweries</h1>
            </div>

            <div className='Menu'>
                <li className='Menu-item'>
                    <h2>🏠 Dashboard</h2>
                </li>
                <li>
                    <h2>🔍  Search</h2>
                </li>
                <li>
                    <h2>ℹ️ About</h2>
                </li>
            </div>

        </div>
    )
}

export default SideBar;