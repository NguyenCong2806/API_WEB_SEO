import { Carousel } from './../../models/database/Carousel';
import { IBaseService } from '../IBaseService';

export interface ICarouselService extends IBaseService<Carousel> {}
export const ICarouselService = Symbol('ICarouselService');