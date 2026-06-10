import { Body, Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/registerUser.dto';
import { LoginDto } from './dto/loginUser.dto';
import { AuthGuard } from './auth.guard';
import { UserService } from 'src/user/user.service';

@Controller('auth') // This Decorator marks the class as a NestJS controller and specifies that it will handle requests to the 'auth' path (e.g., '/auth/register').
export class AuthController {
  authService: AuthService;
  userService: UserService;

  constructor(
    authService: AuthService,
    userService: UserService,
  ) {
    this.authService = authService;
    this.userService = userService;
  }

  @Post('register')
  async register(@Body() registerUserDto: RegisterDto) { // Data Transfer Object
    // Logic for user register
    const createdUserToken = await this.authService.registerService(registerUserDto)
    return { access_token: createdUserToken }
  }

  @Post('login')
  async login(@Body() loginUserDto: LoginDto) {
    console.log('Login Req: payload', loginUserDto)

    /**
     * 1. Receive email and password
     * 2. Match the email and password
     * 3. Generate JWT Token
     * 
     */
  }

  @UseGuards(AuthGuard) // Middleware to check JWT Token
  @Get('profile')
  async getProfile(@Request() req) { // request passed by gaurd
    const userId = req.user.sub
    const user = await this.userService.getUserById(userId)

    return { user: { fname: user?.fname, password: undefined } }
  }
}
