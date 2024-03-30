import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { MenuSchema } from 'src/models/database/Menu';
import { MenuController } from 'src/controllers/menu/menu.controller';
import { MenuService } from 'src/services/menu/menu.service';
import { MenuRepository } from 'src/repository/menu/menu.repository';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Menu', schema: MenuSchema },
    ]),
  ],
  controllers: [MenuController],
  providers: [
    MenuService,
    { provide: 'IMenuRepository', useClass: MenuRepository },
  ],
  exports: [MenuService],
})
export class MenuModule {}
