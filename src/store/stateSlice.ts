import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IFlaskArray, IGameStateCfg, IROCurrentBallCfg } from "../interfaces";
import json from '../configs/levels.json';
import { SCENE_TYPE } from "../constants";

let levelCount: number = 0;

const setInitialFlaskArray = () => {
    const initialFlaskArray: Array<IFlaskArray> = [];

    for (let index = 0; index < json[levelCount].config.flaskConfig.length; index++) {
        initialFlaskArray.push(
        {
            isActive: true,
            balls: json[levelCount].config.flaskConfig[index].balls,
        });
    }

    return initialFlaskArray;
};

const initialState: IGameStateCfg = {
    levelCount,
    sceneType: SCENE_TYPE.Menu,
    flaskArray: setInitialFlaskArray(),
    currentBallCfg: null,
};

const stateSlice = createSlice({
    name: "state",
    initialState,
    reducers: {
        setBall(state, action: PayloadAction<IROCurrentBallCfg>) {
            const currentCfg: IROCurrentBallCfg = action.payload;
            const array: Array<IFlaskArray> = [...state.flaskArray];

            if(state.currentBallCfg) {
                if(currentCfg.ballIndex < json[levelCount].config.ballConfig.ballCount - 1) {
                    array[currentCfg.flaskIndex].balls[currentCfg.ballIndex + 1]
                        = state.currentBallCfg.color;
                } else {
                    array[state.currentBallCfg.flaskIndex].balls[state.currentBallCfg.ballIndex]
                        = state.currentBallCfg.color;
                }
                state.currentBallCfg = null;
            } else {
                state.currentBallCfg = currentCfg;
                array[state.currentBallCfg.flaskIndex].balls.splice(state.currentBallCfg.ballIndex, 1);
            }

            state.flaskArray = array;
        },

        nextLevel(state, action: PayloadAction) {
            state.levelCount = (state.levelCount < json.length - 1) ? state.levelCount + 1 : 0;
            levelCount = state.levelCount;
            state.flaskArray = setInitialFlaskArray();
        },

        switchScene(state, action: PayloadAction<string>) {
            state.sceneType = action.payload;
        },

        checkFlaskWinner(state, action: PayloadAction<number>) {
            const array: Array<IFlaskArray> = [...state.flaskArray];

            if(!array[action.payload].balls.length) {
                return state;
            }

            if (array[action.payload].balls.every((value, index, array) => value === array[0])
                && array[action.payload].balls.length === json[levelCount].config.ballConfig.ballCount) {
                array[action.payload].isActive = false;
            }

            state.flaskArray = array;
        },
    },
});

export const { setBall, nextLevel, switchScene, checkFlaskWinner } = stateSlice.actions;
export default stateSlice.reducer;

