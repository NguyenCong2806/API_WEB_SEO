import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { ParallaxSchema } from 'src/models/database/Parallax';
import { ParallaxController } from 'src/controllers/parallax/parallax.controller';
import { ParallaxService } from 'src/services/parallax/Parallax.service';
import { ParallaxRepository } from 'src/repository/parallax/Parallax.repository';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Parallax', schema: ParallaxSchema }]),
  ],
  controllers: [ParallaxController],
  providers: [
    ParallaxService,
    { provide: 'IParallaxRepository', useClass: ParallaxRepository },
  ],
  exports: [ParallaxService],
})
export class ParallaxModule {}
