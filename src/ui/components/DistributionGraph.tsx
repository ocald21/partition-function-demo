import React from "react";
import "../../css/components/DistributionGraph.css";
import VariableProps from "../props/VariableProps";
import PlotCanvas from "./children/PlotCanvas";

const DistributionGraph: React.FC<VariableProps> = (props) => {
    return (
        <div className="graph-formatting">        
            <PlotCanvas 
                margin={{
                    top: 10,
                    right: 10,
                    bottom: 10,
                    left: 10
                }} 
                width={600}
                height={400} 

                temperature={props.temperature}
                energyLevel={props.energyLevel}
                levelCount={props.levelCount}
            />
        </div>
    );
}

export default DistributionGraph;
