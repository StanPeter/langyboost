# Created by StanPeter - https://github.com/StanPeter/langyboost

# BE / server PART

# 1 Technical info
# 2 How to launch the app
# 3 Structure of the app
# 4 Used packages/dependencies
# 5 Known bugs & things to improve 


# 1 === Technical info ===

# In short how BE app works
1) All important is inside src/ folder, outside is only specific package settings
2) index.ts prepares the server with help of Appolo provider
3) a query/mutation request is received from the client and answers through found resolver
4) resolver then acts with/without middleware and executes the logic inside, communicates with the entity which then searches inside DB table


# Available scripts
'npm start'     runs the app, 
'npm run build' build is used for creating a production bundle
'npm run dev'   run on development (not used yet)
'npm run prod'  combination of 'npm run build' and 'start'


# 2 === How to launch the app ===
a) get to install NPM (https://www.npmjs.com/get-npm) or use Yarn if you wish
b) execute command "npm install" -> will create folder of dependencies "node_modules" 
c) setup database settings inside `ormconfig.json` file
d) start server using command "npm start"


# 3 === Structure of the app ===
node_modules            automatically generated folder for dependencies 
temporary               contains temporary DB file which will later be converted into postgresDB
src
    entity              contains definitions for Tables of DB
    middleware          contains middlewares such as authentication etc.
    migration           contains all migrations
    resolvers           contains resolvers for queries (or controllers if you come from MVC background)
    ts                  typescript interfaces, enums and types
    utils               contains reusable global functions, validation, ...

- other files in root like .ormconfig, tsconfig.json etc. are config files, you need to change ormcongif.json to connect to your own DB!, others can be ignored more or less


# 4 === Used packages/dependencies ===
bcryptjs                to hash password to enhance security
typeorm                 data mapper ORM for typescript
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
WILL ADD LATER