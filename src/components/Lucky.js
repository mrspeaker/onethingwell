import React from "react";

const randy = () => Math.random() * 30 | 0;

export default React.createClass({

  getInitialState () {
    return { nums: [randy(), randy(), randy(), randy(), randy()] };
  },

  render () {
    return <div className="Hello widget mid">
      <div>
        Your lucky numbers are { this.state.nums.join(",") }.
      </div>
    </div>
  }

});
