
export interface BoPState{
    BoPItems: Array<BoPItem>
} 

export interface BoPItem{
    id: number;
    title: string;
    date: Date;
    totalmoney: number;
}