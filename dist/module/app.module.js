"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const majorsnote_module_1 = require("./majorsnote/majorsnote.module");
const cardnumbers_module_1 = require("./cardnumbers/cardnumbers.module");
const articleheader_module_1 = require("./articleheader/articleheader.module");
const contact_module_1 = require("./contact/contact.module");
const card_module_1 = require("./card/card.module");
const file_module_1 = require("./file/file.module");
const common_1 = require("@nestjs/common");
const app_controller_1 = require("../controllers/app.controller");
const app_service_1 = require("../services/app/app.service");
const config_1 = require("@nestjs/config");
const mongoose_1 = require("@nestjs/mongoose");
const user_module_1 = require("./user.module");
const logger_middleware_1 = require("../middlewares/logger.middleware");
const auth_module_1 = require("./auth/auth.module");
const jwt_1 = require("@nestjs/jwt");
const serve_static_1 = require("@nestjs/serve-static");
const path_1 = require("path");
const throttler_1 = require("@nestjs/throttler");
const carousel_module_1 = require("./carousel/carousel.module");
const about_module_1 = require("./about/about.module");
const content_module_1 = require("./content/content.module");
const contenttype_module_1 = require("./contenttype/contenttype.module");
const courses_module_1 = require("./courses/courses.module");
const expert_module_1 = require("./expert/expert.module");
const feedback_module_1 = require("./feedback/feedback.module");
const popular_module_1 = require("./popular/popular.module");
const media_module_1 = require("./media/media.module");
const cta_module_1 = require("./cta/cta.module");
let AppModule = class AppModule {
    configure(consumer) {
        consumer.apply(logger_middleware_1.LoggerMiddleware).forRoutes('*');
    }
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({ isGlobal: true }),
            mongoose_1.MongooseModule.forRoot(process.env.DATABASE_URL + process.env.DATABASE_NAME),
            auth_module_1.AuthModule,
            user_module_1.UsersModule,
            jwt_1.JwtModule,
            file_module_1.FileModule,
            carousel_module_1.CarouselModule,
            about_module_1.AboutModule,
            card_module_1.CardModule,
            contact_module_1.ContactModule,
            content_module_1.ContentModule,
            contenttype_module_1.ContenttypeModule,
            courses_module_1.CoursesModule,
            expert_module_1.ExpertModule,
            feedback_module_1.FeedbackModule,
            popular_module_1.PopularModule,
            media_module_1.MediaModule,
            articleheader_module_1.ArticleHeaderModule,
            cardnumbers_module_1.CardNumbersModule,
            cta_module_1.CtaModule,
            majorsnote_module_1.MajorsNoteModule,
            serve_static_1.ServeStaticModule.forRoot({
                rootPath: (0, path_1.join)(__dirname, '..', '../public'),
                serveRoot: '/public/',
                exclude: ['/api/(.*)'],
            }),
            throttler_1.ThrottlerModule.forRoot([
                {
                    name: 'short',
                    ttl: 1000,
                    limit: 3,
                },
                {
                    name: 'medium',
                    ttl: 10000,
                    limit: 20,
                },
                {
                    name: 'long',
                    ttl: 60000,
                    limit: 100,
                },
            ]),
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map