import React from 'react';
// import PropTypes from 'prop-types';

class VoteButton extends React.Component {
    render() {
        return (
            <div>
                <button>+</button>
                <p>VoteCount</p>
                <br />
                <button>-</button>
            </div>   
        );
    }
}

export default VoteButton;

VoteButton.proptypes = {

};