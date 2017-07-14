import React from 'react';
import PropTypes from 'prop-types';
import ArticleTitleBar from './ArticleTitleBar';
import ArticleText from './ArticleText';
import VoteButton from './VoteButton';
import NewComment from './NewComment';
import CommentList from './CommentList';
import {connect} from 'react-redux';
import * as actions from '../actions/actions';

class ArticlePage extends React.Component {

    componentDidMount () {
        this.props.fetchArticlesByID(this.props.match.params.article_id);
        this.props.fetchCommentsByArticleID(this.props.match.params.article_id);
    }

    render () {
        return (
            <div>
                <h1>Article</h1>
                <div>
                    <ArticleTitleBar title={this.props.selectedArticle.title}/>
                    <ArticleText body={this.props.selectedArticle.body}/>
                    <VoteButton />
                </div>
                <div>
                    <NewComment />
                </div>
                <div>
                    <CommentList selectedComments={this.props.selectedComments}/>
                </div>
            </div>
        );
    }
}

function mapDispatchToProps (dispatch) {
  return {
    fetchArticlesByID: (id) => {
      dispatch(actions.fetchArticlesByID(id));
    },
    fetchCommentsByArticleID: (id) => {
      dispatch(actions.fetchCommentsByArticleID(id));  
    }
  };
}

function MapStateToProps (state) {
  return {
    selectedArticle: state.selectedArticle,
    selectedComments: state.selectedComments,
    loading :state.loading
  };
}

export default connect(MapStateToProps, mapDispatchToProps) (ArticlePage);

ArticlePage.proptypes = {
    selectedArticle: PropTypes.object.isRequired,
    loading: PropTypes.bool.isRequired
};