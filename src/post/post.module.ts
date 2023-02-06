import { Module } from '@nestjs/common';
import { PostController } from './controller/post.controller';
import { PostSchema } from './models/post.model';
import { PostService } from './services/post.service';
import { MongooseModule } from '@nestjs/mongoose';
import { PostRepository } from './repositories/post.repository';
import { UserController } from 'src/user/controllers/user.controller';
import { CategorySchema } from './models/category.model';
import { CategoryService } from './services/category.service';
import { CategoryRepository } from './repositories/category.repository';
import { CategoryController } from './controller/category.controller';
@Module({
    imports: [
        MongooseModule.forFeature([
            {
                name: 'Post',
                schema: PostSchema,
            },
            {
                name: 'Category',
                schema: CategorySchema,
            },
        ]),
        UserController,
    ],
    controllers: [PostController, CategoryController],
    providers: [PostService, PostRepository, CategoryRepository, CategoryService],
})
export class PostModule { }
