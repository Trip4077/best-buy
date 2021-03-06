import React from 'react';

import { connect } from 'react-redux';
import { getFav, deleteFav } from '../actions';

const toggleRelease = e => {
  e.target.parentNode.childNodes[1].classList.toggle('amiibo__release__dates--active');
}



const AmiiboCard = props => {
  const handleFavorite = e => {
    e.preventDefault();

    props.getFav(props.item, props.favorites)
  }

  const handleDelete = e => {
    e.preventDefault();
   const uniqueSrc = e.target.parentNode.childNodes[1].src;

   const indexArr = props.favorites.map((item, i) => item.image === uniqueSrc ? i : null )
   const index = indexArr.filter(item => typeof item === 'number')[0]

   const newArr = [ ...props.favorites ]

   props.deleteFav(index, newArr)
  }

  return(
    <div className='amiibo'>
      <h1>{props.item.name}</h1>
      <img src={props.item.image} alt={props.item.name} />
      <h4>{props.item.type}</h4>
      <h2><span>Amiibo Series:</span> {props.item.amiiboSeries}</h2>
      <h3><span>Game Series:</span> {props.item.gameSeries}</h3>

      <div className='amiibo__release'>
        <h3 onClick={toggleRelease}>Release Dates</h3>
        <ul className='amiibo__release__dates '>
          <li><span>Australia: </span><span>{props.item.release.au}</span></li>
          <li><span>Europe: </span><span>{props.item.release.eu}</span></li>
          <li><span>Japan: </span><span>{props.item.release.jp}</span></li>
          <li><span>North America: </span><span>{props.item.release.na}</span></li>
        </ul>
      </div>

      {props.fav ? <button onClick={handleDelete}>Remove</button>
                 : <button onClick={handleFavorite}>Add to Favorites</button>}
    </div>
  );
}

const mstp = state => {
  return {
    favorites: state.favoritesReducer.favorites
  }
}

export default connect(mstp, { getFav, deleteFav })(AmiiboCard);
