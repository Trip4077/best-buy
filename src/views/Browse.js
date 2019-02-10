import React from 'react';
import AmiiboCard from '../components/AmiiboCard';
import FilterMenu from '../components/FilterMenu';

export const Browse = props => {
  return(
    <div className='browse'>
      <FilterMenu />
      {props.data.map( item => <AmiiboCard key={item.image} item={item} />)}
    </div>
  );
}
