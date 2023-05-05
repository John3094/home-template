import { Component } from 'react';
import PropTypes from 'prop-types';

export class Section extends Component {
  render() {
    return (
      <section>
        <h1>{this.props.title}</h1>
        {this.props.children}
      </section>
    );
  }
}

Section.propTypes = { title: PropTypes.string.isRequired };
