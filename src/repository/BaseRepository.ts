import ResultData from 'src/models/BaseModel/ResultData';
import { IBaseRepository } from './IBaseRepository';
import { BaseEntity } from './../models/database/BaseEntity';
import Paginations from 'src/models/BaseModel/Paginations';
import Results from 'src/models/BaseModel/Results';
import { FilterQuery, Model, Types } from 'mongoose';
import { message } from 'src/constants/message';

export abstract class BaseRepository<T extends BaseEntity>
  implements IBaseRepository<T>
{
  protected constructor(private readonly _model: Model<T>) {}

  async findconditions(conditions?: FilterQuery<T>[]): Promise<ResultData> {
    const _data = new ResultData();
    try {
      _data.status = true;
      _data.message = message.Download_data_successfully;
      if (!conditions || conditions.length === 0) {
         _data.item = [];
      } else {
         // Lưu ý: Dùng $or nếu muốn tìm 1 trong các điều kiện.
         // Nếu muốn tìm TẤT CẢ điều kiện (AND), hãy xem xét lại cách truyền tham số.
         _data.item = await this._model.find({ $or: conditions });
      }
    } catch (error: any) {
      _data.status = false;
      _data.message = error.message as string;
      _data.item = null;
    }
    return _data;
  }

  async findcondition(condition?: FilterQuery<T>): Promise<ResultData> {
    const _data = new ResultData();
    try {
      _data.status = true;
      _data.message = message.Download_data_successfully;
      _data.item = await this._model.find(condition || {});
    } catch (error: any) {
      _data.status = false;
      _data.message = error.message as string;
      _data.item = null;
    }
    return _data;
  }

  async checkkeyword(condition?: FilterQuery<T>): Promise<ResultData> {
    const _data = new ResultData();
    try {
      // .exists() trả về { _id: ... } nếu tìm thấy, hoặc null nếu không.
      const doc = await this._model.exists(condition || {});
      const exists = !!doc; // Ép kiểu về boolean

      _data.status = true;
      _data.message = exists ? message.Exist_Message : message.NotExist_Message;
      _data.item = exists;
    } catch (error: any) {
      _data.status = false;
      _data.message = error.message as string;
      _data.item = false;
    }
    return _data;
  }

  async countcondition(condition?: FilterQuery<T>): Promise<ResultData> {
    const _data = new ResultData();
    try {
      const num = await this._model.countDocuments(condition || {});
      _data.status = true;
      _data.message = message.Download_data_successfully;
      _data.item = num;
    } catch (error: any) {
      _data.status = false;
      _data.message = error.message as string;
      _data.item = 0;
    }
    return _data;
  }

  async finds(item: Paginations<T>): Promise<Results<T>> {
    const result = new Results<T>();
    try {
      const condition = item.condition || {};
      const counts = await this._model.countDocuments(condition);
      result.pageIndex = item.pageindex;
      result.totalCount = counts;
      // Tránh lỗi chia cho 0
      result.totalPage = counts > 0 ? Math.ceil(counts / item.pagesize) : 1;

      result.items = await this._model
        .find(condition)
        .skip(item.pagesize * (item.pageindex - 1))
        .limit(item.pagesize)
        // Ép kiểu any cho sort để tránh lỗi TypeScript nếu BaseEntity không có createddate
        .sort({ createddate: -1 } as any);
    } catch (error: any) {
      result.items = [];
      // Bạn có thể log error tại đây nếu cần
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
      _data.item = [];
    }
    return _data;
  }

  async findOne(id: string): Promise<ResultData> {
    const _data = new ResultData();
    try {
      if (!Types.ObjectId.isValid(id)) {
         _data.status = false;
         _data.message = "Invalid ID format";
         _data.item = null;
         return _data;
      }
      const item = await this._model.findById(id).exec();
      if (item) {
        _data.status = true;
        _data.message = message.Download_data_successfully;
        _data.item = item;
      } else {
        _data.status = false;
        _data.message = message.NotExist_Message;
        _data.item = null;
      }
    } catch (error: any) {
      _data.status = false;
      _data.message = error.message as string;
      _data.item = null;
    }
    return _data;
  }

  async findOneValue(condition?: FilterQuery<T>): Promise<ResultData> {
    const _data = new ResultData();
    try {
      const item = await this._model.findOne(condition || {}).exec();
      if (item) {
        _data.status = true;
        _data.message = message.Download_data_successfully;
        _data.item = item;
      } else {
        _data.status = false;
        _data.message = message.NotExist_Message;
        _data.item = null;
      }
    } catch (error: any) {
      _data.status = false;
      _data.message = error.message as string;
      _data.item = null;
    }
    return _data;
  }

  async create(item: T): Promise<ResultData> {
    const _data = new ResultData();
    try {
      const newItem = await this._model.create(item);
      _data.status = true;
      _data.message = message.Add_Successful;
      _data.item = newItem; // Trả về item mới tạo sẽ hữu ích hơn true
    } catch (error: any) {
      _data.status = false;
      _data.message = error.message as string;
      _data.item = null;
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
      _data.item = 0;
    }
    return _data;
  }

  async update(id: string, item: Partial<T>): Promise<ResultData> {
    const _data = new ResultData();
    try {
      if (!Types.ObjectId.isValid(id)) {
         _data.status = false;
         _data.message = "Invalid ID format";
         return _data;
      }
      // Thêm { new: true } để trả về document sau khi đã update
      const updatedItem = await this._model.findByIdAndUpdate(id, { $set: item }, { new: true }).exec();

      if (updatedItem) {
        _data.status = true;
        _data.message = message.Edit_Successful;
        _data.item = updatedItem;
      } else {
         _data.status = false;
         _data.message = message.NotExist_Message;
         _data.item = null;
      }
    } catch (error: any) {
      _data.status = false;
      _data.message = error.message as string;
      _data.item = null;
    }
    return _data;
  }

  async delete(id: string): Promise<ResultData> {
    const _data = new ResultData();
    try {
      if (!Types.ObjectId.isValid(id)) {
         _data.status = false;
         _data.message = "Invalid ID format";
         return _data;
      }
      const deletedItem = await this._model.findByIdAndDelete(id).exec();
      if (deletedItem) {
        _data.status = true;
        _data.message = message.Delete_Successful;
        _data.item = deletedItem; // Trả về item đã xóa (tùy chọn)
      } else {
        _data.status = false;
        _data.message = message.NotExist_Message;
        _data.item = null;
      }
    } catch (error: any) {
      _data.status = false;
      _data.message = error.message as string;
      _data.item = null;
    }
    return _data;
  }
}