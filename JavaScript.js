const arc = d3.arc();

const width = 960;
const height = 500;
const centerX = width / 2;
const centerY = height / 2;
const strockWidth = 20;
const eyeOffsetX = 90;
const eyeOffsetY = 100;
const eyeRadius = 50;
const mouthArc = d3.arc()
    .innerRadius(0)
    .outerRadius(100)
    .startAngle(0)
    .endAngle(Math.PI / 2);

const App = () => (
    <svg width={width} height={height}>
        <g>
            <circle
                cx={centerX}
                cy={centerY}
                r={centerY - strockWidth / 2}
                fill="yellow"
                stroke="black"
                stroke-width={strockWidth}
            />
            <circle
                cx={centerX - eyeOffsetX}
                cy={centerY - eyeOffsetY}
                r={eyeRadius}
            />
            <circle
                cx={centerX + eyeOffsetX}
                cy={centerY - eyeOffsetY}
                r={eyeRadius}
            />
            <path d={mouthArc()} />


        </g>
    </svg>
);


const rootElement = document.getElementById("root")
ReactDOM.render(<App />, rootElement);