import React from 'react';
import PropTypes from 'prop-types';

class Comment extends React.Component {
    render() {
        return (
            <div>
                <h2>Comment by {this.props.comment.created_by}</h2>
                <p>{this.props.comment.created_at}</p>
                <p>{this.props.comment.votes}</p>
                <p>{this.props.comment.body}</p>
            </div>
        );
    }
}

export default Comment;

Comment.proptypes = {
    comment: PropTypes.object.isRequired
};