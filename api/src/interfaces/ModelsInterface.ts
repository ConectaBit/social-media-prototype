import { CommentModel } from "../models/CommentMode";
import { UserModel } from "../models/UserModel";
import { PostModel } from "../models/PostModel";
import { ElementModel } from '../models/ElementModel'

export interface ModelsInterface {
    
    Comment: CommentModel;
    Post: PostModel;
    User: UserModel;
    ElementModel: ElementModel;
    
}