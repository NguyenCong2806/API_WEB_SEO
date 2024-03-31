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
exports.CarouselController = void 0;
const Carousel_1 = require("./../../models/database/Carousel");
const common_1 = require("@nestjs/common");
const Paginations_1 = require("../../models/BaseModel/Paginations");
const SerachPara_1 = require("../../models/BaseModel/SerachPara");
const SiteParameter_1 = require("../../models/BaseModel/SiteParameter");
const carousel_service_1 = require("../../services/carousel/carousel.service");
let CarouselController = class CarouselController {
    constructor(carouselService) {
        this.carouselService = carouselService;
    }
    async get(serachPara, res) {
        const pagination = new Paginations_1.default();
        pagination.pageindex = serachPara.pageindex;
        pagination.pagesize = serachPara.pagesize;
        if (serachPara.keyword != null) {
            pagination.condition = { username: { $regex: serachPara.keyword } };
        }
        const respo = await this.carouselService.finds(pagination);
        res.status(common_1.HttpStatus.OK).json(respo);
    }
    async finds(parainfo, res) {
        const _datasite = { site: { $regex: parainfo.sitename } };
        const _dataloca = { location: { $regex: parainfo.location } };
        const _datas = [_datasite, _dataloca];
        const respo = await this.carouselService.findconditions(_datas);
        res.status(common_1.HttpStatus.OK).json(respo);
    }
    async gets(res) {
        const respo = await this.carouselService.find();
        res.status(common_1.HttpStatus.OK).json(respo);
    }
    async find(id, res) {
        const respo = await this.carouselService.findOne(id);
        res.status(common_1.HttpStatus.OK).json(respo);
    }
    async create(carouseldto, res) {
        const respo = await this.carouselService.create(carouseldto);
        res.status(common_1.HttpStatus.CREATED).json(respo);
    }
    async update(carouseldto, res) {
        const respo = await this.carouselService.update(carouseldto);
        res.status(common_1.HttpStatus.OK).json(respo);
    }
    async delete(id, res) {
        const respo = await this.carouselService.remove(id);
        res.status(common_1.HttpStatus.OK).json(respo);
    }
};
exports.CarouselController = CarouselController;
__decorate([
    (0, common_1.Get)('getall'),
    __param(0, (0, common_1.Query)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [SerachPara_1.default, Object]),
    __metadata("design:returntype", Promise)
], CarouselController.prototype, "get", null);
__decorate([
    (0, common_1.Get)('getfind'),
    __param(0, (0, common_1.Query)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [SiteParameter_1.default, Object]),
    __metadata("design:returntype", Promise)
], CarouselController.prototype, "finds", null);
__decorate([
    (0, common_1.Get)('getalls'),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CarouselController.prototype, "gets", null);
__decorate([
    (0, common_1.Get)('getbycarousel/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], CarouselController.prototype, "find", null);
__decorate([
    (0, common_1.Post)('addcarousel'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Carousel_1.Carousel, Object]),
    __metadata("design:returntype", Promise)
], CarouselController.prototype, "create", null);
__decorate([
    (0, common_1.Put)('editcarousel'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Carousel_1.Carousel, Object]),
    __metadata("design:returntype", Promise)
], CarouselController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)('delcarousel/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], CarouselController.prototype, "delete", null);
exports.CarouselController = CarouselController = __decorate([
    (0, common_1.Controller)('carousel'),
    __metadata("design:paramtypes", [carousel_service_1.CarouselService])
], CarouselController);
//# sourceMappingURL=carousel.controller.js.map