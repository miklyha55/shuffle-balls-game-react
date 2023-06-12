import { ACTIVE_OPACITY, BALL_BOTTOM_INDEX, CLASS_NAMES, COLOR_NONE, WINNER_OPACITY } from "../constants";
import { checkFlaskWinner, setBall } from "../store/stateSlice";
import { ICurrentBallCfg, IROFlaskCfg } from "../interfaces";
import { useAppDispatch } from "../store/hook";
import { CSSProperties } from "react";
import Ball from "./Ball";
import '../css/Flask.css';

const Flask = (props: IROFlaskCfg) => {
    const ballCfgArray: Array<ICurrentBallCfg> = [];
    const dispatch = useAppDispatch();

    const falskStyle: CSSProperties = {
        width: props.ballSize,
        height: props.ballCount * props.ballSize,
        opacity: !props.isActive ? WINNER_OPACITY : ACTIVE_OPACITY,
    };

    const onClickHandler = () => {
        if(!props.isActive) {
            return;
        }

        if(!ballCfgArray.length) {
            dispatch(setBall({
                flaskIndex: props.index,
                ballIndex: BALL_BOTTOM_INDEX,
                color: COLOR_NONE,
            }));
            return;
        }

        dispatch(setBall(ballCfgArray[ballCfgArray.length - 1]));
        dispatch(checkFlaskWinner(props.index));
    };

    const createBalls = () => {
        const ballArray: Array<React.ReactElement> = [];

        props.balls.forEach((key, index) => {
            ballCfgArray.push({
                flaskIndex: props.index,
                ballIndex: index,
                color: key,
            });
            
            ballArray.push(
                <Ball 
                    key = { index }
                    color = { key }
                    x = { 0 }
                    y = { index * props.ballSize } 
                ></Ball>
            );
        });

        return ballArray;
    };

    return <div onClick = { onClickHandler } style = { falskStyle } className = { CLASS_NAMES.Flask }>
        { createBalls() }
    </div>
}

export default Flask;
