import React from "react";

export default React.createClass({

  getInitialState () {
    return {
      plain: "",
      rot13: ""
    };
  },

  onChange (e) {
    this.setState({
      plain: e.target.value,
      rot13: e.target.value.replace(/[a-zA-Z]/g, (c) => {
        return String.fromCharCode((c <= "Z" ? 90 : 122) >= (c = c.charCodeAt(0) + 13) ? c : c - 26);
      })
    });
  },

  render () {
    return <div className="widget mid">
      Plain: <input onChange={ this.onChange } value={ this.state.plain } type="text" className="mid" />
      <br/>
      ROT13: <input value={ this.state.rot13 } type="text" readOnly className="mid" />
    </div>
  }

});
