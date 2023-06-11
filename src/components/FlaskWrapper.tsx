import { CLASS_NAMES } from "../constants";
import { IROFlaskWrapperCfg } from "../interfaces";
import { CSSProperties } from "react";
import Flask from "./Flask";
import '../css/Flask.css';

const FlaskWrapper = (props: IROFlaskWrapperCfg) => {
    const falskWrapperStyle: CSSProperties = {
        width: props.width,
        height: props.height,
        left: props.x,
        top: props.y,
    };

    return <div style = { falskWrapperStyle } className = { CLASS_NAMES.FlaskWrapper }>
        <Flask
            index = { props.index }
            ballCount = { props.ballCount }
            ballSize = { props.ballSize }
            balls = { props.balls }
        ></Flask>
    </div>
}

export default FlaskWrapper;
