import React from 'react';
import {Link} from 'react-router-dom';
import '../scss/NavBar.scss'

function NavBar(){
    return(
        <nav>
            <Link to='/'><h2>Brewdog Beer Recipes</h2></Link>
            <Link to='/beers'><p>Beers</p></Link>
            <Link to='/beer'><p>FindBeer</p></Link>
        </nav>
    )
}

export default NavBar;