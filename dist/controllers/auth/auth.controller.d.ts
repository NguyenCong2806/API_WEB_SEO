import { userlogin } from 'src/models/viewmodel/auth/userlogin';
import ResultData from 'src/models/BaseModel/ResultData';
import { IAuthService } from 'src/services/auth/IAuthService';
export declare class AuthController {
    private readonly authService;
    constructor(authService: IAuthService);
    signIn(signInDto: userlogin): Promise<ResultData>;
    refreshToken(userId: string, refreshToken: string): Promise<ResultData>;
    logout(userId: string): Promise<ResultData>;
}
