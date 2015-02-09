import React from "react";

export default React.createClass({

	getInitialState () {
		return {
			key: "-"
		};
	},

	componentDidMount () {
		document.addEventListener("keydown", this.onKey, false);
	},

	componentWillUnmount () {
		document.removeEventListener("keydown", this.onKey, false);
	},

	onKey (e) {
		this.setState({ key: e.keyCode });
	},

	render () {
		return <div className="widget">
			<div>Key Code: { this.state.key }</div>
			<span>Cmd</span>-
			<span>Shft</span>-
			<span>Alt</span>
    </div>
	}

});
