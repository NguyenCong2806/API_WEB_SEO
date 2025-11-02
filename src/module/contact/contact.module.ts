import { ContactRepository } from './../../repository/contact/ContactRepository';
import { ContactService } from 'src/services/Contact/Contact.service';
import { ContactController } from './../../controllers/contact/contact.controller';
import { ContactSchema } from './../../models/database/Contact';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { IContactService } from 'src/services/Contact/IContactService';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Contact', schema: ContactSchema }]),
  ],
  controllers: [ContactController],
  providers: [
    {
      provide: IContactService, // <-- Token (Giá trị)
      useClass: ContactService,  // <-- Class (Thực thi)
    },
    { provide: 'IContactRepository', useClass: ContactRepository },
  ],
  exports: [IContactService],
})
export class ContactModule { }
