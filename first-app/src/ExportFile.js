import React from "react";

function ExportFile({ name = "", setState }) {
    return (
        <div>
            <h2>The export component: {name}</h2>
            <input type="text" onChange={(e) => setState(e.target.value)} />
        </div>
    );
}

export default ExportFile;
