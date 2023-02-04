import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_FILTER } from '@nestjs/core';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostModule } from './post/post.module';
import { ExceptionLoggerFilter } from './post/utils/exceptionLogger.filter';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    PostModule,
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGODB_URL, {
      useNewUrlParser: true,
      useFindAndModify: false,
      useCreateIndex: true,
    }),
    UserModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    //    {
    //   provide:APP_FILTER,
    //   useClass:ExceptionLoggerFilter,
    // }
  ],
})
export class AppModule { }
