import React from "react";
import "../../css/components/DistributionGraph.css"
import VariableProps from "../props/VariableProps";

const DistributionGraph: React.FC<VariableProps> = (props) => {
    return (
        <div className="graph-formatting">
            <p className="vertical-axis-label">
                n
            </p>
        </div>
    );
}

export default DistributionGraph;
