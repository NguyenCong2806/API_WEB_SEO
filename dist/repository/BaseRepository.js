"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseRepository = void 0;
const ResultData_1 = require("../models/BaseModel/ResultData");
const Results_1 = require("../models/BaseModel/Results");
const message_1 = require("../constants/message");
class BaseRepository {
    constructor(_model) {
        this._model = _model;
        this._model = _model;
    }
    async findconditions(conditions) {
        const _data = new ResultData_1.default();
        try {
            _data.status = true;
            _data.message = message_1.message.Download_data_successfully;
            _data.item = await this._model.find({ $or: conditions });
        }
        catch (error) {
            _data.status = false;
            _data.message = error.message;
            _data.item = false;
        }
        return _data;
    }
    async findcondition(condition) {
        const _data = new ResultData_1.default();
        try {
            _data.status = true;
            _data.message = message_1.message.Download_data_successfully;
            _data.item = await this._model.find(condition);
        }
        catch (error) {
            _data.status = false;
            _data.message = error.message;
            _data.item = false;
        }
        return _data;
    }
    async checkkeyword(condition) {
        const _data = new ResultData_1.default();
        try {
            const docExists = await this._model.exists(condition);
            _data.status = true;
            if (docExists) {
                _data.message = message_1.message.Exist_Message;
                _data.item = true;
            }
            else {
                _data.message = message_1.message.NotExist_Message;
                _data.item = false;
            }
        }
        catch (error) {
            _data.status = false;
            _data.message = error.message;
            _data.item = false;
        }
        return _data;
    }
    async countcondition(condition) {
        const _data = new ResultData_1.default();
        try {
            const num = await this._model.countDocuments(condition);
            _data.status = true;
            _data.message = message_1.message.Download_data_successfully;
            _data.item = num;
        }
        catch (error) {
            _data.status = false;
            _data.message = error.message;
            _data.item = false;
        }
        return _data;
    }
    async finds(item) {
        const result = new Results_1.default();
        try {
            const counts = await this._model.countDocuments(item.condition);
            result.pageIndex = item.pageindex;
            result.totalCount = counts;
            result.totalPage = Math.ceil(counts / item.pagesize);
            result.items = await this._model
                .find(item.condition)
                .skip(item.pagesize * (item.pageindex - 1))
                .limit(item.pagesize)
                .sort({ createddate: -1 });
        }
        catch (error) {
            result.items = [];
        }
        return result;
    }
    async find() {
        const _data = new ResultData_1.default();
        try {
            _data.status = true;
            _data.message = message_1.message.Download_data_successfully;
            _data.item = await this._model.find();
        }
        catch (error) {
            _data.status = false;
            _data.message = error.message;
            _data.item = false;
        }
        return _data;
    }
    async findOne(id) {
        const _data = new ResultData_1.default();
        try {
            _data.status = true;
            _data.message = message_1.message.Download_data_successfully;
            _data.item = (await this._model.findById(id).exec());
        }
        catch (error) {
            _data.status = false;
            _data.message = error.message;
            _data.item = false;
        }
        return _data;
    }
    async findOneValue(condition) {
        const _data = new ResultData_1.default();
        try {
            _data.status = true;
            _data.message = message_1.message.Download_data_successfully;
            _data.item = (await this._model.findOne(condition));
        }
        catch (error) {
            _data.status = false;
            _data.message = error.message;
            _data.item = false;
        }
        return _data;
    }
    async create(item) {
        const _data = new ResultData_1.default();
        try {
            await this._model.create(item);
            _data.status = true;
            _data.message = message_1.message.Add_Successful;
            _data.item = true;
        }
        catch (error) {
            _data.status = false;
            _data.message = error.message;
            _data.item = false;
        }
        return _data;
    }
    async count() {
        const _data = new ResultData_1.default();
        try {
            const num = await this._model.countDocuments();
            _data.status = true;
            _data.message = message_1.message.Download_data_successfully;
            _data.item = num;
        }
        catch (error) {
            _data.status = false;
            _data.message = error.message;
            _data.item = false;
        }
        return _data;
    }
    async update(id, item) {
        const _data = new ResultData_1.default();
        try {
            await this._model.findOneAndUpdate({ _id: id }, { $set: item });
            _data.status = true;
            _data.message = message_1.message.Edit_Successful;
            _data.item = true;
        }
        catch (error) {
            _data.status = false;
            _data.message = error.message;
            _data.item = false;
        }
        return _data;
    }
    async delete(id) {
        const _data = new ResultData_1.default();
        try {
            await this._model.findByIdAndDelete(id);
            _data.status = true;
            _data.message = message_1.message.Delete_Successful;
            _data.item = true;
        }
        catch (error) {
            _data.status = false;
            _data.message = error.message;
            _data.item = false;
        }
        return _data;
    }
}
exports.BaseRepository = BaseRepository;
//# sourceMappingURL=BaseRepository.js.map