
Object.defineProperty(exports, "__esModule", { value: true });

const {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  NotFoundError,
  getPrismaClient,
  sqltag,
  empty,
  join,
  raw,
  Decimal,
  Debug,
  objectEnumValues,
  makeStrictEnum,
  Extensions,
  warnOnce,
  defineDmmfProperty,
  Public,
} = require('./runtime/edge')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.4.2
 * Query Engine version: ac9d7041ed77bcc8a8dbd2ab6616b39013829574
 */
Prisma.prismaVersion = {
  client: "5.4.2",
  engine: "ac9d7041ed77bcc8a8dbd2ab6616b39013829574"
}

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError
Prisma.PrismaClientInitializationError = PrismaClientInitializationError
Prisma.PrismaClientValidationError = PrismaClientValidationError
Prisma.NotFoundError = NotFoundError
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = sqltag
Prisma.empty = empty
Prisma.join = join
Prisma.raw = raw
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = Extensions.getExtensionContext
Prisma.defineExtension = Extensions.defineExtension

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}



/**
 * Enums
 */
exports.Prisma.PhraseScalarFieldEnum = {
  id: 'id',
  phrase: 'phrase',
  translation: 'translation',
  targetLang: 'targetLang',
  streak: 'streak',
  practisedAt: 'practisedAt'
};

exports.Prisma.UserScalarFieldEnum = {
  id: 'id',
  email: 'email',
  firstName: 'firstName',
  lastName: 'lastName',
  userName: 'userName',
  receivePromo: 'receivePromo',
  passwordHash: 'passwordHash',
  tokenVersion: 'tokenVersion',
  birthday: 'birthday',
  phoneNumber: 'phoneNumber',
  address: 'address',
  nationality: 'nationality',
  membershipExpiration: 'membershipExpiration',
  membershipType: 'membershipType',
  avatar: 'avatar',
  accessToken: 'accessToken'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};
exports.Role = exports.$Enums.Role = {
  MEMBER: 'MEMBER',
  PREMIUM: 'PREMIUM',
  ADMIN: 'ADMIN'
};

exports.Prisma.ModelName = {
  Phrase: 'Phrase',
  User: 'User'
};
/**
 * Create the Client
 */
