import * as types from '../actions/types';

const initialState = {
  articles: [],
  loading: false,
  error: null,
  selectedTopic: null
};

function reducer (prevState = initialState, action) {
  if (!action) return prevState;

  if (action.type === types.FETCH_ARTICLES_REQUESTS) {
    const newState = Object.assign({}, prevState);
    newState.loading = true;
    return newState;
  }

  if (action.type === types.FETCH_ARTICLES_SUCCESS) {
    const newState = Object.assign({}, prevState);
    newState.articles = action.payload;
    newState.loading = false;
    return newState;
  }

  if (action.type === types.FETCH_ARTICLES_ERRORS) {
    const newState = Object.assign({}, prevState);
    newState.articles = [];
    newState.loading = false;
    newState.error = action.error;
    return newState;
  }

  return prevState;
}

export default reducer;
