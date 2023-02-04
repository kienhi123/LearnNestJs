import { Module } from '@nestjs/common';
import { PostController } from './controller/post.controller';
import { PostSchema } from './models/post.model';
import { PostService } from './services/post.service';
import { MongooseModule } from '@nestjs/mongoose';
import { PostRepository } from './repositories/post.rebository';
import { UserController } from 'src/user/controllers/user.controller';
@Module({
    imports: [
        MongooseModule.forFeature([
            {
                name: 'Post',
                schema: PostSchema,
            },
        ]),
        UserController,
    ],
    controllers: [PostController],
    providers: [PostService, PostRepository],
})
export class PostModule { }