const config = {
  "generator": {
    "name": "client",
    "provider": {
      "fromEnvVar": null,
      "value": "prisma-client-js"
    },
    "output": {
      "value": "C:\\projekty\\langyboost\\server\\src\\generated\\prisma",
      "fromEnvVar": null
    },
    "config": {
      "engineType": "library"
    },
    "binaryTargets": [
      {
        "fromEnvVar": null,
        "value": "windows",
        "native": true
      }
    ],
    "previewFeatures": [],
    "isCustomOutput": true
  },
  "relativeEnvPaths": {
    "rootEnvPath": "../../../.env",
    "schemaEnvPath": "../../../.env"
  },
  "relativePath": "../../prisma",
  "clientVersion": "5.4.2",
  "engineVersion": "ac9d7041ed77bcc8a8dbd2ab6616b39013829574",
  "datasourceNames": [
    "db"
  ],
  "activeProvider": "mongodb",
  "inlineDatasources": {
    "db": {
      "url": {
        "fromEnvVar": "DATABASE_URL",
        "value": null
      }
    }
  },
  "inlineSchema": "Z2VuZXJhdG9yIGNsaWVudCB7DQogICAgcHJvdmlkZXIgPSAicHJpc21hLWNsaWVudC1qcyINCiAgICBvdXRwdXQgICA9ICIuLi9nZW5lcmF0ZWQvcHJpc21hIg0KfQ0KDQpnZW5lcmF0b3IgdHlwZWdyYXBocWwgew0KICBwcm92aWRlciA9ICJ0eXBlZ3JhcGhxbC1wcmlzbWEiDQogIG91dHB1dCAgID0gIi4uL2dlbmVyYXRlZC90eXBlZ3JhcGhxbCINCn0NCg0KLy8gZ2VuZXJhdG9yIHBvdGhvcyB7DQovLyAgICAgcHJvdmlkZXIgPSAicHJpc21hLXBvdGhvcy10eXBlcyINCi8vICAgICBvdXRwdXQgICA9ICIuLi9nZW5lcmF0ZWQvcG90aG9zLnRzIg0KLy8gfQ0KDQpkYXRhc291cmNlIGRiIHsNCiAgICBwcm92aWRlciA9ICJtb25nb2RiIg0KICAgIHVybCAgICAgID0gZW52KCJEQVRBQkFTRV9VUkwiKQ0KfQ0KDQplbnVtIFJvbGUgew0KICAgIE1FTUJFUg0KICAgIFBSRU1JVU0NCiAgICBBRE1JTg0KfQ0KDQptb2RlbCBQaHJhc2Ugew0KICAgIGlkICAgICAgICAgIFN0cmluZyAgIEBpZCBAZGVmYXVsdChhdXRvKCkpIEBtYXAoIl9pZCIpIEBkYi5PYmplY3RJZA0KICAgIHBocmFzZSAgICAgIFN0cmluZw0KICAgIHRyYW5zbGF0aW9uIFN0cmluZw0KICAgIHRhcmdldExhbmcgIFN0cmluZw0KICAgIHN0cmVhayAgICAgIEludCAgICAgIEBkZWZhdWx0KDApDQogICAgcHJhY3Rpc2VkQXQgRGF0ZVRpbWUgQGRlZmF1bHQobm93KCkpDQp9DQoNCm1vZGVsIFVzZXIgew0KICAgIGlkICAgICAgICAgICAgICAgICAgIFN0cmluZyAgQGlkIEBkZWZhdWx0KGF1dG8oKSkgQG1hcCgiX2lkIikgQGRiLk9iamVjdElkDQogICAgZW1haWwgICAgICAgICAgICAgICAgU3RyaW5nDQogICAgZmlyc3ROYW1lICAgICAgICAgICAgU3RyaW5nICBAZGVmYXVsdCgiIikNCiAgICBsYXN0TmFtZSAgICAgICAgICAgICBTdHJpbmcgIEBkZWZhdWx0KCIiKQ0KICAgIHVzZXJOYW1lICAgICAgICAgICAgIFN0cmluZw0KICAgIHJlY2VpdmVQcm9tbyAgICAgICAgIEJvb2xlYW4gQGRlZmF1bHQoZmFsc2UpDQogICAgcGFzc3dvcmRIYXNoICAgICAgICAgU3RyaW5nDQogICAgdG9rZW5WZXJzaW9uICAgICAgICAgSW50ICAgICBAZGVmYXVsdCgwKQ0KICAgIGJpcnRoZGF5ICAgICAgICAgICAgIFN0cmluZyAgQGRlZmF1bHQoIiIpDQogICAgcGhvbmVOdW1iZXIgICAgICAgICAgU3RyaW5nICBAZGVmYXVsdCgiIikNCiAgICBhZGRyZXNzICAgICAgICAgICAgICBTdHJpbmcgIEBkZWZhdWx0KCIiKQ0KICAgIG5hdGlvbmFsaXR5ICAgICAgICAgIFN0cmluZyAgQGRlZmF1bHQoIiIpDQogICAgbWVtYmVyc2hpcEV4cGlyYXRpb24gU3RyaW5nICBAZGVmYXVsdCgiIikNCiAgICBtZW1iZXJzaGlwVHlwZSAgICAgICBSb2xlICAgIEBkZWZhdWx0KE1FTUJFUikNCiAgICBhdmF0YXIgICAgICAgICAgICAgICBTdHJpbmcgIEBkZWZhdWx0KCIiKQ0KICAgIGFjY2Vzc1Rva2VuICAgICAgICAgIFN0cmluZyAgQGRlZmF1bHQoIiIpIC8vIG5vdCB1c2VkIGluIHRoZSBEQiBidXQgY291bGQgbm90IGRvIGl0IGFueSBvdGhlciB3YXkgZHVlIHRvIGxpbWl0YXRpb25zIG9uIHBsdWdpbg0KfQ0K",
  "inlineSchemaHash": "2b3765ee76d2ea34521d6520d7cb2ba0efe3388a747d99fb1b321f96befef9ee"
}
config.dirname = '/'

config.runtimeDataModel = JSON.parse("{\"models\":{\"Phrase\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"dbName\":\"_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"auto\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"phrase\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"translation\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"targetLang\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"streak\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"practisedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"User\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"dbName\":\"_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"auto\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"email\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"firstName\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"lastName\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userName\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"receivePromo\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"passwordHash\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tokenVersion\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"birthday\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"phoneNumber\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"address\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nationality\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"membershipExpiration\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"membershipType\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Role\",\"default\":\"MEMBER\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"avatar\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"accessToken\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false}},\"enums\":{\"Role\":{\"values\":[{\"name\":\"MEMBER\",\"dbName\":null},{\"name\":\"PREMIUM\",\"dbName\":null},{\"name\":\"ADMIN\",\"dbName\":null}],\"dbName\":null}},\"types\":{}}")
defineDmmfProperty(exports.Prisma, config.runtimeDataModel)


config.injectableEdgeEnv = () => ({
  parsed: {
    DATABASE_URL: typeof globalThis !== 'undefined' && globalThis['DATABASE_URL'] || typeof process !== 'undefined' && process.env && process.env.DATABASE_URL || undefined
  }
})

if (typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined) {
  Debug.enable(typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined)
}

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)

