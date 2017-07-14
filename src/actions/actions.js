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
    return function (dispatch) {
        dispatch(fetchArticlesByIDRequest(id));
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

export function fetchCommentsByArticleID (id) {
    return function (dispatch) {
        dispatch(fetchCommentsByArticleIDRequest(id));
        axios.get(`${ROOT}/articles/${id}/comments`)
        .then(res => {
            console.log('cooment res', res.data);
            dispatch(fetchCommentsByArticleIDSuccess(res.data.comments));
        })
        .catch(err => {
            console.log(err);
            dispatch(fetchCommentsByArticleIDError(err));
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

export function fetchCommentsByArticleIDRequest (id) {
    return {
        type: types.FETCH_COMMENTS_BY_ARTICLE_ID_REQUESTS,
        id: id
    };
}

export function fetchCommentsByArticleIDSuccess (comments) {
    return {
        type: types.FETCH_COMMENTS_BY_ARTICLE_ID_SUCCESS,
        payload: comments 
    };
}

export function fetchCommentsByArticleIDError (error) {
    return {
        type: types.FETCH_COMMENTS_BY_ARTICLE_ID_ERROR,
        payload: error
    };
}

export function addCommentsByArticleIDPost (id, comment) {
    return {
        type: types.ADD_COMMENTS_BY_ARTICLE_ID_POST,
        id: id,
        comment: comment
    };
}

export function addCommentsByArticleIDSuccess (comments) {
    return {
        type: types.ADD_COMMENTS_BY_ARTICLE_ID_SUCCESS,
        payload: comments 
    };
}

export function addCommentsByArticleIDError (error) {
    return {
        type: types.ADD_COMMENTS_BY_ARTICLE_ID_ERROR,
        payload: error
    };
}