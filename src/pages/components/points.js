function Points(props) {
    const { data, xScale, yScale, height, width } = props;

    if (data) {
        return (
            <g>
                {data.map((d, i) => (
                    <circle
                        key={i}
                        cx={xScale(d.x)}
                        cy={yScale(d.y)}
                        r={5} // radius of each point
                        fill="steelblue" // color of each point
                    />
                ))}
            </g>
        );
    } else {
        return <g />;
    }
}

export default Points;