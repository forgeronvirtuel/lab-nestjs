export enum EquityCategoryEnum {
    INDUSTRIAL = 'industrial'
}

export interface Equity {
    symbol: string;
    category: EquityCategoryEnum[];
}