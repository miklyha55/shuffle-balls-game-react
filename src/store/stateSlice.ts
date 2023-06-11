import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IGameStateCfg, IROCurrentBallCfg } from "../interfaces";
import json from '../configs/levels.json';

let levelCount: number = 0;

const setInitialFlaskArray = () => {
    const initialFlaskArray: Array<Array<string>> = [];

    for (let index = 0; index < json[levelCount].config.flaskConfig.length; index++) {
        initialFlaskArray.push(json[levelCount].config.flaskConfig[index].balls);
    }

    return initialFlaskArray;
}

const initialState: IGameStateCfg = {
    levelCount,
    flaskArray: setInitialFlaskArray(),
    currentBallCfg: null,
};

const stateSlice = createSlice({
    name: "state",
    initialState,
    reducers: {
        setBall(state, action: PayloadAction<IROCurrentBallCfg>) {
            const currentCfg: IROCurrentBallCfg = action.payload;

            if(state.currentBallCfg) {
                if(currentCfg.ballIndex < json[levelCount].config.ballConfig.ballSize - 1) {
                    state.flaskArray[currentCfg.flaskIndex][currentCfg.ballIndex + 1]
                        = state.currentBallCfg.color;
                } else {
                    state.flaskArray[state.currentBallCfg.flaskIndex][state.currentBallCfg.ballIndex + 1]
                        = state.currentBallCfg.color;
                }
                state.currentBallCfg = null;
            } else {
                state.currentBallCfg = currentCfg;
                state.flaskArray[state.currentBallCfg.flaskIndex].splice(state.currentBallCfg.ballIndex, 1);
            }

        },

        setLevelCount(state, action: PayloadAction<number>) {
            levelCount = action.payload;
            state.levelCount = action.payload;
        },
    },
});

export const { setBall, setLevelCount } = stateSlice.actions;
export default stateSlice.reducer;

