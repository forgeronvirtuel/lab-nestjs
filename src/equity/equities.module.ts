import {EquitiesService} from "./equities.service";
import {EquitiesController} from "./equities.controller";
import {Module} from "@nestjs/common";


@Module({
    controllers: [EquitiesController],
    providers: [EquitiesService],
})
export class EquitiesModule {}
