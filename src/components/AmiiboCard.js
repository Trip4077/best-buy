import React from 'react';

const AmiiboCard = props => {
  return(
    <div>
      <h1>{props.item.name}</h1>
      <img src={props.item.image} alt={props.item.name} />
      <h4>{props.item.type}</h4>
      <h2>{`Amiibo Series: ${props.item.amiiboSeries}`}</h2>
      <h3>{`Game Series: ${props.item.gameSeries}`}</h3>
      
      <ul>
        <li>Release: </li>
        <li>{`Australia: ${props.item.release.au}`}</li>
        <li>{`Europe: ${props.item.release.eu}`}</li>
        <li>{`Japan: ${props.item.release.jp}`}</li>
        <li>{`North America: ${props.item.release.na}`}</li>
      </ul>
    </div>
  );
}

export default AmiiboCard;
