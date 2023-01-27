import React, { useState } from "react";
import ExportFile from "./ExportFile";

function FunctionalState() {
    const [state, setState] = useState({ name: "Functional State" });

    let setStateName = (name) => {
        setState({ ...state, name });
    };
    return (
        <div>
            <ExportFile name={state.name} setState={setStateName} />
        </div>
    );
}

export default FunctionalState;
