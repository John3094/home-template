import { Component } from 'react';
import PropTypes from 'prop-types';

export class Section extends Component {
  render() {
    const { title, children } = this.props;
    return (
      <section>
        <h1>{title}</h1>
        {children}
      </section>
    );
  }
}

Section.propTypes = { title: PropTypes.string.isRequired };
