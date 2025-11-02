import {
  Controller,
  Post,
  UseInterceptors,
  UploadedFile,
  UploadedFiles,
  HttpStatus,
  Get,
  Param,
  Delete,
  UseGuards,
  HttpCode, // <-- THÊM HttpCode
  ForbiddenException,
  Inject, // <-- 2. THÊM Inject
  Query, // <-- THÊM Query
} from '@nestjs/common';
import * as multer from 'multer';
import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import { promises as fs } from 'fs'; 
import * as path from 'path';
import { JwtAuthGuard } from 'src/Guard/jwt-auth.guard'; // <-- Dùng Guard "chuẩn"
import { IMediaService } from 'src/services/media/IMediaService'; // <-- 4. DÙNG TOKEN
import SerachPara from 'src/models/BaseModel/SerachPara'; // <-- Import SerachPara

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

@Controller('upload') // Tên route là 'upload'
@UseGuards(JwtAuthGuard) // Kích hoạt bảo mật
export class UploadController {
  constructor(
    @Inject(IMediaService) private readonly mediaService: IMediaService,
  ) {}

  @Get('getallfile')
  async getallfile(@Query() serachPara: SerachPara) {
    // Cách "chuẩn" là đọc danh sách file đã lưu trong DB
    return this.mediaService.finds(serachPara);
  }

  @Delete('deletefile/:filename')
  @HttpCode(HttpStatus.NO_CONTENT) // Dùng 204
  async deletefile(@Param('filename') filename: string) {
    // VÁ LỖ HỔNG Path Traversal
    const safeFilename = path.basename(filename);
    const fullPath = path.join(process.env.FILE_ROOT, safeFilename);

    if (!fullPath.startsWith(process.env.FILE_ROOT)) {
      throw new ForbiddenException('Không được phép truy cập file!');
    }

    try {
      // DÙNG BẤT ĐỒNG BỘ (async)
      await fs.unlink(fullPath);
      
      // GỌI SERVICE (để xóa trong DB)
      // (Bạn cần thêm hàm 'deleteByCondition' vào IMediaService/MediaService)

      return; // Trả về 204
    } catch (error) {
      throw new ForbiddenException('Xóa file thất bại hoặc file không tồn tại.');
    }
  }

  /**
   * 8. SỬA LẠI HOÀN TOÀN: ĐƯA LOGIC VỀ SERVICE
   */
  @Post('file')
  @UseInterceptors(FileInterceptor('file', { storage: storage }))
  @HttpCode(HttpStatus.CREATED) // Dùng 201
  async uploadFile(@UploadedFile() file: Express.Multer.File) {
    // Controller "sạch" (dumb) chỉ gọi service
    const link = process.env.API_URL + process.env.FILE_URL + file.filename;
  }

  /**
   * 9. SỬA LẠI: DÙNG RETURN VÀ TRẢ VỀ LINKS
   */
  @Post('files')
  @UseInterceptors(
    FilesInterceptor('files', parseInt(process.env.FILE_UP_COUNT), {
      storage: storage,
    }),
  )
  @HttpCode(HttpStatus.CREATED)
  uploadMultiple(@UploadedFiles() files: Express.Multer.File[]) {
    // Trả về links cho client
    const fileLinks = files.map(file => {
      return process.env.API_URL + process.env.FILE_URL + file.filename;
    });

    return {
      message: 'Upload thành công',
      links: fileLinks
    };
  }
}