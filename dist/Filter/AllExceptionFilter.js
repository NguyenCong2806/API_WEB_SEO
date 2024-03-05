"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var AllExceptionFilter_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AllExceptionFilter = void 0;
const common_1 = require("@nestjs/common");
let AllExceptionFilter = AllExceptionFilter_1 = class AllExceptionFilter {
    catch(exception, host) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse();
        const request = ctx.getRequest();
        this.handleMessage(exception);
        AllExceptionFilter_1.handleResponse(request, response, exception);
    }
    handleMessage(exception) {
        let message = 'Internal Server Error';
        if (exception instanceof common_1.HttpException) {
            message = JSON.stringify(exception.getResponse());
        }
        else if (exception instanceof Error) {
            message = exception.stack.toString();
        }
    }
    static handleResponse(request, response, exception) {
        let responseBody = { message: 'Internal server error' };
        let statusCode = common_1.HttpStatus.INTERNAL_SERVER_ERROR;
        if (exception instanceof common_1.HttpException) {
            responseBody = exception.getResponse();
            statusCode = exception.getStatus();
        }
        else if (exception instanceof Error) {
            responseBody = {
                statusCode: statusCode,
                timestamp: new Date().toISOString(),
                path: request.url,
                message: exception.stack,
            };
        }
        response.status(statusCode).json(responseBody);
    }
};
exports.AllExceptionFilter = AllExceptionFilter;
exports.AllExceptionFilter = AllExceptionFilter = AllExceptionFilter_1 = __decorate([
    (0, common_1.Catch)()
], AllExceptionFilter);
//# sourceMappingURL=AllExceptionFilter.js.map