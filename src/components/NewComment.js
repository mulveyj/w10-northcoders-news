import React from 'react';
// import PropTypes from 'prop-types';

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
}
    render() {
        return (
            <div>
                <form>
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

    // handleSubmit (newComment) {
    //     //send the state
    // }
}


export default NewComment;

NewComment.proptypes = {

};