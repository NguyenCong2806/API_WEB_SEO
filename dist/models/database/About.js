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
exports.AboutSchema = exports.About = void 0;
const BaseEntity_1 = require("./BaseEntity");
const mongoose_1 = require("@nestjs/mongoose");
let About = class About extends BaseEntity_1.BaseEntity {
};
exports.About = About;
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], About.prototype, "icon", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], About.prototype, "title", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], About.prototype, "img", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], About.prototype, "detail", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Array)
], About.prototype, "textlist", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], About.prototype, "link", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], About.prototype, "site", void 0);
exports.About = About = __decorate([
    (0, mongoose_1.Schema)()
], About);
exports.AboutSchema = mongoose_1.SchemaFactory.createForClass(About);
//# sourceMappingURL=About.js.map