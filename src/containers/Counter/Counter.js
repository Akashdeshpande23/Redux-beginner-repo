import React, { Component } from "react";
import { connect } from "react-redux";

import CounterControl from "../../components/CounterControl/CounterControl";
import CounterOutput from "../../components/CounterOutput/CounterOutput";
import * as actionCreators from "../../store/actions/index";

class Counter extends Component {
  render() {
    return (
      <div>
        <CounterOutput value={this.props.ctr} />
        <CounterControl
          label="Increment"
          clicked={this.props.onIncrementCounter}
        />
        <CounterControl
          label="Decrement"
          clicked={this.props.onDecrementCounter}
        />
        <CounterControl label="Add 8" clicked={this.props.onAddCounter} />
        <CounterControl
          label="Subtract 4"
          clicked={this.props.onSubtractCounter}
        />
        <hr />
        <button onClick={() => this.props.onStoreResult(this.props.ctr)}>
          STORE RESULT
        </button>
        <ul>
          {this.props.storedResults.map((strResult) => (
            <li
              key={strResult.id}
              onClick={() => this.props.onRemoveResult(strResult.id)}
            >
              {strResult.value}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ctr: state.ctr.counter,
    storedResults: state.res.results,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onIncrementCounter: () => dispatch(actionCreators.increment()),
    onDecrementCounter: () => dispatch(actionCreators.decrement()),
    onAddCounter: () => dispatch(actionCreators.add(8)),
    onSubtractCounter: () => dispatch(actionCreators.subtract(4)),
    onStoreResult: (res) => dispatch(actionCreators.store_result(res)),
    onRemoveResult: (id) => dispatch(actionCreators.remove_result(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
