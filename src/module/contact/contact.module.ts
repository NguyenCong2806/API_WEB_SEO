import { ContactRepository } from './../../repository/contact/ContactRepository';
import { ContactService } from 'src/services/Contact/Contact.service';
import { ContactController } from './../../controllers/contact/contact.controller';
import { ContactSchema } from './../../models/database/Contact';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { JwtModule } from '@nestjs/jwt';
@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Contact', schema: ContactSchema }]),
    JwtModule,
  ],
  controllers: [ContactController],
  providers: [
    ContactService,
    { provide: 'IContactRepository', useClass: ContactRepository },
  ],
  exports: [ContactService],
})
export class ContactModule {}
