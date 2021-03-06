import {BackgroundCircle} from './BackgroundCircle';

const arc = d3.arc();

const width = 960;
const height = 500;
const centerX = width / 2;
const centerY = height / 2;
const strockWidth = 20;
const eyeOffsetX = 90;
const eyeOffsetY = 100;
const eyeRadius = 50;
const mouthWidth = 20;
const mouthRadius = 140;

const mouthArc = d3.arc()
    .innerRadius(mouthRadius)
    .outerRadius(mouthRadius + mouthWidth)
    .startAngle(Math.PI / 2)
    .endAngle(Math.PI * 3 / 2);



const App = () => (
    <svg width={width} height={height}>
        <g transform={`translate(${centerX},${centerY})`}>
            <BackgroundCircle radius={centerY - strockWidth / 2} strockWidth= {strockWidth}/>
            <circle
                cx={- eyeOffsetX}
                cy={- eyeOffsetY}
                r={eyeRadius}
            />
            <circle
                cx={eyeOffsetX}
                cy={- eyeOffsetY}
                r={eyeRadius}
            />
            <path d={mouthArc()} />


        </g>
    </svg>
);


const rootElement = document.getElementById("root")
ReactDOM.render(<App />, rootElement);