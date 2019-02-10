import React from 'react';
import AmiiboCard from '../components/AmiiboCard';
import Loader from '../components/Loader';

import { connect } from 'react-redux';

class List extends React.Component {
  render(){
    return(
      <section className='list'>
        {this.props.favorites.length ? this.props.favorites.map( item => <AmiiboCard key={item.image}  fav item={item} /> )
                                     : <h1 className='empty'>Add Favorites to Display</h1>}
      </section>
    );
  }
}

const mstp = state => {
  return {
    favorites: state.favoritesReducer.favorites
  }
}

export default connect(mstp, {})(List);
