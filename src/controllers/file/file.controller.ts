import {
  Controller,
  Post,
  UseInterceptors,
  UploadedFile,
  UploadedFiles,
  Res,
  HttpStatus,
  Get,
  Param,
  UseGuards,
} from '@nestjs/common';
import * as multer from 'multer';
import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import { Response } from 'express';
import * as fs from 'fs';
import * as path from 'path';
import { AuthGuard } from 'src/Guard/auth.guard';

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, process.env.FILE_ROOT);
  },
  filename: (req, file, cb) => {
    cb(
      null,
      file.fieldname + '-' + Date.now() + path.extname(file.originalname),
    );
  },
});

@Controller('upload')
@UseGuards(AuthGuard)
export class UploadController {
  @Get('getallfile')
  async getallfile(@Res() res: Response) {
    const data = fs.readdirSync(process.env.FILE_ROOT, {
      withFileTypes: true,
    });
    res.status(200).json(data);
  }
  @Get('deletefile/:filename')
  async deletefile(@Param('filename') filename: string, @Res() res: Response) {
    fs.unlinkSync(process.env.FILE_ROOT + '/' + filename);
    res.status(200).json('Xóa bỏ thành công file');
  }
  @Post('file')
  @UseInterceptors(FileInterceptor('file', { storage: storage }))
  uploadFile(@UploadedFile() file, @Res() res: Response) {
    res.status(HttpStatus.OK).json(true);
  }

  @Post('files')
  @UseInterceptors(
    FilesInterceptor('files', parseInt(process.env.FILE_UP_COUNT), {
      storage: storage,
    }),
  )
  uploadMultiple(@UploadedFiles() files, @Res() res: Response) {
    res.status(HttpStatus.OK).json(true);
  }
}
