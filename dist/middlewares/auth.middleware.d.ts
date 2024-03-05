import { Secret, JwtPayload } from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';
import { NestMiddleware } from '@nestjs/common';
export declare const SECRET_KEY: Secret;
export interface CustomRequest extends Request {
    token: string | JwtPayload;
}
export declare class AuthMiddleware implements NestMiddleware {
    use(req: Request, res: Response, next: NextFunction): Response<any, Record<string, any>>;
}
