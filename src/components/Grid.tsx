import { CLASS_NAMES } from "../constants";
import { IROConfigCfg } from "../interfaces";
import React, { CSSProperties } from "react";
import Flask from "./Flask";
import '../css/Grid.css';

const Grid = (props: IROConfigCfg) => {
    const width: number = props.gridConfig.width * props.gridConfig.col;
    const height: number = props.gridConfig.height * props.gridConfig.row;
    const gridStyle: CSSProperties = { width, height };

    const flaskArray: Array<React.ReactElement> = [];
    let index: number = 0;
    
    const createFlask = () => {
        for (let row = 0; row < props.gridConfig.row; row++) {
            for (let col = 0; col < props.gridConfig.col; col++) {
                if (index === props.flaskConfig.length) {
                    break;
                }

                flaskArray.push(
                <Flask
                    key = { index }
                    balls = { props.flaskConfig[index].balls }
                    x = { col * props.gridConfig.width }
                    y = { row * props.gridConfig.height }
                    width = { props.gridConfig.width }
                    height = { props.gridConfig.height }
                    ballCount = { props.ballConfig.ballCount }
                    ballSize = { props.ballConfig.ballSize }
                ></Flask>);
                index++;
            }
        }
        return flaskArray;
    }

    return <div style = { gridStyle } className = { CLASS_NAMES.Grid }>
        { createFlask() }
    </div>
}

export default Grid;
