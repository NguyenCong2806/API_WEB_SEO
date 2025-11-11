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
exports.AuthService = void 0;
const authvm_1 = require("./../../models/viewmodel/auth/authvm");
const common_1 = require("@nestjs/common");
const argon2 = require("argon2");
const jwt_1 = require("@nestjs/jwt");
const IUserService_1 = require("../user/IUserService");
const ResultData_1 = require("../../models/BaseModel/ResultData");
let AuthService = class AuthService {
    constructor(usersService, jwtService) {
        this.usersService = usersService;
        this.jwtService = jwtService;
    }
    async signIn(data) {
        const res = new ResultData_1.default();
        const authData = new authvm_1.authvm();
        const userResult = await this.usersService.findOneValue({
            username: data.username,
        });
        if (!userResult.status || !userResult.item) {
            res.status = true;
            res.message = 'Tài khoản không tồn tại!';
            res.statuscode = common_1.HttpStatus.BAD_REQUEST;
            res.item = authData;
            return res;
        }
        const user = userResult.item;
        const passwordMatches = await argon2.verify(user.password, data.password);
        if (!passwordMatches) {
            res.status = true;
            res.message = 'Nhập sai mật khẩu!';
            res.statuscode = common_1.HttpStatus.BAD_REQUEST;
            res.item = authData;
            return res;
        }
        const payload = {
            sub: user._id.toString(),
            username: user.username,
            role: user.role,
        };
        const accessToken = this.jwtService.sign(payload, {
            secret: process.env.JWT_SECRET,
            expiresIn: process.env.JWT_EXPIRE,
        });
        const refreshToken = this.jwtService.sign(payload, {
            secret: process.env.JWT_SECRET_REFRESH,
            expiresIn: process.env.JWT_EXPIRE_REFRESH,
        });
        authData.message = 'Đăng nhập thành công';
        authData.role = user.role;
        authData.status = true;
        authData.statuscode = 200;
        authData.userid = user._id.toString();
        authData.username = user.username;
        authData.accessToken = accessToken;
        authData.refreshToken = refreshToken;
        res.status = true;
        res.message = 'Đăng nhập thành công';
        res.statuscode = 200;
        res.item = authData;
        return res;
    }
    async refreshToken(userId, rt) {
        const userResult = await this.usersService.findOne(userId);
        if (!userResult.status || !userResult.item) {
            throw new common_1.ForbiddenException('User không còn tồn tại');
        }
        const user = userResult.item;
        const payload = {
            sub: user._id.toString(),
            username: user.username,
            role: user.role,
        };
        const newAccessToken = this.jwtService.sign(payload, {
            secret: process.env.JWT_SECRET,
            expiresIn: process.env.JWT_EXPIRE,
        });
        const authData = new authvm_1.authvm();
        authData.accessToken = newAccessToken;
        authData.refreshToken = rt;
        authData.message = 'Cấp lại token thành công';
        authData.role = user.role;
        authData.status = true;
        authData.statuscode = 200;
        authData.userid = user._id.toString();
        authData.username = user.username;
        const res = new ResultData_1.default();
        res.status = true;
        res.message = authData.message;
        res.statuscode = 200;
        res.item = authData;
        return res;
    }
    async validateUser(username, pass) {
        const userResult = await this.usersService.findOneValue({
            username: username,
        });
        if (userResult.status && userResult.item) {
            const user = userResult.item;
            const passwordMatches = await argon2.verify(user.password, pass);
            if (passwordMatches) {
                const { password, ...result } = user.toObject();
                return result;
            }
        }
        return null;
    }
    async logout() {
    }
    hashData(data) {
        return argon2.hash(data);
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(IUserService_1.IUserService)),
    __metadata("design:paramtypes", [Object, jwt_1.JwtService])
], AuthService);
//# sourceMappingURL=auth.service.js.map