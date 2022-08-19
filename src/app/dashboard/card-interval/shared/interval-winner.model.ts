export interface IIntervalWinner {
    producer: string;
    interval: number;
    previousWin: number;
    followingWin: number;
}

export interface IIntervalWinnerList {
    min: IIntervalWinner[],
    max: IIntervalWinner[]
}