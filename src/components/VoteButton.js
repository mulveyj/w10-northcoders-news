import React from 'react';
import PropTypes from 'prop-types';

class VoteButton extends React.Component {
    render() {
        return (
            <div>
                <button>+</button>
                <br/>
                {this.props.voteCount}
                <br />
                <button>-</button>
            </div>   
        );
    }
}

export default VoteButton;

VoteButton.proptypes = {
    votes: PropTypes.number.isRequired
};