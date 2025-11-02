import { Injectable, Inject } from '@nestjs/common';
import { BaseService } from '../BaseService';
import { Accordion } from 'src/models/database/Accordion';
import { IAccordionService } from './IAccordionService';
import { IAccordionRespository } from 'src/repository/accordion/IAccordionRepository';
import { FilterQuery } from 'mongoose';
import { plainToInstance } from 'class-transformer';

// Import các DTOs và Models cần thiết cho logic
import SerachPara from 'src/models/BaseModel/SerachPara';
import Paginations from 'src/models/BaseModel/Paginations';
import Results from 'src/models/BaseModel/Results';
import ResultData from 'src/models/BaseModel/ResultData';
import SiteParameter from 'src/models/BaseModel/SiteParameter';
import { AccordionDto } from 'src/models/viewmodel/accordion/AccordionDto';


@Injectable()
export class AccordionService
  extends BaseService<Accordion>
  implements IAccordionService
{
  constructor(
    // (Giả sử token của repo là 'IAccordionRepository' - sửa nếu tên khác)
    @Inject('IAccordionRepository')
    private readonly accordion_repository: IAccordionRespository,
  ) {
    super(accordion_repository);
  }

  // ===== GHI ĐÈ HÀM "finds" (Smart Logic) =====
  // Nhận 'SerachPara' từ Controller
  async finds(serachPara: SerachPara): Promise<Results<Accordion>> {
    const pagination = new Paginations<Accordion>();
    pagination.pageindex = serachPara.pageindex;
    pagination.pagesize = serachPara.pagesize;

    // 1. LOGIC TẠO QUERY (ĐÃ DỜI TỪ CONTROLLER VỀ ĐÂY)
    const condition: FilterQuery<Accordion> = {};
    if (serachPara.keyword && serachPara.keyword.trim() !== '') {
      // (Lưu ý: Sửa 'username' thành 'title' cho đúng logic)
      condition.title = { $regex: serachPara.keyword, $options: 'i' };
    }
    pagination.condition = condition;

    // 2. GỌI HÀM "NGÂY THƠ" CỦA LỚP CHA
    return await super.finds(pagination);
  }

  // ===== TRIỂN KHAI HÀM "findsBySite" (Logic nghiệp vụ) =====
  // (Hàm này được yêu cầu bởi IAccordionService)
  async findsBySite(parainfo: SiteParameter): Promise<ResultData> {
    
    // 1. LOGIC TẠO QUERY (ĐÃ DỜI TỪ CONTROLLER VỀ ĐÂY)
    const _datasite = { site: { $regex: parainfo.sitename } };
    const _dataloca = { location: parseInt(parainfo.location, 10) };
    const _datas = [_datasite, _dataloca];

    // 2. GỌI HÀM CỦA REPOSITORY
    // (Hàm 'findconditions' đã có sẵn trong BaseRepository)
    return await this.accordion_repository.findconditions(_datas);
  }

  // ===== GHI ĐÈ HÀM "create" (Smart Logic) =====
  // Nhận 'CreateAccordionDto' từ Controller
  async create(dto: AccordionDto): Promise<ResultData> {
    
    // 1. DÙNG AUTOMAPPER (plainToInstance) ĐỂ MAP DTO -> MODEL
    const newModel = plainToInstance(Accordion, dto);

    // (Thêm logic nghiệp vụ khác nếu cần, ví dụ: kiểm tra trùng lặp)

    // 2. GỌI HÀM "NGÂY THƠ" CỦA LỚP CHA
    return await super.create(newModel);
  }

  // ===== GHI ĐÈ HÀM "update" (Smart Logic) =====
  // Nhận 'id' và 'UpdateAccordionDto' từ Controller
  async update(id: string, dto: AccordionDto): Promise<ResultData> {
    
    // 1. DÙNG AUTOMAPPER (plainToInstance) ĐỂ MAP DTO -> Partial<Model>
    const updateData = plainToInstance(Accordion, dto);

    // 2. GỌI HÀM "NGÂY THƠ" CỦA LỚP CHA
    return await super.update(id, updateData);
  }
}