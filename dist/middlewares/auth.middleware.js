"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthMiddleware = exports.SECRET_KEY = void 0;
const jsonwebtoken_1 = require("jsonwebtoken");
const common_1 = require("@nestjs/common");
exports.SECRET_KEY = process.env.JWT_SECRET;
let AuthMiddleware = class AuthMiddleware {
    use(req, res, next) {
        try {
            const token = req.header('Authorization')?.replace('Bearer ', '');
            if (!token) {
                return res.status(403).send({
                    error: true,
                    message: 'No token provided.',
                });
            }
            else {
                jsonwebtoken_1.default.verify(token, exports.SECRET_KEY, function (err, decoded) {
                    if (err) {
                        console.error(err.toString());
                        return res
                            .status(401)
                            .json({ error: true, message: 'Unauthorized access.', err });
                    }
                    console.log(`decoded>>${decoded}`);
                    req.token = decoded;
                    next();
                });
            }
        }
        catch (err) {
            res.status(401).send('Please authenticate');
        }
    }
};
exports.AuthMiddleware = AuthMiddleware;
exports.AuthMiddleware = AuthMiddleware = __decorate([
    (0, common_1.Injectable)()
], AuthMiddleware);
//# sourceMappingURL=auth.middleware.js.map