import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { User } from './user.entity';
import { UpdateResult } from 'typeorm';
import { logger } from '@blocklet/sdk/lib/config';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {
    this.appService = appService;
  }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/user')
  async getUser(): Promise<User> {
    const user = this.appService.findById();
    return user;
  }

  @Post('/user/update')
  async updateUser(@Body() user): Promise<UpdateResult | { message: string; code: number }> {
    if (!user.username || !user.username) {
      return Promise.resolve({
        message: '请输入数据',
        code: 500,
      });
    }
    const result = this.appService.updateUser(user);
    logger.info(result);

    return result;
  }

  @Post('/user/test')
  async test(req) {
    return req.data;
  }
}
