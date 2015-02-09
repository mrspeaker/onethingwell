import React from "react";

export default React.createClass({

	getInitialState () {
		return {
			time: 0,
			running: false,
		};
	},

	tick () {
		this.setState({ time: Date.now() - this.state.startTime });
	},

	onStop () {
		clearInterval(this.interval);
	},

	onStart () {
		var running = this.state.running;
		if (running) {
			this.onStop();
		} else {
			if (this.state.time == 0) {
				this.state.startTime = Date.now();
			}
			this.interval = setInterval(this.tick, 50);
		}
		this.setState({running: !running});
	},

	onReset () {
		this.onStop();
		this.setState({ time: 0 });
	},

	render () {
		return <div className="widget">
			<p className="title">StopWatch</p>
			<input value={ (this.state.time / 1000).toFixed(3) } type="text" readOnly className="mid" /><br/>
			<button onClick={this.onStart}>{this.state.running ? "stop" : "start"}</button>
			<button onClick={this.onReset}>reset</button>
		</div>;
	}
});
