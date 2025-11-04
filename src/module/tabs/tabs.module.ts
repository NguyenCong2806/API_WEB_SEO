import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { TabsSchema } from 'src/models/database/Tabs';
import { TabsController } from 'src/controllers/tabs/tabs.controller';
import { TabsService } from 'src/services/tabs/tabs.service';
import { TabsRepository } from 'src/repository/tabs/TabsRepository';
import { ITabsService } from 'src/services/tabs/ITabsService';
@Module({
  imports: [MongooseModule.forFeature([{ name: 'Tabs', schema: TabsSchema }])],
  controllers: [TabsController],
  providers: [
    {
      provide: ITabsService, // <-- Token (Giá trị)
      useClass: TabsService, // <-- Class (Thực thi)
    },
    { provide: 'ITabsRepository', useClass: TabsRepository },
  ],
  exports: [ITabsService],
})
export class TabsModule {}
