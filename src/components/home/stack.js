import React from 'react'
import Grid from './grid'
const stack = () => {
    return(
        <div className="stack">
            <div className="row">
                <div className="col-md-6">
                    <div className="stack__blob">
                        <div className="stack__blob--text">
                            <h2><span className="front">Front.</span><br/><span className="text-stack">Stack</span></h2>
                            <p>Javascript, ReactJS, React Native, Laravel, WordPress, SASS, BEM.</p>
                        </div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="150%" height="800" viewBox="0 0 1397 1330">
                        <g id="_1" data-name="1" transform="translate(180.082 199.655)">
                            <path id="Caminho_68" data-name="Caminho 68" d="M797.91,126.861c138.8,44,337.367,40.7,396.746,114.026,59.758,73.329-19.289,224.02-23.071,398.543-4.16,174.889,66.944,373.611-4.917,449.873-71.861,76.629-286.686,30.8-441.754-15.032-155.446-45.831-250.756-91.661-406.58-74.429-155.446,17.6-370.65,97.894-454.613,45.1-83.585-52.8-35.93-239.052,45.764-367.378S106.913,479.206,117.125,322.649c9.834-156.191-85.1-398.909-38.956-483.971,46.52-85.428,234.871-12.833,368.38,69.3S659.105,82.5,797.91,126.861Z" transform="translate(0 0)" fill="#ff004d"/>
                        </g>
                    </svg>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="stack__skills d-flex flex-column">
                    <Grid/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default stack;