"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseService = void 0;
class BaseService {
    constructor(repository) {
        this.repository = repository;
    }
    async findcondition(condition) {
        return await this.repository.findcondition(condition);
    }
    async checkkeyword(condition) {
        return await this.repository.checkkeyword(condition);
    }
    async countcondition(condition) {
        return await this.repository.countcondition(condition);
    }
    async find() {
        return await this.repository.find();
    }
    async create(item) {
        return await this.repository.create(item);
    }
    async update(item) {
        return await this.repository.update(item._id, item);
    }
    async remove(id) {
        return await this.repository.delete(id);
    }
    async finds(item) {
        return await this.repository.finds(item);
    }
    async findOne(id) {
        return await this.repository.findOne(id);
    }
    async findOneValue(condition) {
        return await this.repository.findOneValue(condition);
    }
}
exports.BaseService = BaseService;
//# sourceMappingURL=BaseService.js.map