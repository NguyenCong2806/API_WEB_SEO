import { Carousel } from './../../models/database/Carousel';
import { Model } from 'mongoose';
import { BaseRepository } from '../BaseRepository';
import { ICarouselRepository } from './ICarouselRepository';
export declare class CarouselRepository extends BaseRepository<Carousel> implements ICarouselRepository {
    private readonly carousel_repository;
    constructor(carousel_repository: Model<Carousel>);
}
