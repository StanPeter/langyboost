import builder from 'builder';

export * from './Phrase';
export * from './User';

// initialize query and mutation empty objects -> they will be enriched from imported models
builder.queryType({});
builder.mutationType({});
