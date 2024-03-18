import { Carousel } from './../../models/database/Carousel';
import { Response } from 'express';
import SerachPara from 'src/models/BaseModel/SerachPara';
import { CarouselService } from 'src/services/carousel/carousel.service';
export declare class CarouselController {
    private readonly carouselService;
    constructor(carouselService: CarouselService);
    get(serachPara: SerachPara, res: Response): Promise<void>;
    gets(res: Response): Promise<void>;
    find(id: string, res: Response): Promise<void>;
    create(carouseldto: Carousel, res: Response): Promise<void>;
    update(carouseldto: Carousel, res: Response): Promise<void>;
    delete(id: string, res: Response): Promise<void>;
}
