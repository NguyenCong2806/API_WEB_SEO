import { userlogin } from './../../models/viewmodel/auth/userlogin';
import { JwtService } from '@nestjs/jwt';
import { IUserService } from '../user/IUserService';
import { IAuthService } from './IAuthService';
import ResultData from 'src/models/BaseModel/ResultData';
export declare class AuthService implements IAuthService {
    private readonly usersService;
    private readonly jwtService;
    constructor(usersService: IUserService, jwtService: JwtService);
    signIn(data: userlogin): Promise<ResultData>;
    refreshToken(userId: string, rt: string): Promise<ResultData>;
    validateUser(username: string, pass: string): Promise<any>;
    logout(): Promise<void>;
    hashData(data: string): Promise<string>;
}
