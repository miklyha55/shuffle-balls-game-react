import { CLASS_NAMES } from "../constants";
import { IROFlaskCfg } from "../interfaces";
import { CSSProperties } from "react";
import Ball from "./Ball";
import '../css/Flask.css';

const Flask = (props: IROFlaskCfg) => {
    const falskWrapperStyle: CSSProperties = {
        width: props.width,
        height: props.height,
        left: props.x,
        top: props.y,
    };

    const falskStyle: CSSProperties = {
        width: props.ballSize,
        height: props.ballCount * props.ballSize,
    };

    const createBalls = () => {
        const ballArray: Array<React.ReactElement> = [];

        props.balls.forEach((key, index) => {
            ballArray.push(
                <Ball 
                    color = { key }
                    x = { 0 }
                    y = { index * props.ballSize } 
                ></Ball>
            );
        });

        return ballArray;
    }

    return <div style = { falskWrapperStyle } className = { CLASS_NAMES.FlaskWrapper }>
        <div style = { falskStyle } className = { CLASS_NAMES.Flask }>
            { createBalls() }
        </div>
    </div>
}

export default Flask;
