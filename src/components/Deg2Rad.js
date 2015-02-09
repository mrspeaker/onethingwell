import React from "react";

export default React.createClass({

	getInitialState () {
		return {
			deg: 0,
			rad: 0
		};
	},

	calc (deg, rad) {
		if (isNaN(deg) || isNaN(rad)) {
			deg = rad = "";
		} else if (deg == null) {
			deg = rad * (180 / Math.PI);
		} else {
			rad = deg * (Math.PI / 180);
		}
		this.setState({deg: deg, rad: rad});
	},

	onDegChange (e) {
		this.calc(parseInt(e.target.value, 10), null);
	},

	onRadChange (e) {
		this.calc(null, parseInt(e.target.value, 10));
	},

	render () {
		return <div className="widget">
			Degrees: <input onChange={this.onDegChange} value={this.state.deg} type="text" /><br/>
			Radians: <input onChange={this.onRadChange} value={this.state.rad} type="text" />
		</div>
	}
});
