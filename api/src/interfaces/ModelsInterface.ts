import { CommentModel } from "../models/CommentModel";
import { UserModel } from "../models/UserModel";
import { PostModel } from "../models/PostModel";
import { ElementModel } from '../models/ElementModel'

export interface ModelsInterface {
    
    Comment: CommentModel;
    Post: PostModel;
    User: UserModel;
    Element: ElementModel;
}