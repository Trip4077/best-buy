import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = props => {
  return(
    <nav className='nav-bar'>
       <NavLink to="/" className="normal" activeClassName="active" exact>Browse</NavLink>
       <NavLink to="/lists" className="normal" activeClassName="active" exact>Your List</NavLink>
    </nav>
  );
}

export default Navigation;
