import React from "react";

export default React.createClass({

	getInitialState () {
		return {
			outcome: "???"
		};
	},

	prophesize () {

		var outcomes = [
			"It is certain", "It is decidedly so", "Without a doubt",
			"Yes definitely", "You may rely on it", "As I see it, yes",
			"Most likely", "Outlook good", "Yes", "Signs point to yes",
			"Reply hazy try again", "Ask again later", "Better not tell you now",
			"Cannot predict now", "Concentrate and ask again", "Don't count on it",
			"My reply is no", "My sources say no", "Outlook not so good",
			"Very doubtful"];

		this.setState({
			outcome: outcomes[Math.random() * outcomes.length | 0]
		});

	},

	render () {
		return <div className="widget mid">
			<div>{this.state.outcome}</div>
			<button onClick={this.prophesize}>🎱&nbsp;Roll</button>
		</div>
	}

});
