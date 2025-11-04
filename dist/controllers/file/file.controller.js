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
exports.UploadController = void 0;
const common_1 = require("@nestjs/common");
const multer = require("multer");
const platform_express_1 = require("@nestjs/platform-express");
const fs_1 = require("fs");
const path = require("path");
const jwt_auth_guard_1 = require("../../Guard/jwt-auth.guard");
const IMediaService_1 = require("../../services/media/IMediaService");
const SerachPara_1 = require("../../models/BaseModel/SerachPara");
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, process.env.FILE_ROOT);
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    },
});
let UploadController = class UploadController {
    constructor(mediaService) {
        this.mediaService = mediaService;
    }
    async getallfile(serachPara) {
        return this.mediaService.finds(serachPara);
    }
    async deletefile(filename) {
        const safeFilename = path.basename(filename);
        const fullPath = path.join(process.env.FILE_ROOT, safeFilename);
        if (!fullPath.startsWith(process.env.FILE_ROOT)) {
            throw new common_1.ForbiddenException('Không được phép truy cập file!');
        }
        try {
            await fs_1.promises.unlink(fullPath);
            return;
        }
        catch (error) {
            throw new common_1.ForbiddenException('Xóa file thất bại hoặc file không tồn tại.');
        }
    }
    async uploadFile(file) {
        const link = process.env.API_URL + process.env.FILE_URL + file.filename;
    }
    uploadMultiple(files) {
        const fileLinks = files.map(file => {
            return process.env.API_URL + process.env.FILE_URL + file.filename;
        });
        return {
            message: 'Upload thành công',
            links: fileLinks
        };
    }
};
exports.UploadController = UploadController;
__decorate([
    (0, common_1.Get)('getallfile'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [SerachPara_1.default]),
    __metadata("design:returntype", Promise)
], UploadController.prototype, "getallfile", null);
__decorate([
    (0, common_1.Delete)('deletefile/:filename'),
    (0, common_1.HttpCode)(common_1.HttpStatus.NO_CONTENT),
    __param(0, (0, common_1.Param)('filename')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UploadController.prototype, "deletefile", null);
__decorate([
    (0, common_1.Post)('file'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file', { storage: storage })),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    __param(0, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UploadController.prototype, "uploadFile", null);
__decorate([
    (0, common_1.Post)('files'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FilesInterceptor)('files', parseInt(process.env.FILE_UP_COUNT), {
        storage: storage,
    })),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    __param(0, (0, common_1.UploadedFiles)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array]),
    __metadata("design:returntype", void 0)
], UploadController.prototype, "uploadMultiple", null);
exports.UploadController = UploadController = __decorate([
    (0, common_1.Controller)('upload'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Inject)(IMediaService_1.IMediaService)),
    __metadata("design:paramtypes", [Object])
], UploadController);
//# sourceMappingURL=file.controller.js.map