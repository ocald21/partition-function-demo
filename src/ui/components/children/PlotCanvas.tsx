import Plot from "react-plotly.js";
import "../../../css/children/PlotCanvas.css";
import React from "react";
import VariableProps from "../../props/VariableProps";

interface PlotCanvasProps extends VariableProps {
    margin: { top: number, right: number, bottom: number, left: number }
    width: number
    height: number
}
 
const PlotCanvas: React.FC<PlotCanvasProps> = (props) => {
    const plotWidth = props.width - props.margin.left - props.margin.right;
    const plotHeight = props.height - props.margin.top - props.margin.bottom;

    return (
      <Plot
          data={[
            {type: 'bar', name: "", x: [1, 2, 3], y: [2, 5, 3]},
          ]}
          layout={ {width: plotWidth, height: plotHeight, title: 'Probability Distribution'} }
        />
    );
}
 
export default PlotCanvas;
