# Created by StanPeter - https://github.com/StanPeter/langyboost

# BE / server PART

# 1 Technical info
# 2 How to launch the app
# 3 Structure of the app
# 4 Used packages/dependencies
# 5 Known bugs & things to improve 


# 1 === Technical info ===

# In short how BE app works
1) All important is inside src/ folder, outside are only config files
2) index.ts prepares the server with help of Appolo provider
3) A query/mutation request is received from the client and answers through the found resolver
4) Resolver then acts with/without middleware and executes the logic inside, communicates with the entity which then searches inside DB table


# Available scripts
'yarn run dev'              runs the app, 
'yarn run genPrisma'        generates prisma and typegraphql types
'yarn run migratePrisma'    run migrations for prisma

# 2 === How to launch the app ===
a) get to install NPM (https://www.npmjs.com/get-npm) or use Yarn if you wish
b) execute command "yarn install" -> will create folder of dependencies "node_modules" 
c) setup database settings inside `schema.prisma` file
d) start server using command "yarn run dev"


# 3 === Structure of the app ===
node_modules            automatically generated folder for dependencies 
src
    constants           all the constants throughout the app, e.g. errors
    db                  instance of db and all the mock data
    deprecated          some old files from pothos library (replaced with typeGraphql)
    generated           generated types for prisma and type grahpql
    middleware          contains middlewares such as authentication etc.
    model               contains definitions for Tables of DB
    prisma              schema for prisma
    resolver            contains resolvers for queries (or controllers if you come from MVC background)
    migration           contains all migrations
    settings            project settings
    ts                  typescript interfaces, enums and types
    utils               contains reusable global functions, validation, ...

- other files in root like tsconfig.json etc. are config files, you need to change schema.prisma to connect to your own DB!, others can be ignored more or less


# 4 === Used packages/dependencies ===
bcryptjs                to hash password to enhance security
prisma                  data mapper ORM for typescript
type-graphql            types for graphql
graphql                 query language for API communication
jsonwebtoken            JSON Web Token implementation (symmetric and asymmetric)
dotenv                  loads .env variable
express                 framework for Node js
cors                    unable CORS with various options
cookie-parser           parse Cookie header and populate req.cookies with an object keyed by the cookie names
google-cloud-translate  google API to translate phrases
apollo-server-express   production-ready Node.js GraphQL server for Express
pg                      postgreSQL client - pure javascript & libpq with the same API
reflect-metadata        polyfill for Metadata Reflection API
typescript              adding types and checks for JS development
ts-node                 typescript for Node
nodemon                 restarting server automatically on code change


# 5 === Known bugs & things to improve ===
- Check out refresh token functionality
- Check out login and sign up functionality
- Logout feature
- Revoking feature
- Add more error constants
- Check out middlewares