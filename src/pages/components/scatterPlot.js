import React from 'react';
import XAxis from './xAxis'; // Import the XAxis component
import YAxis from './yAxis'; // Import the YAxis component
import Points from './points'; // Import the Points component

function ScatterPlot(props) {
    const { offsetX, offsetY, data, xScale, yScale, height, width } = props;

    // Adjust the positioning and inclusion of axis titles directly in the axis components
    // Ensure the axis labels ("Trip duration end in" and "Trip duration start from") are passed correctly
    return (
        <g transform={`translate(${offsetX}, ${offsetY})`}>
            <Points data={data} xScale={xScale} yScale={yScale} height={height} width={width} />
            <XAxis xScale={xScale} height={height} width={width} axisLabel={"Trip duration start from"} />
            <YAxis yScale={yScale} height={height} axisLabel={"Trip duration end in"} />
        </g>
    );
}

export default ScatterPlot; // Export the component for use in other files
