import ResultData from 'src/models/BaseModel/ResultData';
import { IBaseRepository } from './../repository/IBaseRepository';
import Paginations from 'src/models/BaseModel/Paginations';
import Results from 'src/models/BaseModel/Results';
import { BaseEntity } from './../models/database/BaseEntity';
import { IBaseService } from './IBaseService';
import { FilterQuery } from 'mongoose';
export abstract class BaseService<M extends BaseEntity>
  implements IBaseService<M>
{
  constructor(private readonly repository: IBaseRepository<M>) {}

  async findconditions(condition?: FilterQuery<M>[]): Promise<ResultData> {
    return await this.repository.findconditions(condition);
  }
  async findcondition(condition?: FilterQuery<M>): Promise<ResultData> {
    return await this.repository.findcondition(condition);
  }
  async checkkeyword(condition?: FilterQuery<M>): Promise<ResultData> {
    return await this.repository.checkkeyword(condition);
  }
  async countcondition(condition?: FilterQuery<M>): Promise<ResultData> {
    return await this.repository.countcondition(condition);
  }
  async find(): Promise<ResultData> {
    return await this.repository.find();
  }
  async create(item: M): Promise<ResultData> {
    return await this.repository.create(item);
  }
  async update(id: string,item: Partial<M>): Promise<ResultData> {
    return await this.repository.update(id, item as Partial<M>);
  }
  async remove(id: string): Promise<ResultData> {
    return await this.repository.delete(id);
  }
  async finds(item: Paginations<M>): Promise<Results<M>> {
    return await this.repository.finds(item);
  }
  async findOne(id: string): Promise<ResultData> {
    return await this.repository.findOne(id);
  }
  async findOneValue(condition?: FilterQuery<M>): Promise<ResultData> {
    return await this.repository.findOneValue(condition);
  }
}
