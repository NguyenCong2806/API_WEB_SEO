import { MediaInfo } from './../../models/viewmodel/mediainfo/mediainfo';
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
  Delete,
  UseGuards,
} from '@nestjs/common';
import * as multer from 'multer';
import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import { Response } from 'express';
import * as fs from 'fs';
import * as path from 'path';
import { AuthGuard } from 'src/Guard/auth.guard';
import ResultData from 'src/models/BaseModel/ResultData';
import { message } from 'src/constants/message';
import { httpstatus } from 'src/constants/httpStatus';

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
  @Delete('deletefile/:filename')
  async deletefile(@Param('filename') filename: string, @Res() res: Response) {
    fs.unlinkSync(process.env.FILE_ROOT + '/' + filename);
    res.status(200).json(message.Delete_Successful);
  }
  @Post('file')
  @UseInterceptors(FileInterceptor('file', { storage: storage }))
  uploadFile(@UploadedFile() file, @Res() res: Response) {
    const mediaInfo = new MediaInfo();
    const _data = new ResultData();

    mediaInfo.destination = file.destination;
    mediaInfo.encoding = file.encoding;
    mediaInfo.fieldname = file.fieldname;
    mediaInfo.filename = file.filename;
    mediaInfo.mimetype = file.mimetype;
    mediaInfo.originalname = file.originalname;
    mediaInfo.path = file.path;
    mediaInfo.size = file.size;
    mediaInfo.link = process.env.API_URL + process.env.FILE_URL + file.filename;
    mediaInfo.status = true;
    _data.item = mediaInfo;
    _data.message = message.Download_data_successfully;
    _data.status = true;
    _data.statuscode = httpstatus.Successful_responses;

    res.status(HttpStatus.OK).json(_data);
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
