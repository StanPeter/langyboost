# Created by StanPeter - https://github.com/StanPeter/langyboost

# 1 Theoretical info about the project
# 2 Technical info
# 3 How to launch the app
# 4 Structure of the app
# 5 Used packages/dependencies
# 6 Known bugs & things to improve 

# 1 === Theoretical info about the project ===
This project is called Langyboost and its purpose is to build a useful, yet simple, language learning application. As I'm a huge fan of German language it will be the first supported one. 

Application is currently under development stage and missing most of the desired features. In the end there will be multiple courses available, each having sections of phrases. (containing new words to learn) 

I have been studying 3 languages so far and I believe this is the most efficient way to improve. (besides living in the foreign country of the target language) In short there will be phrases available for practise and each showing in intervals of days/weeks depending how well the user remembered them.

I was inspired by many language learning applications but mostly by Memrise, where I disliked the long proccess of repetion of voice/writting inputs.


# 2 === Technical info ===

# In short how app works
1) All important is inside src/ folder, outside is only specific package settings
2) Within our index.html file is loaded javascript file with help of React framework.
3) There graphQl api communication, with help of appolo package, is handled.
4) Then it goes to App.tsx file which only imports global styles and references on Store. (store will use hooks instead of Redux, but that's not implemented yet)
5) Then our Routes.tsx builds possible url paths and in future will handle error handling and auth/adming rights
6) From there it takes us to a specific page file which is always build from layouts components and UI, other components

# Used tech FE
react, hooks, ant design (tried others but dislike them), particles, sass graphql, apollo, typescript, html5

# Used tech BE
node, express, typescript, graphql, apollo-server, postgres, typeorm, type-graphql, cors, cookie-parser, dotenv, bccrypt, jsonwebtoken

# Additional info
images can be found inside on src/images but particles could be loaded only from within public/particles -> having two folders for images

# Available scripts
'npm start' runs the app, 
'npm run build' build is used for creating a production bundle
'npm run test' test is for testing purposes but I haven't implemented that yet
'npm run genGraphql' is to create new graphQl queries from the BE site
'npm run genScssTypes' will create new *.d.ts type files for each scss file

# to automatically generate types from scss run - 
npx typed-scss-modules src --watch

# to generate types for graphql 
npm run gen 
-> graphql-codegen --config codegen.yml 
-> searches in http://localhost:4000/graphql so BE needs to be running on that address


# 3 === How to launch the app ===
a) get to install NPM (https://www.npmjs.com/get-npm) or use Yarn if you wish
b) execute command "npm install" -> will create folder of dependencies "node_modules" 
c) launch the project using command "npm start" -> will translate files from "src" and automatically open your main browser on localhost URL  http://localhost:3000
d) if you wish to make a production build, run "npm run build" which will get the app ready inside of "build" folder


# 4 === Structure of the app ===
node_modules            automatically generated folder for dependencies 
public                  contains favicon, robots.txt, index.html and particle images
src
    assets              contains all the assets like images
    components
        hoc
        layouts         contains layout components like Navbar, Footer, MainBody
        others          contains smaller elements, might be further divided
        pages           contains application pages
        UI              contains UI components like buttons, inputs, forms, tables, catd, carousel, tooltip etc.   
    generated           contains automatically generated graphql types, do not touch this manually
    graphql             contains queries for API communication with the server
    hooks               contains all the custom hooks
    services            contains functions directly communicating with the server (usually services the app provides)
    settings            contains all the project settings like MOCK data, project configs, language configs, routeData etc.
    styles              contains global styles and ant design styles
    ts                  contains types, enums and interfaces for the app
    utils               contains reusable global functions, validation functions...

- individual styles are nested within each component's folder
- other files in root like .prettierrc, tsconfig.json etc. are config files which should be changed only rarely
- components are separated into this structure (there you also find local scss file)

    src/
        componentType/
            ComponentName/
                ComponentName.tsx
                ComponentName.module.scss
                ComponentName.module.scss.d.ts   auto generated types
                ComponentName.test.js            if a test exists


# 5 === Used packages/dependencies ===
react                   used JS framework for this project
apollo                  graphql library provider for client
graphql                 query language for API communication
# craco                   a configuration layer for create-react-app  
antd                    design package including icons, components etc.
env-cmd                 executing commands using an environment from an .env 
# jest                    for testing
# eslint                  intelligence to check errors in code
prettier                JS formater
typed-scss-modules      creates scss typescript types
typescript              language adding types into JS
axios                   HTTP request handling for browset&node.js
jwt-decode              decoder for jwt token (maybe replace by axios in future)
npm-check-updates       checks for the newest versions of dependencies
node-sass               allows you to natively compile .scss files to css
react-icons             library providing icons
tsparticles             particle effects library (for landing page)


# 6 === Known bugs & things to improve ===
npm install causes 1 warning


finish documentation README!!

authorization HOC page route
errorboundary HOC
not found PAGE

make the app even launch





        page AdminHome
        
        
        
        
Known bugs/improvements to make
	npm i in client - clear the warnings there
        