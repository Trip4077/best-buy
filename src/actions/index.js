import axios from 'axios';

export const GET_ACTIVE = 'GET_ACTIVE';
export const GET_SUCCESS = 'GET_SUCCESS';
export const GET_FAIL = 'GET_FAIL';

export const getData = () => dispatch => {
  dispatch({ type: GET_ACTIVE });

  axios.get('http://www.amiiboapi.com/api/amiibo/')
        .then(res =>
          dispatch({ type: GET_SUCCESS, payload: res.data.amiibo })
        )
        .catch(err =>
          dispatch({ type: GET_FAIL, payload: err })
        )
}

export const ADD_FAVORITE = 'ADD_FAVORITE';
export const DELETE_FAVORITE = 'DELETE_FAVORITE';

export const getFav = (card, arr) => dispatch => {
  arr.push(card);
  dispatch({ type: ADD_FAVORITE, payload: arr })
}

export const deleteFav = (index, arr) => dispatch => {
  arr.splice(index, 1);
  dispatch({ type: DELETE_FAVORITE, payload: arr })
}

export const FILTER_ACTIVE = 'FILTER_ACTIVE';
export const FILTER_SUCCESS = 'FILTER_SUCCESS';
export const FILTER_CLEAR = 'FILTER_CLEAR';

export const filterData = (cat, search, data) => dispatch => {
  dispatch({ type: FILTER_ACTIVE });
  const keyArr = cat.split(' ')
  keyArr[0] = keyArr[0].toLowerCase();

  const key = keyArr.join('')
  const filtered = data.filter(item => item[key] === search);


  dispatch({ type: FILTER_SUCCESS, payload: filtered })
}

export const clearFilter = () => dispatch => {
  dispatch({ type: FILTER_ACTIVE });
  dispatch({ type: FILTER_CLEAR });
}

export const SEARCH_CHECK = 'SEARCH_CHECK';

export const searchCheck = (data, term) => dispatch => {
  const search = term.toLowerCase();
  const result = data.filter(item => item.name.toLowerCase().includes(search));

  dispatch({ type: SEARCH_CHECK, payload: result });
}
