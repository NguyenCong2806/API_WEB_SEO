import { UploadController } from '../../controllers/file/file.controller';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { MediaModule } from '../media/media.module';
@Module({
  imports: [ConfigModule.forRoot(), JwtModule,MediaModule],
  controllers: [UploadController],
})
export class FileModule {}
