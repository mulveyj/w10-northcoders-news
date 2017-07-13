import * as types from './types';
import axios from  'axios';
import {ROOT} from '../../config';

export function fetchArticles () {
    return function (dispatch) {
        dispatch(fetchArticlesRequest());
        axios.get(`${ROOT}/articles`)
        .then(res => {
            dispatch(fetchArticlesSuccess(res.data.articles));
        })
        .catch(err => {
            dispatch(fetchArticlesError(err));
        });
    };
}

export function fetchArticlesRequest () {
    return {
        type: types.FETCH_ARTICLES_REQUESTS
    };
}

export function fetchArticlesSuccess (articles) {
    return {
        type: types.FETCH_ARTICLES_SUCCESS,
        payload: articles
    };
}

export function fetchArticlesError (error) {
    return {
        type: types.FETCH_ARTICLES_ERROR,
        payload: error
    };
}

