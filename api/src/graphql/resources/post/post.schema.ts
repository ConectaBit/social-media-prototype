const postTypes = `

    type Post {
        id: ID!
        title: String!
        content: String!
        description: String!
        createdAt: String!
        updatedAt: String!
        author: User!
        comments(first: Int, offset: Int): [Comment! ]! 
        elements(first: Int, offset: Int): [Element !]!
    }

    input PostInput {
        title: String!
        content: String!
        description: String!
    }
`;

const postQueries = `
    posts(first: Int, offset: Int): [ Post! ]!
    post(id: ID!): Post
`;

const postMutations = `
    createPost(input: PostInput!): Post
    updatePost(id: ID!, input: PostInput!): Post
    deletePost(id: ID!): Boolean
`;

export {
    postTypes,
    postQueries,
    postMutations
}