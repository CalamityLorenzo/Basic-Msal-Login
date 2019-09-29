import React from 'react';
import { Link } from 'react-router-dom';

const NavigationLinks: React.FC =()=>{
    return(
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/redirect">Redirect</Link>
                </li>
                <li>
                    <Link to="/popup">Pop-up</Link>
                </li>
                <li>
                    <Link to="/app">MyAwesome-Application</Link>
                </li>
            </ul>
        </nav>
    );
}

export default NavigationLinks;