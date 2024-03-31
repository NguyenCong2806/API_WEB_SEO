import { Injectable, Inject } from '@nestjs/common';
import { BaseService } from '../BaseService';
import { Parallax } from 'src/models/database/Parallax';
import { IParallaxservice } from './IParallax.service';
import { IParallaxRepository } from 'src/repository/parallax/IParallax.repository';

@Injectable()
export class ParallaxService
  extends BaseService<Parallax>
  implements IParallaxservice
{
  constructor(
    @Inject('IParallaxRepository')
    private readonly parallax_repository: IParallaxRepository,
  ) {
    super(parallax_repository);
  }
}
