import React from 'react';
import Search from './Search';
import { NavLink } from 'react-router-dom';

const Navigation = props => {
  return(
    <nav className='nav-bar'>
       <Search />
       <NavLink to="/" className="normal" activeClassName="active" exact>Browse</NavLink>
       <NavLink to="/lists" className="normal" activeClassName="active" exact>Your List</NavLink>
    </nav>
  );
}

export default Navigation;
