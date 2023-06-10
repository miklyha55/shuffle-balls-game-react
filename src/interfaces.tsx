export interface IROFlaskJsonCfg {
    readonly balls: Array<string>;
}

export interface IROFlaskCfg {
    readonly balls: Array<string>;
    readonly ballSize: number;
    readonly ballCount: number;
    readonly width: number;
    readonly height: number;
    readonly x: number;
    readonly y: number;
}

export interface IROConfigCfg {
    readonly gridConfig: IROGridJsonCfg;
    readonly flaskConfig: Array<IROFlaskJsonCfg>;
    readonly ballConfig: IROBallJsonCfg;
}

export interface IROLevelCfg {
    readonly children?: React.ReactNode;
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