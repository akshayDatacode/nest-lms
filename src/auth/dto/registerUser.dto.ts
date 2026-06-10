import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class RegisterDto {
  
  @IsString()
  fname: string;
  lname: string;
  
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  password: string;
}