import React, { Component } from "react";
import CircleDividedByChord from "circle-divided-by-chord";

export default class App extends Component {
  render() {
    return (
      <div className="">
        <CircleDividedByChord radius={300} datum1={30} datum2={70} />
      </div>
    );
  }
}
