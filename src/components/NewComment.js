import React from 'react';
import PropTypes from 'prop-types';

class NewComment extends React.Component {
constructor (props) {
    super(props);
    this.state = {
        comment: {
            value: '',
            touched: false
        },
        name: {
            value: '',
            touched: false
        }
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
}
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <fieldset>
                        <label htmlFor="name-input">Name</label>
                        <input type="text" id="name-input" onChange={this.handleChange.bind(null, 'name')}/>
                    </fieldset>
                    <fieldset>
                        <label htmlFor="comment-input">Comment</label>
                        <input type="text" id="comment-input" onChange={this.handleChange.bind(null, 'comment')}/>
                    </fieldset>
                    <button type="submit">
                        Submit
                    </button>
                </form>
            </div>
        );
    }
    handleChange (field, e) {
        const newState = Object.assign({}, this.state, {
            [field]: {
                value: e.target.value,
                touched: true
            }
        });
    this.setState(Object.assign(newState));
    }

    handleSubmit (newComment) {
        this.props.postComment(this.props.article_id, newComment);
    }
}


export default NewComment;

NewComment.proptypes = {
    article_id: PropTypes.string.isRequired,
    postComment: PropTypes.func.isRequired
};