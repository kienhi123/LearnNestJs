import { IsNotEmpty } from 'class-validator';

export class CreatePostDto {
    @IsNotEmpty()
    content: string;
    description: string;
    title: string;
}

export class UpdatePostDto {
    @IsNotEmpty()
    id: number;
    content: string;
    @IsNotEmpty()
    title: string;
}
