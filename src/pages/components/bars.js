

function Bars(props) {
    const {data, xScale, yScale, height} = props;

    //Note: 
    //the if(data){...} means when data is not null, the component will return the bars; otherwise, it returns <g></g>
    //we use the if ... else ... in this place so that the code can work with the SSR in Next.js;
    if (data) {
        return (
            <g>
                {data.map((d, i) => (
                    <rect
                        key={i}
                        x={xScale(d.start)}
                        y={yScale(d.end)}
                        width={xScale.bandwidth()}
                        height={height - yScale(d.end)} // Adjust height of the bars
                        fill="steelblue" // Color of the bars
                    />
                ))}
            </g>
        );
    } else {
        return <g />;
    }
}

export default Bars;