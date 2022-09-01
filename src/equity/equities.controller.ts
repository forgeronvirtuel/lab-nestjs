import {Body, Controller, Get, HttpException, HttpStatus, Post} from '@nestjs/common';
import {EquitiesService} from "./equities.service";
import {Equity, EquityCategoryEnum} from "./equities.interface";
import {CreateEquityDto} from "./create-equity.dto";

@Controller('equities')
export class EquitiesController {
    constructor(private equityService: EquitiesService) {
    }

    @Get()
    findAll(): Equity[] {
        return this.equityService.findAll();
    }

    @Post()
    async create(@Body() createEquityDto: CreateEquityDto): Promise<void> {
        // Convert the CreateEquityDto type into Equity
        const categories: EquityCategoryEnum[] = createEquityDto.categories.map(x => {
            for (const cat in EquityCategoryEnum) {
                const v = EquityCategoryEnum[cat]
                if (x === v) {
                    return v
                }
            }
            throw new HttpException({
                status: HttpStatus.BAD_REQUEST,
                message: `${x} is not a valid equity's category`
            }, HttpStatus.BAD_REQUEST)
        })

        const equity : Equity = {
            symbol: createEquityDto.symbol,
            category: categories
        }

        // Create the new equity
        this.equityService.create(equity)
    }
}
