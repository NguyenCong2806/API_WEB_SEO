import { userlogin } from 'src/models/viewmodel/auth/userlogin';
import { AuthService } from './../../services/auth/auth.service';
import { authvm } from 'src/models/viewmodel/auth/authvm';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    signIn(signInDto: userlogin): Promise<authvm>;
    logout(): void;
}
