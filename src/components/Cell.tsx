import { CLASS_NAMES } from "../constants";
import { IROCellCfg } from "../interfaces";
import { CSSProperties } from "react";
import Flask from "./Flask";
import '../css/Flask.css';

const Cell = (props: IROCellCfg) => {
    const falskWrapperStyle: CSSProperties = {
        width: props.width,
        height: props.height,
        left: props.x,
        top: props.y,
    };

    return <div style = { falskWrapperStyle } className = { CLASS_NAMES.Cell }>
        <Flask
            index = { props.index }
            isActive = { props.isActive }
            ballCount = { props.ballCount }
            ballSize = { props.ballSize }
            balls = { props.balls }
        ></Flask>
    </div>
}

export default Cell;
