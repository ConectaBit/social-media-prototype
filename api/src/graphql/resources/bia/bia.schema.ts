const biaTypes = `
    type Bia {
        data: String
        titulo: String
        autores: String
        link: String
    }
`;

const biaQueries = `
    biology(start: Int!): [Bia !]!
    chemistry(start: Int!): [Bia !]!
    mathematics(start: Int!): [Bia !]!
    phisics(start: Int!): [Bia !]!
`;

export { biaTypes, biaQueries };
