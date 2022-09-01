import {EquityCategoryEnum} from "./equities.interface";

export interface CreateEquityDto {
    symbol: string
    categories: EquityCategoryEnum[]
}