"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseRepository = void 0;
const ResultData_1 = require("../models/BaseModel/ResultData");
const Results_1 = require("../models/BaseModel/Results");
const mongoose_1 = require("mongoose");
const message_1 = require("../constants/message");
class BaseRepository {
    constructor(_model) {
        this._model = _model;
    }
    async findconditions(conditions) {
        const _data = new ResultData_1.default();
        try {
            _data.status = true;
            _data.message = message_1.message.Download_data_successfully;
            if (!conditions || conditions.length === 0) {
                _data.item = [];
            }
            else {
                _data.item = await this._model.find({ $or: conditions });
            }
        }
        catch (error) {
            _data.status = false;
            _data.message = error.message;
            _data.item = null;
        }
        return _data;
    }
    async findcondition(condition) {
        const _data = new ResultData_1.default();
        try {
            _data.status = true;
            _data.message = message_1.message.Download_data_successfully;
            _data.item = await this._model.find(condition || {});
        }
        catch (error) {
            _data.status = false;
            _data.message = error.message;
            _data.item = null;
        }
        return _data;
    }
    async checkkeyword(condition) {
        const _data = new ResultData_1.default();
        try {
            const doc = await this._model.exists(condition || {});
            const exists = !!doc;
            _data.status = true;
            _data.message = exists ? message_1.message.Exist_Message : message_1.message.NotExist_Message;
            _data.item = exists;
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
            const num = await this._model.countDocuments(condition || {});
            _data.status = true;
            _data.message = message_1.message.Download_data_successfully;
            _data.item = num;
        }
        catch (error) {
            _data.status = false;
            _data.message = error.message;
            _data.item = 0;
        }
        return _data;
    }
    async finds(item) {
        const result = new Results_1.default();
        try {
            const condition = item.condition || {};
            const counts = await this._model.countDocuments(condition);
            result.pageIndex = item.pageindex;
            result.totalCount = counts;
            result.totalPage = counts > 0 ? Math.ceil(counts / item.pagesize) : 1;
            result.items = await this._model
                .find(condition)
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
            _data.item = [];
        }
        return _data;
    }
    async findOne(id) {
        const _data = new ResultData_1.default();
        try {
            if (!mongoose_1.Types.ObjectId.isValid(id)) {
                _data.status = false;
                _data.message = "Invalid ID format";
                _data.item = null;
                return _data;
            }
            const item = await this._model.findById(id).exec();
            if (item) {
                _data.status = true;
                _data.message = message_1.message.Download_data_successfully;
                _data.item = item;
            }
            else {
                _data.status = false;
                _data.message = message_1.message.NotExist_Message;
                _data.item = null;
            }
        }
        catch (error) {
            _data.status = false;
            _data.message = error.message;
            _data.item = null;
        }
        return _data;
    }
    async findOneValue(condition) {
        const _data = new ResultData_1.default();
        try {
            const item = await this._model.findOne(condition || {}).exec();
            if (item) {
                _data.status = true;
                _data.message = message_1.message.Download_data_successfully;
                _data.item = item;
            }
            else {
                _data.status = false;
                _data.message = message_1.message.NotExist_Message;
                _data.item = null;
            }
        }
        catch (error) {
            _data.status = false;
            _data.message = error.message;
            _data.item = null;
        }
        return _data;
    }
    async create(item) {
        const _data = new ResultData_1.default();
        try {
            const newItem = await this._model.create(item);
            _data.status = true;
            _data.message = message_1.message.Add_Successful;
            _data.item = newItem;
        }
        catch (error) {
            _data.status = false;
            _data.message = error.message;
            _data.item = null;
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
            _data.item = 0;
        }
        return _data;
    }
    async update(id, item) {
        const _data = new ResultData_1.default();
        try {
            if (!mongoose_1.Types.ObjectId.isValid(id)) {
                _data.status = false;
                _data.message = "Invalid ID format";
                return _data;
            }
            const updatedItem = await this._model.findByIdAndUpdate(id, { $set: item }, { new: true }).exec();
            if (updatedItem) {
                _data.status = true;
                _data.message = message_1.message.Edit_Successful;
                _data.item = updatedItem;
            }
            else {
                _data.status = false;
                _data.message = message_1.message.NotExist_Message;
                _data.item = null;
            }
        }
        catch (error) {
            _data.status = false;
            _data.message = error.message;
            _data.item = null;
        }
        return _data;
    }
    async delete(id) {
        const _data = new ResultData_1.default();
        try {
            if (!mongoose_1.Types.ObjectId.isValid(id)) {
                _data.status = false;
                _data.message = "Invalid ID format";
                return _data;
            }
            const deletedItem = await this._model.findByIdAndDelete(id).exec();
            if (deletedItem) {
                _data.status = true;
                _data.message = message_1.message.Delete_Successful;
                _data.item = deletedItem;
            }
            else {
                _data.status = false;
                _data.message = message_1.message.NotExist_Message;
                _data.item = null;
            }
        }
        catch (error) {
            _data.status = false;
            _data.message = error.message;
            _data.item = null;
        }
        return _data;
    }
}
exports.BaseRepository = BaseRepository;
//# sourceMappingURL=BaseRepository.js.map