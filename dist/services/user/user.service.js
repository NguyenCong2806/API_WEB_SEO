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
exports.UserService = void 0;
const User_1 = require("../../models/database/User");
const common_1 = require("@nestjs/common");
const BaseService_1 = require("../BaseService");
const class_transformer_1 = require("class-transformer");
const argon2 = require("argon2");
const Paginations_1 = require("../../models/BaseModel/Paginations");
let UserService = class UserService extends BaseService_1.BaseService {
    constructor(users_repository) {
        super(users_repository);
        this.users_repository = users_repository;
    }
    async create(dto) {
        const userExists = await this.users_repository.checkkeyword({
            $or: [{ username: dto.username }, { email: dto.email }],
        });
        if (userExists.item) {
            throw new common_1.ConflictException('Username hoặc Email đã tồn tại.');
        }
        const hashedPassword = await argon2.hash(dto.password);
        const newUserModel = (0, class_transformer_1.plainToInstance)(User_1.User, dto);
        newUserModel.password = hashedPassword;
        newUserModel.role = dto.role || 'user';
        return await super.create(newUserModel);
    }
    async update(id, dto) {
        const updateData = (0, class_transformer_1.plainToInstance)(User_1.User, dto);
        if (dto.password) {
            updateData.password = await argon2.hash(dto.password);
        }
        return await super.update(id, updateData);
    }
    async finds(serachPara) {
        const pagination = new Paginations_1.default();
        pagination.pageindex = serachPara.pageindex;
        pagination.pagesize = serachPara.pagesize;
        const condition = {};
        if (serachPara.keyword && serachPara.keyword.trim() !== '') {
            condition.username = { $regex: serachPara.keyword, $options: 'i' };
        }
        pagination.condition = condition;
        return await super.finds(pagination);
    }
};
exports.UserService = UserService;
exports.UserService = UserService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('IUserRepository')),
    __metadata("design:paramtypes", [Object])
], UserService);
//# sourceMappingURL=user.service.js.map