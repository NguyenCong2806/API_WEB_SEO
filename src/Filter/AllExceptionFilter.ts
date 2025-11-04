import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
  HttpStatus,
  Logger, // <-- 1. Import Logger
} from '@nestjs/common';
import { Request, Response } from 'express';

@Catch() // Bắt tất cả các loại lỗi
export class AllExceptionFilter implements ExceptionFilter {
  // 2. Khởi tạo một Logger riêng cho Filter này
  private readonly logger = new Logger(AllExceptionFilter.name);

  catch(exception: unknown, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();

    let statusCode: number;
    let responseBody: { message: string; statusCode: number; path: string };

    if (exception instanceof HttpException) {
      // 3. NẾU LÀ LỖI HTTP (Lỗi 400, 401, 403, 404, 409...)
      // Đây là lỗi "có chủ đích" (ví dụ: throw new BadRequestException())
      statusCode = exception.getStatus();
      const errorResponse = exception.getResponse();
      
      responseBody = {
        statusCode: statusCode,
        path: request.url,
        // (Xử lý trường hợp response là string hoặc object)
        message:
          typeof errorResponse === 'string'
            ? errorResponse
            : (errorResponse as any).message || 'Lỗi không xác định',
      };
    } else {
      // 4. NẾU LÀ LỖI 500 (Lỗi server "bất ngờ")
      // (ví dụ: code của bạn bị null pointer, database sập, v.v.)
      statusCode = HttpStatus.INTERNAL_SERVER_ERROR;
      
      responseBody = {
        statusCode: statusCode,
        path: request.url,
        message: 'Lỗi máy chủ nội bộ. Vui lòng thử lại sau.', // <-- Thông báo "an toàn"
      };
    }

    // 5. GHI LOG LỖI RA SERVER (QUAN TRỌNG NHẤT)
    // Log lỗi 500 (lỗi server) ra console để dev sửa
    if (statusCode >= 500) {
      this.logger.error(
        `[${request.method} ${request.url}] Lỗi 500:`,
        (exception as Error).stack, // <-- Log "stack trace" đầy đủ ra server
      );
    } else {
      // Log lỗi 4xx (lỗi client)
      this.logger.warn(
        `[${request.method} ${request.url}] Lỗi ${statusCode}: ${responseBody.message}`,
      );
    }

    // 6. GỬI PHẢN HỒI "AN TOÀN" VỀ CHO CLIENT
    response.status(statusCode).json(responseBody);
  }
}