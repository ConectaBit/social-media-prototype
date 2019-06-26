import { commentQueries } from './resources/comment/comment.schema';
import { postQueries } from './resources/post/post.schema';
import { userQueries } from './resources/user/user.schema';
import { elementQueries } from './resources/element/element.schema';

const Query = `
    type Query {
        ${commentQueries}
        ${postQueries}
        ${userQueries}
        ${elementQueries}
    }
`;

export {
    Query
}