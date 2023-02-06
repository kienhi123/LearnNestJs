import { Schema, Document } from 'mongoose';

const UserSchema = new Schema(
    {
        name: String,
        email: String,
        password: String,
    },
    {
        collection: 'users',
    },
);

UserSchema.virtual('post', {
    rep: 'Post',
    localField: '_id',
    foreignField: 'user',
    justOne: false,
});

export { UserSchema };

export interface User extends Document {
    name: string;
    email: string;
    password: string;
}
