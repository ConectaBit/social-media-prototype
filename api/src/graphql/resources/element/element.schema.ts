const elementTypes = `

    type Element {
        id: ID!
        description: String
        name: String!
        author: User!
        createdAt: String
        updatedAt: String
        post: Post!
    }

    input ElementInput {
        name: String!
        description: String!
        post: Int!
    }
`;

const elementQueries = `
    elementsByPost(postId: ID!, first: Int, offset: Int): [ Element !]!
    elements(first: Int, offset: Int): [ Element! ]!
    element(id: ID!): Element
`;

const elementMutations = `
    createElement(input: ElementInput!): Element
    updateElement(id: ID!, input: ElementInput!): Element
    deleteElement(id: ID!): Boolean
`;

export { elementTypes, elementQueries, elementMutations };
