# Created by StanPeter - https://github.com/StanPeter/langyboost

# FE / client PART

# 1 Technical info
# 2 How to launch the app
# 3 Structure of the app
# 4 Used packages/dependencies
# 5 Known bugs & things to improve 


# 1 === Technical info ===

# In short how FE app works
1) All important is inside src/ folder, outside are only configs
2) Within our index.html file is loaded javascript file with help of React framework.
3) There graphQl api communication, with help of appolo package, is handled.
4) Then it goes to index.tsx file which only imports global styles and references on Store. (store will use hooks instead of Redux, but that's not implemented yet)
5) Then our Routes.tsx builds possible url paths and in future will handle error handling and auth/adming rights
6) From there it takes us to a specific page file which is always build from layouts components and UI, other components

# Additional info
images can be found inside on src/images but particles could be loaded only from within public/particles -> having two folders for images

# Available scripts
'yarn run dev'             runs the client server
'yarn run build'           creates an optimized build package for production purposes
'yarn run preview'         previews, in the browser, the build package
'yarn run lintCheck'       checks for mistakes using eslint
'yarn run lintFix'         fixes found mistakes using eslint
'yarn run prettierCheck'   checks for mistakes using prettier
'yarn run prettierFix'     fixes found mistakes using prettier
'yarn run tsCheck'         checks for mistakes using typescript
'yarn run updatesCheck'    checks for available updates for the used libraries
'yarn run unusedCheck'     checks for unused libraries throughout the project
'yarn run genScssTypes'    generates scss types for typescript
'yarn run genGraphqlTypes' generates types and hooks from grahpql 

# to generate types for graphql 
-> graphql-codegen --config codegen.yml 
-> searches in http://localhost:4000/graphql so BE needs to be running on that address


# 2 === How to launch the app ===
a) get to install NPM (https://www.npmjs.com/get-npm) or use Yarn if you wish
b) execute command "yarn install" -> will create folder of dependencies "node_modules" 
c) launch the project using command "yarn run dev" -> will translate files from "src" and automatically open your main browser on localhost URL  http://localhost:3000
d) if you wish to make a production build, run "yarn run build" which will get the app ready inside of "build" folder


# 3 === Structure of the app ===
node_modules            automatically generated folder for dependencies 
public                  contains favicon, robots.txt, index.html and particle images
src
    assets              contains all the assets like images
    components
        hoc
        layouts         contains layout components like Navbar, Footer, MainBody
        others          contains smaller elements, might be further divided
        UI              contains UI components like buttons, inputs, forms, tables, catd, carousel, tooltip etc.   
    generated           contains automatically generated graphql types, do not touch this manually
    constants           constants used thoughout the project
    graphql             contains queries for API communication with the server
    hooks               contains all the custom hooks
    pages               all app pages components
    services            contains functions directly communicating with the server (usually services the app provides)
    settings            contains all the project settings like MOCK data, project configs, language configs, routeData etc.
    store               redux toolkit store
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


# 4 === Used packages/dependencies ===
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


# 5 === Known bugs & things to improve ===
- add Next.js
- add testing
- connect all current architecture
- connect redux-toolkit
- implement articles page
- clean up entire project

Finish error handling HOC
authorization HOC page route
page AdminHome solve
npm install causes 1 warning
implement multi languages feature
implement light and dark mode
do something wth the AdminHome page
implement UI elements for membership dialog
responsiveness on most screens
responsiveness of Carousel
optimize and clean up MembershipDialog
articles & resources page
courses detail page
unsupported browsers check
