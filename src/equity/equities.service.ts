import {Injectable} from '@nestjs/common';
import {Equity, EquityCategoryEnum} from './equities.interface';

@Injectable()
export class EquitiesService {
    private readonly equities: Equity[] = [{
        symbol: "EXAMPLE",
        category: [EquityCategoryEnum.INDUSTRIAL]
    }];

    create(equity: Equity) {
        this.equities.push(equity);
    }

    findAll(): Equity[] {
        return this.equities;
    }
}