import React from "react";

export default React.createClass({

	getInitialState () {
		return {
			val: 0
		};
	},

	input (e) {
		this.setState({val: e.target.value});
	},

	calc (e) {
		var v;
		if (e.target.dataset.name === "hex" ) {
			v = parseFloat(this.state.val, 10);
			if (isNaN(v)) {
				return;
			}
			this.setState({val: v.toString(16)})
		} else {
			v = parseInt(this.state.val, 16);
			if (isNaN(v)) {
				return;
			}
			this.setState({val: v})
		}
	},

	render () {
		return <div className="widget">
			<input onChange={this.input} value={this.state.val} type="text" className="mid" /><br/>
			<button onClick={this.calc}>Dec</button>
      <button onClick={this.calc} data-name="hex">Hex</button>
		</div>
	}
});
