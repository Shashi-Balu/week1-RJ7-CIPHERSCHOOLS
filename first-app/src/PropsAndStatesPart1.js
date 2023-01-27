import React, { useState } from "react";

function PropsAndStatesPart1() {
    const [state, setState] = useState({ name: "Harman" });
    return (
        <div>
            <h1>The name is {state.name}</h1>
        </div>
    );
}

export default PropsAndStatesPart1;
