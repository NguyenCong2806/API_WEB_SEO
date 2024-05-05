"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthGuard = void 0;
const common_1 = require("@nestjs/common");
const jwt_service_1 = require("@nestjs/jwt/dist/jwt.service");
const core_1 = require("@nestjs/core");
let AuthGuard = class AuthGuard {
    constructor(jwtService, reflector) {
        this.jwtService = jwtService;
        this.reflector = reflector;
    }
    async canActivate(context) {
        try {
            const request = context.switchToHttp().getRequest();
            const authMetaData = this.reflector.getAllAndOverride('auth', [
                context.getHandler(),
                context.getClass(),
            ]);
            if (authMetaData?.includes('skipAuthCheck')) {
                return true;
            }
            const { authorization } = request.headers;
            if (!authorization || authorization.trim() === '') {
                throw new common_1.UnauthorizedException('Vui lòng cung cấp mã truy cập!');
            }
            const authToken = authorization.replace(/bearer/gim, '').trim();
            const resp = await this.jwtService.verify(authToken, {
                secret: process.env.JWT_SECRET,
            });
            request.decodedData = resp;
            return true;
        }
        catch (error) {
            console.log('auth error - ', error.message);
            throw new common_1.ForbiddenException(error.message || 'session expired! Please sign In');
        }
    }
};
exports.AuthGuard = AuthGuard;
exports.AuthGuard = AuthGuard = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [jwt_service_1.JwtService,
        core_1.Reflector])
], AuthGuard);
//# sourceMappingURL=auth.guard.js.map