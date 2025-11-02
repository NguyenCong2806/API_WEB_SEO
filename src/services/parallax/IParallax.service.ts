import { Parallax } from 'src/models/database/Parallax';
import { IBaseService } from '../IBaseService';

export interface IParallaxservice extends IBaseService<Parallax> {}
export const IParallaxservice = Symbol('IParallaxservice');