import { CLASS_NAMES } from "../constants";
import React, { CSSProperties, useEffect } from "react";
import { IFlaskArray, IROConfigCfg } from "../interfaces";
import { useAppDispatch, useAppSelector } from "../store/hook";
import { nextLevel } from "../store/stateSlice";
import Cell from "./Cell";
import '../css/Grid.css';

const Grid = (props: IROConfigCfg) => {
    const flaskStoreArray: Array<IFlaskArray> = useAppSelector(state => state.root.flaskArray);

    const dispatch = useAppDispatch();
    const checkWinner = () => {
        let counter: number = 0;
        let isWinner: boolean = false;

        flaskStoreArray.forEach(flaskStore => {
            if(!flaskStore.isActive) {
                counter++;

                if(counter === props.ballConfig.ballCount) {
                    isWinner = true;
                }
            }
        });

        return isWinner;
    };

    useEffect(() => {
        checkWinner() && dispatch(nextLevel());
    }, [checkWinner()]);

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
                    <Cell
                        key = { index }
                        index = { index }
                        balls = { flaskStoreArray[index].balls }
                        isActive = { flaskStoreArray[index].isActive }
                        x = { col * props.gridConfig.width }
                        y = { row * props.gridConfig.height }
                        width = { props.gridConfig.width }
                        height = { props.gridConfig.height }
                        ballCount = { props.ballConfig.ballCount }
                        ballSize = { props.ballConfig.ballSize }
                    ></Cell>
                );

                index++;
            }
        }
        return flaskArray;
    };

    return <div style = { gridStyle } className = {
        CLASS_NAMES.Grid + " " + CLASS_NAMES.Level + Number(props.levelCount + 1) }>
        { createFlask() }
    </div>
}

export default Grid;
