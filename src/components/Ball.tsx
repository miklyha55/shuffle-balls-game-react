import { CLASS_NAMES } from "../constants";
import { IROBallCfg } from "../interfaces";
import { CSSProperties } from "react";
import '../css/Ball.css';

const Ball = (props: IROBallCfg) => {
    const ballStyle: CSSProperties = {
        backgroundColor: props.color,
        bottom: props.y,
        left: props.x,
    };

    return <div style = { ballStyle } className = { CLASS_NAMES.Ball }></div>
}

export default Ball;
