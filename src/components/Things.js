import React from "react";

import Lucky from "./Lucky";
import Rot13 from "./Rot13";
import KeyCode from "./KeyCode";
import StopWatch from "./StopWatch";
import CurrentTime from "./CurrentTime";
import DecHexBin from "./DecHexBin";
import Deg2Far from "./Deg2Far";
import Deg2Rad from "./Deg2Rad";
import LeapYear from "./LeapYear";
import Magic8Ball from "./Magic8Ball";
import TextCase from "./TextCase";

export default React.createClass({
  render () {
    return <div className="Things">
      <Rot13 />
      <KeyCode />
      <StopWatch />
      <CurrentTime />
      <DecHexBin />
      <Deg2Far />
      <Deg2Rad />
      <LeapYear />
      <Lucky />
      <Magic8Ball />
      <TextCase />
    </div>
  }
});

