import { CLASS_NAMES } from "../constants";
import { IROBallCfg } from "../interfaces";
import '../css/Ball.css';
import { CSSProperties } from "react";

const Ball = (props: IROBallCfg) => {
    const ballStyle: CSSProperties = {
        backgroundColor: props.color,
        bottom: props.y,
        left: props.x,
    };

    return <div style = { ballStyle } className = { CLASS_NAMES.Ball }></div>
}

export default Ball;
