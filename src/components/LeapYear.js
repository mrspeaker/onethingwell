import React from "react";

export default React.createClass({

	getInitialState () {
		return {
			time: null
		};
	},

	update () {
		this.setState({time: (new Date()).toLocaleString()});
	},

	componentDidMount () {
		this.interval = setInterval(this.update, 1000);
		this.update();
	},

	componentWillUnmount () {
		clearInterval(this.interval);
	},

	render () {
		return <div className="widget">
			<div>Time</div>
			<div>{this.state.time}</div>
		</div>
	}

});
