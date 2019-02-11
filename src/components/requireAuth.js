import React from 'react';
import { connect } from 'react-redux';

export default ChildComponent => {
  class ComposedComponent extends React.Component {
    //Component just got rendered
    componentDidMount() {
      this.shouldNavigateAway();
    }

    //Component got updated
    componentDidUpdate() {
      this.shouldNavigateAway();
    }

    shouldNavigateAway() {
      if (!this.props.auth) {
        this.props.history.push('/');
      }
    }
    render() {
      return <ChildComponent {...this.props}/>;
    }
  }

  const mapStateToProps = state => {
    return { auth: state.auth };
  };

  return connect(mapStateToProps)(ComposedComponent);
};
