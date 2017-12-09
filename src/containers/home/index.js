import React from 'react';
import { push } from 'react-router-redux';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Button from 'react-toolbox/lib/button/Button';
import {
  increment,
  incrementAsync,
  decrement,
  decrementAsync,
} from '../../modules/counter';

export const HomeComponent = props => (
  <div>
    <h1>Home</h1>
    <p>Count: {props.count}</p>
    <p>
      <Button raised primary onClick={props.increment} disabled={props.isIncrementing}>
        Increment
      </Button>
      <Button raised primary onClick={props.incrementAsync} disabled={props.isIncrementing}>
        Increment Async
      </Button>
    </p>

    <p>
      <Button raised primary onClick={props.decrement} disabled={props.isDecrementing}>
        Decrementing
      </Button>
      <Button raised primary onClick={props.decrementAsync} disabled={props.isDecrementing}>
        Decrement Async
      </Button>
    </p>

    <p>
      <Button raised primary onClick={() => props.changePage()}>Go to about page via redux</Button>
    </p>
  </div>
);

HomeComponent.propTypes = {
  count: PropTypes.number.isRequired,
  increment: PropTypes.func.isRequired,
  isIncrementing: PropTypes.bool.isRequired,
  incrementAsync: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired,
  isDecrementing: PropTypes.bool.isRequired,
  decrementAsync: PropTypes.func.isRequired,
  changePage: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  count: state.counter.count,
  isIncrementing: state.counter.isIncrementing,
  isDecrementing: state.counter.isDecrementing,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  increment,
  incrementAsync,
  decrement,
  decrementAsync,
  changePage: () => push('/about-us'),
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomeComponent);
