import { UserMail } from './../../models/viewmodel/user/UserMail';
import { MailerService } from '@nestjs-modules/mailer';
export declare class MailService {
    private mailerService;
    constructor(mailerService: MailerService);
    sendUserConfirmation(user: UserMail, token: string): Promise<void>;
}
