const elementTypes = `

    type Element {
        id: ID!
        description: String!
        tags: []
        name: String!
        createdAt: String
        updatedAt: String
        comments(first: Int, offset: Int): [Comment! ]! 
    }

    input ElementInput {
        name: String!
        description!
        tags: []
    }

`;

const elementQueries = `
    elements(first: Int, offset: Int): [ Element! ]!
    element(id: ID!): Element
`;

const elementMutations = `
    createElement(input: ElementInput!): Element
    updateElement(id: ID!, input: ElementInput!): Element
    deleteElement(id: ID!): Boolean
`;

export { elementTypes, elementQueries, elementMutations };
