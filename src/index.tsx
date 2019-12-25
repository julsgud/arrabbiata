import * as React from "react";
import * as ReactDOM from "react-dom";

import { Hola } from "./hola";

ReactDOM.render(
    <Hola compiler="TypeScript" framework="React" />,
    document.getElementById("example")
);