import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // @Get('api/products') // This Decorator marks the method as a handler for GET requests to the root path ('api/products')
  @Get() // This Decorator marks the method as a handler for GET requests to the root path ('/')
  getHello(): string {
    return this.appService.getHello();
  }
}
