import React from "react";
import { max } from 'd3';
import { Points } from "./components/points";
import { XAxis } from "./components/xAxis";
import { YAxis } from "./components/yAxis";

function ScatterPlot(props){
    const {data, offsetX, offsetY, width, height, selectedPoint, onMouseEnter, onMouseOut} = props;
    const yScale = Scales.linear(0, max(data, (d)=> d.tripdurationE), height, 0);
    //task1: transform the <g> with the offsets so that the barchart can show properly 
    //task2: import the components needed and uncomment the components in the return 
    return <g>
            <Points data={data} xScale={xScale} yScale={yScale} height={height} width={width} />
            <YAxis yScale={yScale} height={height} axisLable={"Trip duration end in"}/>
            <XAxis xScale={xScale} height={height} width={width} axisLable={"Trip duration start from"}/> */
        </g>
}

export default ScatterPlot