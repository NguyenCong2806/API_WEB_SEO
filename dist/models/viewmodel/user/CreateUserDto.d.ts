import { BaseEntity } from 'src/models/database/BaseEntity';
export declare class CreateUserDto extends BaseEntity {
    username: string;
    email: string;
    role: string;
    password: string;
}
