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
exports.UsersController = void 0;
const common_1 = require("@nestjs/common");
const user_service_1 = require("../services/user/user.service");
const Paginations_1 = require("../models/BaseModel/Paginations");
const UpdateUserDto_1 = require("../models/viewmodel/user/UpdateUserDto");
const CreateUserDto_1 = require("../models/viewmodel/user/CreateUserDto");
const SerachPara_1 = require("../models/BaseModel/SerachPara");
const roles_decorator_1 = require("../decorator/roles.decorator");
const argon2 = require("argon2");
let UsersController = class UsersController {
    constructor(usersService) {
        this.usersService = usersService;
    }
    async get(serachPara, res) {
        const pagination = new Paginations_1.default();
        pagination.pageindex = serachPara.pageindex;
        pagination.pagesize = serachPara.pagesize;
        if (serachPara.keyword != null) {
            pagination.condition = { username: { $regex: serachPara.keyword } };
        }
        const respo = await this.usersService.finds(pagination);
        res.status(common_1.HttpStatus.OK).json(respo);
    }
    async find(id, res) {
        const respo = await this.usersService.findOne(id);
        res.status(common_1.HttpStatus.OK).json(respo);
    }
    async create(createUserDto, res) {
        createUserDto.password = await argon2.hash(createUserDto.password);
        const respo = await this.usersService.create(createUserDto);
        res.status(common_1.HttpStatus.CREATED).json(respo);
    }
    async update(updateTodoDto, res) {
        const respo = await this.usersService.update(updateTodoDto);
        res.status(common_1.HttpStatus.OK).json(respo);
    }
    async changpassword(updateTodoDto, res) {
        updateTodoDto.password = await argon2.hash(updateTodoDto.password);
        const respo = await this.usersService.update(updateTodoDto);
        res.status(common_1.HttpStatus.OK).json(respo);
    }
    async delete(id, res) {
        const respo = await this.usersService.remove(id);
        res.status(common_1.HttpStatus.OK).json(respo);
    }
};
exports.UsersController = UsersController;
__decorate([
    (0, common_1.Get)('getall'),
    __param(0, (0, common_1.Query)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [SerachPara_1.default, Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "get", null);
__decorate([
    (0, common_1.Get)('getbyuse/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "find", null);
__decorate([
    (0, common_1.Post)('adduser'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [CreateUserDto_1.CreateTodoDto, Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "create", null);
__decorate([
    (0, common_1.Put)('edituser'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [UpdateUserDto_1.UpdateTodoDto, Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "update", null);
__decorate([
    (0, common_1.Put)('changpassword/:id'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [UpdateUserDto_1.UpdateTodoDto, Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "changpassword", null);
__decorate([
    (0, common_1.Delete)('deluser/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "delete", null);
exports.UsersController = UsersController = __decorate([
    (0, common_1.Controller)('user'),
    (0, roles_decorator_1.Roles)('admin', 'member'),
    __metadata("design:paramtypes", [user_service_1.UserService])
], UsersController);
//# sourceMappingURL=user.controller.js.map