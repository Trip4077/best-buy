import React from 'react';

const toggleRelease = e => {
  e.target.parentNode.childNodes[1].classList.toggle('amiibo__release__dates--active');
}

const AmiiboCard = props => {
  return(
    <div className='amiibo'>
      <h1>{props.item.name}</h1>
      <img src={props.item.image} alt={props.item.name} />
      <h4>{props.item.type}</h4>
      <h2>{`Amiibo Series: ${props.item.amiiboSeries}`}</h2>
      <h3>{`Game Series: ${props.item.gameSeries}`}</h3>

      <div className='amiibo__release'>
        <h3 onClick={toggleRelease}>Release Dates</h3>
        <ul className='amiibo__release__dates '>
          <li>{`Australia: ${props.item.release.au}`}</li>
          <li>{`Europe: ${props.item.release.eu}`}</li>
          <li>{`Japan: ${props.item.release.jp}`}</li>
          <li>{`North America: ${props.item.release.na}`}</li>
        </ul>
      </div>
    </div>
  );
}

export default AmiiboCard;
