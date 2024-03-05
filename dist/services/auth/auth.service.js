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
exports.AuthService = void 0;
const authvm_1 = require("./../../models/viewmodel/auth/authvm");
const user_service_1 = require("./../user/user.service");
const common_1 = require("@nestjs/common");
const argon2 = require("argon2");
const jwt_1 = require("@nestjs/jwt");
let AuthService = class AuthService {
    constructor(usersService, jwtService) {
        this.usersService = usersService;
        this.jwtService = jwtService;
    }
    async signIn(data) {
        const res = new authvm_1.authvm();
        const filter = { username: data.username };
        const user = await this.usersService.findOneValue(filter);
        if (!user)
            throw new common_1.BadRequestException('Tài khoản không tồn tại!');
        const passwordMatches = await argon2.verify(user.item.password, data.password);
        if (!passwordMatches)
            throw new common_1.BadRequestException('Nhập sai mật khẩu!');
        const payload = {
            userId: user.item.email,
            username: user.item.username,
            role: user.item.role,
        };
        res.message = 'Đăng nhập thành công';
        res.role = user.item.role;
        res.status = true;
        res.statuscode = 200;
        res.userid = user.item._id.toString();
        res.username = user.item.username;
        res.accessToken = this.jwtService.sign(payload, {
            secret: process.env.JWT_SECRET,
            expiresIn: process.env.JWT_EXPIRE,
        });
        res.refreshToken = this.jwtService.sign(payload, {
            secret: process.env.JWT_SECRET_REFRESH,
            expiresIn: process.env.JWT_EXPIRE_REFRESH,
        });
        return res;
    }
    async logout() { }
    hashData(data) {
        return argon2.hash(data);
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [user_service_1.UserService,
        jwt_1.JwtService])
], AuthService);
//# sourceMappingURL=auth.service.js.map