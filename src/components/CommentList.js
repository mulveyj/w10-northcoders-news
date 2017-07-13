import React from 'react';
// import PropTypes from 'prop-types';
import Comment from './Comment';

class CommentList extends React.Component {
    render() {
        return (
            <div>
                <Comment />
            </div>
        );
    }
}

export default CommentList;

CommentList.proptypes = {

};