import React from 'react';
// import PropTypes from 'prop-types';
import ArticleTitleBar from './ArticleTitleBar';
import ArticleText from './ArticleText';
import VoteButton from './VoteButton';
import NewComment from './NewComment';
import CommentList from './CommentList';

class ArticlePage extends React.Component {
    render() {
        return (
            <div>
                <h1>Article</h1>
                <div>
                    <ArticleTitleBar />
                    <ArticleText />
                    <VoteButton />
                </div>
                <div>
                    <NewComment />
                </div>
                <div>
                    <CommentList />
                </div>
            </div>
        );
    }
}

export default ArticlePage;

ArticlePage.proptypes = {

};