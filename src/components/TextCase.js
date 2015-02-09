import React from "react";

export default React.createClass({

	getInitialState () {
		return {
			text: "",
			transform: "title"
		};
	},

	transform (text) {

		var text = text || this.state.text,
				transform = this.state.transform;

		switch (transform) {
		case "title":
			text = text.split(" ").map(function (word) {
				return word.slice(0, 1).toUpperCase() + "" + word.slice(1);
			}).join(" ");
			break;
		case "upper":
			text = text.toUpperCase();
			break;
		case "lower":
			text = text.toLowerCase();
			break;
		}
		this.setState({text: text});
	},

	onChange (e) {
		this.transform(e.target.value);
	},

	textToTitle () {
		this.setState({transform: "title"});
		this.transform();
	},

	textToUpper () {
		this.setState({transform: "upper"});
		this.transform();
	},

	textToLower () {
		this.setState({transform: "lower"});
		this.transform();
	},

	render () {
		return <div className="widget mid">
			<input onChange={this.onChange} value={this.state.text} type="text" className="mid" /><br/>
			<input type="radio" name="transform" onClick={this.textToTitle}>TitleCase</input>
			<input type="radio" name="transform" onClick={this.textToUpper}>UPPER</input>
			<input type="radio" name="transform" onClick={this.textToLower}>lower</input>
		</div>;
	}

});
