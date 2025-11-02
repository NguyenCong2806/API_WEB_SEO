
import {
    validate,
    validateOrReject,
    Contains,
    IsInt,
    Length,
    IsEmail,
    IsFQDN,
    IsDate,
    Min,
    Max,
    IsNotEmpty,
    IsString,
  } from 'class-validator';

export class CreateUserDto{
    @IsString()
    @IsNotEmpty({message:"Không được bỏ trống!"})
    username: string;

    @IsString()
    @IsNotEmpty({message:"Không được bỏ trống!"})
    @IsEmail()
    email: string;
    role: string;
    @IsString()
    @IsNotEmpty({message:"Không được bỏ trống!"})
    password: string;
}
