import { UploadController } from '../../controllers/file/file.controller';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
@Module({
  imports: [ConfigModule.forRoot(), JwtModule],
  controllers: [UploadController],
})
export class FileModule {}
