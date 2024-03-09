import {
    Body,
    Controller,
    Delete,
    Get,
    HttpStatus,
    Param,
    Post,
    Put,
    Query,
    Res,
  } from '@nestjs/common';
  import { Response } from 'express';
  import Paginations from 'src/models/BaseModel/Paginations';
  import SerachPara from 'src/models/BaseModel/SerachPara';
  import { Feedback } from 'src/models/database/Feedback';
  import { FeedbackService } from 'src/services/feedback/feedback.service';
  
  @Controller('feedback')
  export class FeedbackController {
    constructor(private readonly FeedbackService: FeedbackService) {}
  
    @Get('getall')
    async get(@Query() serachPara: SerachPara, @Res() res: Response) {
      const pagination = new Paginations<Feedback>();
  
      pagination.pageindex = serachPara.pageindex;
      pagination.pagesize = serachPara.pagesize;
      if (serachPara.keyword != null) {
        pagination.condition = { username: { $regex: serachPara.keyword } };
      }
      const respo = await this.FeedbackService.finds(pagination);
      res.status(HttpStatus.OK).json(respo);
    }
    @Get('getbyfeedback/:id')
    async find(@Param('id') id: string, @Res() res: Response) {
      const respo = await this.FeedbackService.findOne(id);
      res.status(HttpStatus.OK).json(respo);
    }
    @Post('addfeedback')
    async create(@Body() Feedbackdto: Feedback, @Res() res: Response) {
      const respo = await this.FeedbackService.create(Feedbackdto);
      res.status(HttpStatus.CREATED).json(respo);
    }
    @Put('editfeedback')
    async update(@Body() Feedbackdto: Feedback, @Res() res: Response) {
      const respo = await this.FeedbackService.update(Feedbackdto);
      res.status(HttpStatus.OK).json(respo);
    }
  
    @Delete('delfeedback/:id')
    async delete(@Param('id') id: string, @Res() res: Response) {
      const respo = await this.FeedbackService.remove(id);
      res.status(HttpStatus.OK).json(respo);
    }
  }
  