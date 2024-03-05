import { ArgumentsHost, ExceptionFilter, HttpException } from '@nestjs/common';
export declare class AllExceptionFilter implements ExceptionFilter {
    catch(exception: HttpException | Error, host: ArgumentsHost): void;
    private handleMessage;
    private static handleResponse;
}
