import { useAppSelector } from "../../store/hook";
import { CLASS_NAMES } from "../../constants";
import json from '../../configs/levels.json';
import Grid from "../Grid";
import React from "react";
import '../../css/Level.css';

const Level = () => {
    const levelCount: number = useAppSelector(state => state.root.levelCount);

    return <React.Fragment>
        <div className = { CLASS_NAMES.TitleLevel }>Level { levelCount + 1 }</div>
        <Grid
            levelCount = { levelCount }
            gridConfig = { json[levelCount].config.gridConfig }
            ballConfig = { json[levelCount].config.ballConfig }
        ></Grid>
    </React.Fragment>
}

export default Level;
