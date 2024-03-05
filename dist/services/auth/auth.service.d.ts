import { authvm } from './../../models/viewmodel/auth/authvm';
import { UserService } from './../user/user.service';
import { userlogin } from './../../models/viewmodel/auth/userlogin';
import { JwtService } from '@nestjs/jwt';
export declare class AuthService {
    private usersService;
    private jwtService;
    constructor(usersService: UserService, jwtService: JwtService);
    signIn(data: userlogin): Promise<authvm>;
    logout(): Promise<void>;
    hashData(data: string): Promise<string>;
}
