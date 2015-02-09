import React from "react";

export default React.createClass({

	getInitialState () {
		return {
			deg: 0
		};
	},

	onDegChange (e) {
		// TODO: should be able to do the calc in the state setting directly...
		// 'cause that's what react is for, yo.
		var val = e.target.value,
			deg = parseFloat(val, 10),
			far = "";
		if (!isNaN(deg)) {
			far = deg * (9/5) + 32;
		}
		this.setState({deg: val});
	},

	onFarChange (e) {
		var val = e.target.value,
			far = parseFloat(val, 10),
			deg = "";

		if (!isNaN(far)) {
			this.setState({deg: (far - 32) * (5/9)});
		}
	},

	render () {
		return <div className="widget">
			<input onChange={this.onDegChange} value={this.state.deg} type="text" />°C<br/>
			<input onChange={this.onFarChange} value={this.state.deg * (9/5) + 32} type="text" />°F<br/>
		</div>
	}

});
