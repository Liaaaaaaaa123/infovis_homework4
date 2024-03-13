import React from 'react';
import Bars from './bars'; // 假设 Bars 组件在名为 'Bars.js' 的文件中
import YAxis from './yAxis'; // 假设 YAxis 组件在名为 'YAxis.js' 的文件中
import XAxis from './xAxis'; 

function BarChart(props){
    const {offsetX, offsetY, data, xScale, yScale, height, width} = props;
    //task1: transform the <g> with the offsets so that the barchart can show properly 
    //task2: import the components needed and uncomment the components in the return 
    return (
        <g transform={`translate(${offsetX},${offsetY})`}>
            <Bars data={data} xScale={xScale} yScale={yScale} height={height}/>
            <YAxis yScale={yScale} height={height} axisLable={"Bikers star from"}/>
            <XAxis xScale={xScale} height={height} width={width} /> 
        </g>
    );
}

export default BarChart;