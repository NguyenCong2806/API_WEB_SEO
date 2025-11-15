"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const buffer_1 = require("buffer");
if (typeof global.SlowBuffer === 'undefined') {
    global.SlowBuffer = buffer_1.Buffer;
}
const core_1 = require("@nestjs/core");
const app_module_1 = require("./module/app.module");
const AllExceptionFilter_1 = require("./Filter/AllExceptionFilter");
const helmet_1 = require("helmet");
const common_1 = require("@nestjs/common");
const nest_winston_1 = require("nest-winston");
const winston_config_1 = require("./config/winston.config");
async function bootstrap() {
    const winstonLogger = nest_winston_1.WinstonModule.createLogger(winston_config_1.winstonConfig);
    const app = await core_1.NestFactory.create(app_module_1.AppModule, {
        logger: winstonLogger,
    });
    const logger = new common_1.Logger('Bootstrap');
    app.useGlobalFilters(new AllExceptionFilter_1.AllExceptionFilter());
    app.use((0, helmet_1.default)({ crossOriginResourcePolicy: false }));
    const allowedOrigins = process.env.CORS_ORIGINS
        ? process.env.CORS_ORIGINS.split(',')
        : [];
    if (allowedOrigins.length > 0) {
        logger.log(`CORS enabled for origins: ${allowedOrigins.join(', ')}`);
    }
    else {
        logger.warn(`CORS is not configured with specific origins.`);
    }
    app.enableCors({
        origin: allowedOrigins,
        methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
        credentials: true,
    });
    app.setGlobalPrefix('api/v1');
    app.useGlobalPipes(new common_1.ValidationPipe({
        whitelist: true,
        forbidNonWhitelisted: true,
        transform: true,
        transformOptions: {
            enableImplicitConversion: true,
        },
    }));
    const port = parseInt(process.env.PORT, 10) || 3000;
    await app.listen(port);
    logger.log(`Server running on http://localhost:${port}/api/v1`);
}
bootstrap();
//# sourceMappingURL=main.js.map