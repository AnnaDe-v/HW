import React from 'react'
import Header from './Header'
import RoutesC from './RoutesC'
import {BrowserRouter} from 'react-router-dom';

function HW5() {
    return (
        <div>
            <BrowserRouter>
                <Header/>
                <RoutesC/>
            </BrowserRouter>
        </div>
    )
}

export default HW5
