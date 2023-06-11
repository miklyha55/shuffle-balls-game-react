import { CLASS_NAMES } from "../constants";
import { IROConfigCfg } from "../interfaces";
import React, { CSSProperties } from "react";
import { useAppSelector } from "../store/hook";
import FlaskWrapper from "./FlaskWrapper";
import '../css/Grid.css';

const Grid = (props: IROConfigCfg) => {
    const flaskStoreArray: Array<Array<string>> = useAppSelector(state => state.root.flaskArray);

    const width: number = props.gridConfig.width * props.gridConfig.col;
    const height: number = props.gridConfig.height * props.gridConfig.row;
    const gridStyle: CSSProperties = { width, height };

    const flaskArray: Array<React.ReactElement> = [];
    let index: number = 0;
    
    const createFlask = () => {
        for (let row = 0; row < props.gridConfig.row; row++) {
            for (let col = 0; col < props.gridConfig.col; col++) {
                if (index === flaskStoreArray.length) {
                    break;
                }
                
                flaskArray.push(
                    <FlaskWrapper
                        key = { index }
                        index = { index }
                        balls = { flaskStoreArray[index] }
                        x = { col * props.gridConfig.width }
                        y = { row * props.gridConfig.height }
                        width = { props.gridConfig.width }
                        height = { props.gridConfig.height }
                        ballCount = { props.ballConfig.ballCount }
                        ballSize = { props.ballConfig.ballSize }
                    ></FlaskWrapper>
                );

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
