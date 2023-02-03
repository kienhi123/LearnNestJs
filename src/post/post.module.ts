import { Module } from '@nestjs/common';
import { PostController } from './controller/post.controller';
import { PostSchema } from './models/post.model';
import { PostService } from './post.service';
import { MongooseModule } from '@nestjs/mongoose';
import { PostRepository } from './repositories/post.rebository';
@Module({
    imports: [
        MongooseModule.forFeature([
            {
                name: 'Post',
                schema: PostSchema,
            },
        ]),
    ],
    controllers: [PostController],
    providers: [PostService, PostRepository],
})
export class PostModule { }
