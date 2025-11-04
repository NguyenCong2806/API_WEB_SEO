import { CreateUserDto } from '../models/viewmodel/user/CreateUserDto';
import SerachPara from 'src/models/BaseModel/SerachPara';
import { IUserService } from 'src/services/user/IUserService';
import { UpdateUserDto } from 'src/models/viewmodel/user/UpdateUserDto';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: IUserService);
    get(serachPara: SerachPara): Promise<import("../models/BaseModel/Results").default<import("../models/database/User").User>>;
    find(id: string): Promise<import("../models/BaseModel/ResultData").default>;
    create(createUserDto: CreateUserDto): Promise<import("../models/BaseModel/ResultData").default>;
    update(id: string, updateTodoDto: UpdateUserDto): Promise<import("../models/BaseModel/ResultData").default>;
    delete(id: string): Promise<import("../models/BaseModel/ResultData").default>;
}
