"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseRepository = void 0;
const ResultData_1 = require("../models/BaseModel/ResultData");
const Results_1 = require("../models/BaseModel/Results");
const message_1 = require("../constants/message");
const httpStatus_1 = require("../constants/httpStatus");
class BaseRepository {
    constructor(_model) {
        this._model = _model;
        this._model = _model;
    }
    async findcondition(condition) {
        const _data = new ResultData_1.default();
        try {
            _data.status = true;
            _data.message = message_1.message.Download_data_successfully;
            _data.statuscode = httpStatus_1.httpstatus.Successful_responses;
            _data.item = await this._model.find(condition);
        }
        catch (error) {
            _data.status = false;
            _data.message = error.message;
            _data.statuscode = httpStatus_1.httpstatus.Server_errors;
            _data.item = false;
        }
        return _data;
    }
    async checkkeyword(condition) {
        const _data = new ResultData_1.default();
        try {
            const res = await this._model.find(condition);
            _data.status = true;
            _data.message =
                res != null ? message_1.message.NotExist_Message : message_1.message.Exist_Message;
            _data.statuscode = httpStatus_1.httpstatus.Successful_responses;
            _data.item = res != null ? false : true;
        }
        catch (error) {
            _data.status = false;
            _data.message = error.message;
            _data.statuscode = httpStatus_1.httpstatus.Server_errors;
            _data.item = false;
        }
        return _data;
    }
    async countcondition(condition) {
        const _data = new ResultData_1.default();
        try {
            const num = (await this._model.find(condition)).length;
            _data.status = true;
            _data.message = message_1.message.Download_data_successfully;
            _data.statuscode = httpStatus_1.httpstatus.Successful_responses;
            _data.item = num;
        }
        catch (error) {
            _data.status = false;
            _data.message = error.message;
            _data.statuscode = httpStatus_1.httpstatus.Server_errors;
            _data.item = false;
        }
        return _data;
    }
    async finds(item) {
        const result = new Results_1.default();
        try {
            const counts = (await this._model.find()).length;
            result.pageIndex = item.pageindex;
            result.totalCount = counts;
            result.totalPage = Math.ceil(counts / item.pagesize);
            if (item.condition != null) {
                result.items = await this._model
                    .find(item.condition)
                    .skip(item.pagesize * (item.pageindex - 1))
                    .limit(item.pagesize)
                    .sort({ createddate: -1 });
            }
            else {
                result.items = await this._model
                    .find()
                    .skip(item.pagesize * (item.pageindex - 1))
                    .limit(item.pagesize)
                    .sort({ createddate: -1 });
            }
        }
        catch (error) {
            throw new Error(error.message);
        }
        return result;
    }
    async find() {
        const _data = new ResultData_1.default();
        try {
            _data.status = true;
            _data.message = message_1.message.Download_data_successfully;
            _data.statuscode = httpStatus_1.httpstatus.Successful_responses;
            _data.item = await this._model.find();
        }
        catch (error) {
            _data.status = false;
            _data.message = error.message;
            _data.statuscode = httpStatus_1.httpstatus.Server_errors;
            _data.item = false;
        }
        return _data;
    }
    async findOne(id) {
        const _data = new ResultData_1.default();
        try {
            _data.status = true;
            _data.message = message_1.message.Download_data_successfully;
            _data.statuscode = httpStatus_1.httpstatus.Successful_responses;
            _data.item = (await this._model.findById(id).exec());
        }
        catch (error) {
            _data.status = false;
            _data.message = error.message;
            _data.statuscode = httpStatus_1.httpstatus.Server_errors;
            _data.item = false;
        }
        return _data;
    }
    async findOneValue(condition) {
        const _data = new ResultData_1.default();
        try {
            _data.status = true;
            _data.message = message_1.message.Download_data_successfully;
            _data.statuscode = httpStatus_1.httpstatus.Successful_responses;
            _data.item = (await this._model.findOne(condition));
        }
        catch (error) {
            _data.status = false;
            _data.message = error.message;
            _data.statuscode = httpStatus_1.httpstatus.Server_errors;
            _data.item = false;
        }
        return _data;
    }
    async create(item) {
        const _data = new ResultData_1.default();
        try {
            await this._model.insertMany(item);
            _data.status = true;
            _data.message = message_1.message.Add_Successful;
            _data.statuscode = httpStatus_1.httpstatus.Successful_responses;
            _data.item = true;
        }
        catch (error) {
            _data.status = false;
            _data.message = error.message;
            _data.statuscode = httpStatus_1.httpstatus.Server_errors;
            _data.item = false;
        }
        return _data;
    }
    async count() {
        const _data = new ResultData_1.default();
        try {
            const num = (await this._model.find()).length;
            _data.status = true;
            _data.message = message_1.message.Download_data_successfully;
            _data.statuscode = httpStatus_1.httpstatus.Successful_responses;
            _data.item = num;
        }
        catch (error) {
            _data.status = false;
            _data.message = error.message;
            _data.statuscode = httpStatus_1.httpstatus.Server_errors;
            _data.item = false;
        }
        return _data;
    }
    async update(id, item) {
        const _data = new ResultData_1.default();
        try {
            await this._model.findOneAndUpdate({ _id: id }, item);
            _data.status = true;
            _data.message = message_1.message.Edit_Successful;
            _data.statuscode = httpStatus_1.httpstatus.Successful_responses;
            _data.item = true;
        }
        catch (error) {
            _data.status = false;
            _data.message = error.message;
            _data.statuscode = httpStatus_1.httpstatus.Server_errors;
            _data.item = false;
        }
        return _data;
    }
    async delete(id) {
        const _data = new ResultData_1.default();
        try {
            const delete_item = await this._model.findById(id);
            if (delete_item) {
                await this._model.findByIdAndDelete(id);
            }
            _data.status = true;
            _data.message = message_1.message.Delete_Successful;
            _data.statuscode = httpStatus_1.httpstatus.Successful_responses;
            _data.item = true;
            return _data;
        }
        catch (error) {
            _data.status = false;
            _data.message = error.message;
            _data.statuscode = httpStatus_1.httpstatus.Server_errors;
            _data.item = false;
        }
    }
}
exports.BaseRepository = BaseRepository;
//# sourceMappingURL=BaseRepository.js.map