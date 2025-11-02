import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { ParallaxSchema } from 'src/models/database/Parallax';
import { ParallaxController } from 'src/controllers/parallax/parallax.controller';
import { ParallaxService } from 'src/services/parallax/Parallax.service';
import { ParallaxRepository } from 'src/repository/parallax/Parallax.repository';
import { IParallaxservice } from 'src/services/parallax/IParallax.service';
@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Parallax', schema: ParallaxSchema }]),
  ],
  controllers: [ParallaxController],
  providers: [
    {
      provide: IParallaxservice, // <-- Token (Giá trị)
      useClass: ParallaxService, // <-- Class (Thực thi)
    },
    { provide: 'IParallaxRepository', useClass: ParallaxRepository },
  ],
  exports: [IParallaxservice],
})
export class ParallaxModule { }
