import { Injectable, Inject } from '@nestjs/common';
import { BaseService } from '../BaseService';
import { About } from 'src/models/database/About';
import { IAboutService } from './IAboutService';
import { IAboutRepository } from 'src/repository/about/IAboutRepository';
import SerachPara from 'src/models/BaseModel/SerachPara';
import { FilterQuery } from 'mongoose';
import Paginations from 'src/models/BaseModel/Paginations';
import Results from 'src/models/BaseModel/Results';
import ResultData from 'src/models/BaseModel/ResultData';
import { plainToInstance } from 'class-transformer';
import { AboutDto } from 'src/models/viewmodel/about/aboutDto';

@Injectable()
export class AboutService extends BaseService<About> implements IAboutService {
  constructor(
    @Inject('IAboutRepository')
    private readonly about_repository: IAboutRepository,
  ) {
    super(about_repository);
  }

  // ===== GHI ĐÈ HÀM "finds" (Smart Service) =====
  async finds(serachPara: SerachPara): Promise<Results<About>> {
    const pagination = new Paginations<About>();
    pagination.pageindex = serachPara.pageindex;
    pagination.pagesize = serachPara.pagesize;

    // 1. LOGIC QUERY (ĐÃ DỜI TỪ CONTROLLER VỀ ĐÂY)
    const condition: FilterQuery<About> = {};
    if (serachPara.keyword && serachPara.keyword.trim() !== '') {
      // (Lưu ý: Sửa 'username' thành trường bạn muốn tìm, ví dụ 'title')
      condition.title = { $regex: serachPara.keyword, $options: 'i' }; 
    }
    pagination.condition = condition;
    return await super.finds(pagination);
  }

  // ===== GHI ĐÈ HÀM "create" (Smart Service) =====
  async create(dto: AboutDto): Promise<ResultData> {
    // 1. MAPPING (DTO -> Model)
    const newModel = plainToInstance(About, dto);
    // (Thêm logic nghiệp vụ khác nếu cần)
    return await super.create(newModel);
  }
  // ===== GHI ĐÈ HÀM "update" (Smart Service) =====
  async update(id: string, dto: AboutDto): Promise<ResultData> {
    // 1. MAPPING (DTO -> Partial<Model>)
    const updateData = plainToInstance(About, dto);

    return await super.update(id, updateData);
  }
}