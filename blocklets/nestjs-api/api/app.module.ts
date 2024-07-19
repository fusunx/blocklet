import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { User } from './user.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql', // 数据库类型，例如 postgres、mysql、sqlite 等
      host: 'mysql.sqlpub.com', // 数据库主机名
      port: 3306, // 数据库端口号
      username: 'leo_xianfu1', // 数据库用户名
      password: 'CMtbBcYHBdur9PWc', // 数据库密码
      database: 'blocklet', // 数据库名称
      entities: [User],
      synchronize: false,
    }),
    TypeOrmModule.forFeature([User]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
