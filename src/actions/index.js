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
