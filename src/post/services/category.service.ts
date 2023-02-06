import {
    HttpException,
    HttpStatus,
    Injectable,
    NotFoundException,
} from '@nestjs/common';
import { CategoryRepository } from '../repositories/category.repository';
import { PostRepository } from '../repositories/post.repository';
import { CreateCategoryDto } from '../dto/category.dto';
@Injectable()
export class CategoryService {
    constructor(
        private readonly categoryRepository: CategoryRepository,
        private readonly postRepository: PostRepository,
    ) { }

    async getAll() {
        return await this.categoryRepository.getByCondition({});
    }

    async create(CreateCategoryDto: CreateCategoryDto) {
        return await this.categoryRepository.create(CreateCategoryDto);
    }

    async getPosts(category_id) {
        return await this.postRepository.getByCondition({
            categories: { $elemMatch: { $eq: category_id } },
        });
    }
}
