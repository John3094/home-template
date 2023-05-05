import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button } from './FeedbackOptionsStyled';

export class FeedbackOption extends Component {
  render() {
    return (
      <>
        {this.props.options.map(option => (
          <Button
            key={option}
            type="button"
            onClick={() => this.props.onLeaveFeedback(option)}
          >
            {option.charAt(0).toUpperCase() + option.slice(1)}
          </Button>
        ))}
      </>
    );
  }
}

FeedbackOption.propTypes = {
  options: PropTypes.array.isRequired,
};
