import * as types from './types';
import axios from  'axios';
import {ROOT} from '../../config';

export function fetchArticles () {
    return function (dispatch) {
        dispatch(fetchArticlesRequest());
        axios.get(`${ROOT}/articles`)
        .then(res => {
            console.log(res.data)
            dispatch(fetchArticlesSuccess(res.data.articles));
        })
        .catch(err => {
            console.log(err)
            dispatch(fetchArticlesError(err));
        });
    };
}

export function fetchArticlesByID (id) {
    console.log('calling fetchAriclesByID', id);
    return function (dispatch) {
        dispatch(fetchArticlesByIDRequest(id));
        console.log(`${ROOT}/articles/${id}`);
        axios.get(`${ROOT}/articles/${id}`)
        .then(res => {
            console.log('res', res.data)
            dispatch(fetchArticlesByIDSuccess(res.data.article));
        })
        .catch(err => {
            console.log(err)
            dispatch(fetchArticlesByIDError(err));
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

export function fetchArticlesByIDRequest (id) {
    return {
        type: types.FETCH_ARTICLES_BY_ID_REQUESTS,
        id: id
    };
}

export function fetchArticlesByIDSuccess (article) {
    return {
        type: types.FETCH_ARTICLES_BY_ID_SUCCESS,
        payload: article
    };
}

export function fetchArticlesByIDError (error) {
    return {
        type: types.FETCH_ARTICLES_BY_ID_ERROR,
        payload: error
    };
}

