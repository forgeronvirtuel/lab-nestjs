import { Controller, Get } from '@nestjs/common';
import {EquitiesService} from "./equities.service";
import {Equity} from "./equities.interface";

@Controller('equities')
export class EquitiesController {
    constructor(private equityService: EquitiesService) {
    }

    @Get()
    findAll(): Equity[] {
        return this.equityService.findAll();
    }
}
