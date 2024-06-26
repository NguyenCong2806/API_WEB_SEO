import { CanActivate, ExecutionContext } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt/dist/jwt.service';
import { Reflector } from '@nestjs/core';
export declare class AuthGuard implements CanActivate {
    private jwtService;
    private readonly reflector;
    constructor(jwtService: JwtService, reflector: Reflector);
    canActivate(context: ExecutionContext): Promise<boolean>;
}
