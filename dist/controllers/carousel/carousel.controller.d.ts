import SerachPara from 'src/models/BaseModel/SerachPara';
import { ICarouselService } from 'src/services/carousel/ICarouselService';
import { CarouselDto } from 'src/models/viewmodel/carousel/CarouselDto';
export declare class CarouselController {
    private readonly carouselService;
    constructor(carouselService: ICarouselService);
    get(serachPara: SerachPara): Promise<import("../../models/BaseModel/Results").default<import("../../models/database/Carousel").Carousel>>;
    find(id: string): Promise<import("../../models/BaseModel/ResultData").default>;
    create(createDto: CarouselDto): Promise<import("../../models/BaseModel/ResultData").default>;
    update(id: string, updateDto: CarouselDto): Promise<import("../../models/BaseModel/ResultData").default>;
    delete(id: string): Promise<import("../../models/BaseModel/ResultData").default>;
}
