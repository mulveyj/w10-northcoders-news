import React from 'react';
// import PropTypes from 'prop-types';

class NewComment extends React.Component {
    render() {
        return (
            <div>
                <textarea className="newComment" id="newComment" cols="15" rows="4">
                    Blah blah blah
                </textarea>
            </div>
        );
    }
}

export default NewComment;

NewComment.proptypes = {

};