import * as React from "react";
import * as ReactDOM from "react-dom";
import BaseScreen from "./components/BaseScreen";

ReactDOM.render(
    
    <BaseScreen {...{title: "Hello how do you do?"}}></BaseScreen>,
    document.getElementById("example")
);