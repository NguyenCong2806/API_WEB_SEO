"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthModule = void 0;
const refreshToken_strategy_1 = require("./../../utils/auth/strategies/refreshToken.strategy");
const accessToken_strategy_1 = require("./../../utils/auth/strategies/accessToken.strategy");
const auth_service_1 = require("./../../services/auth/auth.service");
const common_1 = require("@nestjs/common");
const user_module_1 = require("../user.module");
const jwt_1 = require("@nestjs/jwt");
const auth_controller_1 = require("../../controllers/auth/auth.controller");
const passport_1 = require("@nestjs/passport");
const config_1 = require("@nestjs/config");
let AuthModule = class AuthModule {
};
exports.AuthModule = AuthModule;
exports.AuthModule = AuthModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot(),
            user_module_1.UsersModule, passport_1.PassportModule, jwt_1.JwtModule.register({
                secret: process.env.JWT_SECRET,
                signOptions: { expiresIn: process.env.JWT_EXPIRE },
            })
        ],
        controllers: [auth_controller_1.AuthController],
        providers: [auth_service_1.AuthService, accessToken_strategy_1.AccessTokenStrategy, refreshToken_strategy_1.RefreshTokenStrategy],
        exports: [auth_service_1.AuthService]
    })
], AuthModule);
//# sourceMappingURL=auth.module.js.map