export interface IROFlaskJsonCfg {
    readonly balls: Array<string>;
}

export interface IROFlaskCfg {
    readonly balls: Array<string>;
    readonly ballSize: number;
    readonly ballCount: number;
    readonly isActive: boolean;
    readonly index: number;
}

export interface IROCellCfg {
    readonly balls: Array<string>;
    readonly ballSize: number;
    readonly ballCount: number;
    readonly index: number;
    readonly width: number;
    readonly height: number;
    readonly isActive: boolean;
    readonly x: number;
    readonly y: number;
}

export interface IROConfigCfg {
    readonly levelCount: number;
    readonly gridConfig: IROGridJsonCfg;
    readonly ballConfig: IROBallJsonCfg;
}

export interface IROBallCfg {
    readonly color: string;
    readonly x: number;
    readonly y: number;
}

export interface IROBallJsonCfg {
    readonly ballCount: number;
    readonly ballSize: number;
}

export interface IROGridJsonCfg {
    readonly col: number;
    readonly row: number;
    readonly width: number;
    readonly height: number;
}

export interface IROCurrentBallCfg {
    readonly flaskIndex: number;
    readonly ballIndex: number;
    readonly color: string;
}

export interface IGameStateCfg {
    levelCount: number;
    sceneType: string;
    currentBallCfg: ICurrentBallCfg | null;
    flaskArray: Array<IFlaskArray>;
}

export interface IFlaskArray {
    isActive: boolean;
    balls: Array<string>;
}

export interface ICurrentBallCfg {
    flaskIndex: number;
    ballIndex: number;
    color: string;
}