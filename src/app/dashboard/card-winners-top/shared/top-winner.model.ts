export interface ITopWinner {
    name: string;
    winCount: number
}

export interface ITopWinnerList {
    studios: ITopWinner[];
}