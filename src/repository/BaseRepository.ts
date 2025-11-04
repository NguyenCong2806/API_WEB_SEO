import ResultData from 'src/models/BaseModel/ResultData';
import { IBaseRepository } from './IBaseRepository';
import { BaseEntity } from './../models/database/BaseEntity';
import Paginations from 'src/models/BaseModel/Paginations';
import Results from 'src/models/BaseModel/Results';
import { FilterQuery, Model } from 'mongoose';
import { message } from 'src/constants/message';

export abstract class BaseRepository<T extends BaseEntity>
  implements IBaseRepository<T> {
  protected constructor(private readonly _model: Model<T>) {
    this._model = _model;
  }
  async findconditions(conditions?: FilterQuery<T>[]): Promise<ResultData> {
    const _data = new ResultData();
    try {
      _data.status = true;
      _data.message = message.Download_data_successfully;
      _data.item = await this._model.find({ $or: conditions });
    } catch (error: any) {
      _data.status = false;
      _data.message = error.message as string;
      _data.item = false;
    }
    return _data;
  }
  async findcondition(condition?: FilterQuery<T>): Promise<ResultData> {
    const _data = new ResultData();
    try {
      _data.status = true;
      _data.message = message.Download_data_successfully;
      _data.item = await this._model.find(condition);
    } catch (error: any) {
      _data.status = false;
      _data.message = error.message as string;
      _data.item = false;
    }
    return _data;
  }
  async checkkeyword(condition?: FilterQuery<T>): Promise<ResultData> {
    const _data = new ResultData();
    try {
      // Dùng .exists() là nhanh nhất để kiểm tra sự tồn tại
      const docExists = await this._model.exists(condition);

      _data.status = true;
      if (docExists) {
        _data.message = message.Exist_Message;
        _data.item = true; // Tồn tại -> true
      } else {
        _data.message = message.NotExist_Message;
        _data.item = false; // Không tồn tại -> false
      }
    } catch (error: any) {
      _data.status = false;
      _data.message = error.message as string;
      _data.item = false; // Mặc định là false khi có lỗi
    }
    return _data;
  }
  async countcondition(condition?: FilterQuery<T>): Promise<ResultData> {
    const _data = new ResultData();
    try {
      const num = await this._model.countDocuments(condition);
      _data.status = true;
      _data.message = message.Download_data_successfully;
      _data.item = num;
    } catch (error: any) {
      _data.status = false;
      _data.message = error.message as string;
      _data.item = false;
    }
    return _data;
  }
  async finds(item: Paginations<T>): Promise<Results<T>> {
    const result = new Results<T>();
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
    } catch (error: any) {
      result.items = [];
    }

    return result;
  }

  async find(): Promise<ResultData> {
    const _data = new ResultData();
    try {
      _data.status = true;
      _data.message = message.Download_data_successfully;
      _data.item = await this._model.find();
    } catch (error: any) {
      _data.status = false;
      _data.message = error.message as string;
      _data.item = false;
    }
    return _data;
  }

  async findOne(id: any): Promise<ResultData> {
    const _data = new ResultData();
    try {
      _data.status = true;
      _data.message = message.Download_data_successfully;
      _data.item = (await this._model.findById(id).exec()) as T;
    } catch (error: any) {
      _data.status = false;
      _data.message = error.message as string;
      _data.item = false;
    }
    return _data;
  }
  async findOneValue(condition?: FilterQuery<T>): Promise<ResultData> {
    const _data = new ResultData();
    try {
      _data.status = true;
      _data.message = message.Download_data_successfully;
      _data.item = (await this._model.findOne(condition)) as T;
    } catch (error: any) {
      _data.status = false;
      _data.message = error.message as string;
      _data.item = false;
    }
    return _data;
  }
  async create(item: T): Promise<ResultData> {
    const _data = new ResultData();
    try {
      await this._model.create(item);
      _data.status = true;
      _data.message = message.Add_Successful;
      _data.item = true;
    } catch (error: any) {
      _data.status = false;
      _data.message = error.message as string;
      _data.item = false;
    }
    return _data;
  }
  async count(): Promise<ResultData> {
    const _data = new ResultData();
    try {
      const num = await this._model.countDocuments();
      _data.status = true;
      _data.message = message.Download_data_successfully;
      _data.item = num;
    } catch (error: any) {
      _data.status = false;
      _data.message = error.message as string;
      _data.item = false;
    }
    return _data;
  }
  async update(id: any, item: Partial<T>): Promise<ResultData> {
    const _data = new ResultData();
    try {
      await this._model.findOneAndUpdate({ _id: id }, { $set: item });
      _data.status = true;
      _data.message = message.Edit_Successful;
      _data.item = true;
    } catch (error: any) {
      _data.status = false;
      _data.message = error.message as string;
      _data.item = false;
    }
    return _data;
  }
  async delete(id: any): Promise<ResultData> {
    const _data = new ResultData();
    try {
      await this._model.findByIdAndDelete(id);
      _data.status = true;
      _data.message = message.Delete_Successful;
      _data.item = true;
    } catch (error: any) {
      _data.status = false;
      _data.message = error.message as string;
      _data.item = false;
    }
    return _data;
  }
}
