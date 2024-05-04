"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CarouselModule = void 0;
const carousel_service_1 = require("./../../services/carousel/carousel.service");
const Carousel_1 = require("./../../models/database/Carousel");
const CarouselRepository_1 = require("./../../repository/carousel/CarouselRepository");
const carousel_controller_1 = require("./../../controllers/carousel/carousel.controller");
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const jwt_1 = require("@nestjs/jwt");
let CarouselModule = class CarouselModule {
};
exports.CarouselModule = CarouselModule;
exports.CarouselModule = CarouselModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: 'Carousel', schema: Carousel_1.CarouselSchema }]),
            jwt_1.JwtModule,
        ],
        controllers: [carousel_controller_1.CarouselController],
        providers: [
            carousel_service_1.CarouselService,
            { provide: 'ICarouselRepository', useClass: CarouselRepository_1.CarouselRepository },
        ],
        exports: [carousel_service_1.CarouselService],
    })
], CarouselModule);
//# sourceMappingURL=carousel.module.js.map