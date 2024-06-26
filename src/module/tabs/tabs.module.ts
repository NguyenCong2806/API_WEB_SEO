import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { TabsSchema } from 'src/models/database/Tabs';
import { TabsController } from 'src/controllers/tabs/tabs.controller';
import { TabsService } from 'src/services/tabs/tabs.service';
import { TabsRepository } from 'src/repository/tabs/TabsRepository';
import { JwtModule } from '@nestjs/jwt';
@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Tabs', schema: TabsSchema }]),
    JwtModule,
  ],
  controllers: [TabsController],
  providers: [
    TabsService,
    { provide: 'ITabsRepository', useClass: TabsRepository },
  ],
  exports: [TabsService],
})
export class TabsModule {}
