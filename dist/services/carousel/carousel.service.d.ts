import { ICarouselRepository } from './../../repository/carousel/ICarouselRepository';
import { Carousel } from './../../models/database/Carousel';
import { BaseService } from '../BaseService';
import { ICarouselService } from './ICarouselService';
export declare class CarouselService extends BaseService<Carousel> implements ICarouselService {
    private readonly carousel_repository;
    constructor(carousel_repository: ICarouselRepository);
}
