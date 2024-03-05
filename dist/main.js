"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./module/app.module");
const AllExceptionFilter_1 = require("./Filter/AllExceptionFilter");
const helmet_1 = require("helmet");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule, { cors: true });
    app.useGlobalFilters(new AllExceptionFilter_1.AllExceptionFilter());
    app.use((0, helmet_1.default)({ crossOriginResourcePolicy: false }));
    app.enableCors();
    await app.listen(parseInt(process.env.PORT, 10) || 3000);
    console.log('server runing', `http://localhost:${parseInt(process.env.PORT, 10) || 3000}`);
}
bootstrap();
//# sourceMappingURL=main.js.map