import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { pushState } from 'redux-router';
// import { resetErrorMessage } from '../actions';

const mapStateToProps = state => ({
  errorMessage: state.errorMessage,
  inputValue: state.router.location.pathname.substring(1)
});

@connect(mapStateToProps, { /*resetErrorMessage,*/ pushState })
export default class App extends Component {

  static get propTypes() {
    return {
      // Injected by React Redux
      errorMessage: PropTypes.string,
      resetErrorMessage: PropTypes.func.isRequired,
      pushState: PropTypes.func.isRequired,
      inputValue: PropTypes.string.isRequired,
      // Injected by React Router
      children: PropTypes.node
    };
  }

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleDismissClick = this.handleDismissClick.bind(this);
  }

  handleDismissClick(e) {
    this.props.resetErrorMessage();
    e.preventDefault();
  }

  handleChange(nextValue) {
    this.props.pushState(null, `/${nextValue}`);
  }

  renderErrorMessage() {
    const { errorMessage } = this.props;
    if (!errorMessage) {
      return null;
    }

    return (
      <p style={{ backgroundColor: '#e99', padding: 10 }}>
        <b>{errorMessage}</b>
        {' '}
        (<a href="#"
            onClick={this.handleDismissClick}>
          Dismiss
        </a>)
      </p>
    );
  }

  render() {
    const { children, inputValue } = this.props;
    return (
      <div>
        <Explore value={inputValue}
                 onChange={this.handleChange} />
        <hr />
        {this.renderErrorMessage()}
        {children}
      </div>
    );
  }

}
