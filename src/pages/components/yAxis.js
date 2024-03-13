function YAxis(props){
    const { yScale, height, axisLabel } = props;
    
    if (yScale) {
        // Check if yScale is linear or discrete
        if (typeof yScale.domain()[0] === 'number') {
            // Linear scale
            const yAxis = d3.axisLeft(yScale);
            
            return (
                <g>
                    <g ref={node => d3.select(node).call(yAxis)} />
                    {axisLabel && <text style={{ textAnchor: 'end', fontSize: '15px' }} transform={`translate(20, 0) rotate(-90)`}>{axisLabel}</text>}
                </g>
            );
        } else {
            // Discrete scale (scaleBand)
            const yAxis = d3.axisLeft(yScale);
            
            return (
                <g>
                    <g ref={node => d3.select(node).call(yAxis)} />
                    {axisLabel && <text style={{ textAnchor: 'end', fontSize: '15px' }} transform={`translate(20, 0) rotate(-90)`}>{axisLabel}</text>}
                </g>
            );
        }
    } else {
        return <g />;
    }
}

export default YAxis;