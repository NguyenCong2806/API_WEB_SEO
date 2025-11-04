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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthController = void 0;
const userlogin_1 = require("../../models/viewmodel/auth/userlogin");
const common_1 = require("@nestjs/common");
const ResultData_1 = require("../../models/BaseModel/ResultData");
const IAuthService_1 = require("../../services/auth/IAuthService");
const jwt_auth_guard_1 = require("../../Guard/jwt-auth.guard");
const refresh_token_guard_1 = require("../../Guard/refresh-token.guard");
const get_current_user_decorator_1 = require("../../decorator/get-current-user.decorator");
let AuthController = class AuthController {
    constructor(authService) {
        this.authService = authService;
    }
    async signIn(signInDto) {
        return await this.authService.signIn(signInDto);
    }
    async refreshToken(userId, refreshToken) {
        return this.authService.refreshToken(userId, refreshToken);
    }
    async logout(userId) {
        const res = new ResultData_1.default();
        res.status = true;
        res.message = 'Đăng xuất thành công';
        res.statuscode = common_1.HttpStatus.OK;
        return res;
    }
};
exports.AuthController = AuthController;
__decorate([
    (0, common_1.Post)('login'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [userlogin_1.userlogin]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "signIn", null);
__decorate([
    (0, common_1.Post)('refresh'),
    (0, common_1.UseGuards)(refresh_token_guard_1.RefreshTokenGuard),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, get_current_user_decorator_1.GetCurrentUser)('sub')),
    __param(1, (0, get_current_user_decorator_1.GetCurrentUser)('refreshToken')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "refreshToken", null);
__decorate([
    (0, common_1.Get)('logout'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, get_current_user_decorator_1.GetCurrentUser)('sub')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "logout", null);
exports.AuthController = AuthController = __decorate([
    (0, common_1.Controller)('auth'),
    __param(0, (0, common_1.Inject)(IAuthService_1.IAuthService)),
    __metadata("design:paramtypes", [Object])
], AuthController);
//# sourceMappingURL=auth.controller.js.map