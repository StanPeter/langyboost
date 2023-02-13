# Created by StanPeter - https://github.com/StanPeter/langyboost

# FE / client PART

# 1 Technical info
# 2 How to launch the app
# 3 Structure of the app
# 4 Used packages/dependencies
# 5 Known bugs & things to improve 


# 1 === Technical info ===

# In short how FE app works
1) All important is inside src/ folder, outside is only specific package settings
2) Within our index.html file is loaded javascript file with help of React framework.
3) There graphQl api communication, with help of appolo package, is handled.
4) Then it goes to App.tsx file which only imports global styles and references on Store. (store will use hooks instead of Redux, but that's not implemented yet)
5) Then our Routes.tsx builds possible url paths and in future will handle error handling and auth/adming rights
6) From there it takes us to a specific page file which is always build from layouts components and UI, other components

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


# 2 === How to launch the app ===
a) get to install NPM (https://www.npmjs.com/get-npm) or use Yarn if you wish
b) execute command "npm install" -> will create folder of dependencies "node_modules" 
c) launch the project using command "npm start" -> will translate files from "src" and automatically open your main browser on localhost URL  http://localhost:3000
d) if you wish to make a production build, run "npm run build" which will get the app ready inside of "build" folder


# 3 === Structure of the app ===
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
a) add form library
b) add Next.js
c) add testing
d) connect all current architecture
e) start mocking
f) connect redux

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

# from interview
accessebility -> for color blind and blind people -> write html tags as good as possible, source tag in img, btn right, inputs correctly
responsiveness -> across browsers and screens
patterns for graphical stuff -> such as margins, font sizes, color pallete etc
testing -> learn about jest and other testing tools, write a lots of those
graphql VS rest
caching how to approach
advance animations
deployment via DevOps tools -> learn jenkins, docker, kubernettess, different services like AWS
working with iFrames and maps
naming convention
trying out styled components, less etc.

LEARN all of these and you will get senior knowledge
Senior frontend developers should be very comfortable articulating HTML, JS, and CSS. Additionally, they should have basic concepts about how the internet works including browsers, networks, and servers. This means that concepts like prototypes, event bubbling, call stack, promises, ES6 are no foreign to you.

checking out different HTML tags and CSS functions

# from internet
    The Document Object Model (DOM) and CSS Object Model (CSSOM)
    The JavaScript Event Loop, Promises, Asyc/Await
    CSS position Property
    CSS Flexbox Layout
    HTML Roles
    Common Accessibility Issues to Always Check For
    Unit & Integration Testing (Jest, Mocha, Chai, Cypress, Axe-Core)
    Form action and target Attributes
    JavaScript Design Patterns
    Closures and Thunks
    CSS Variables and Preprocessors
    JavaScript as a Statically Typed Language (TypeScript)
    Mutable and Immutable Types in JavaScript
    JavaScript Passed by Reference / Passed by Value
    JSON Data, JSON-LD, JSON Schemas & UI Schemas
    HTML Meta Tags (Especially Viewport)
    Different Ways Pages Zoom and How To Optimize For That
    Front-End Frameworks (React, Vue, Angular)
    HTML Templating (Handlebars, EJS)
    Webpack / Babel
    Git, Version Control and Rebasing
    Jenkins, Docker, Continuous Integration
    Caching
    CSS Methodologies (i.e. BEM)
    JavaScript Array Methods: .sort(), .filter(), .map(), .reduce()
    JavaScript Object Methods: .keys(), .entries(), .values()
    Front-End Performance Optimization & Speed
    CSS Specificity and Inheritance
    State Management (i.e. Redux)
    Semantic HTML
    Communicating with RESTful APIs


    Key Front End Developers Skills
    HTML/CSS
    JavaScript
    jQuery
    JavaScript Frameworks
    Front End Frameworks
    CSS Preprocessors
    RESTful Services/APIs
    Responsive/Mobile Design
    Cross-Browser Development
    Content Management Systems
    Testing/Debugging
    Git/Version Control
    Problem Solving

    babel, webpack, communication

        knowing the useful HTML5 elements thoroughly, as well as semantic markup (use tags that describe what this element is) and especially form fields.
    Use WebAim to learn about accessibility. The UK .gov site is actually very good and even has some tips!
    CSS rules are easy to learn, but hard to implement in a scalable way as a site grows. Rather than a framework, learn about abstracting colours (especially) and regularly-used styles into CCS custom properties (essentially constant-type variables). Learn flexbox rather than leaping into grid! Use class names that describe what they're for, rather than what they look like e.g. `.formborder` instead of `.blueborder` - the colour may change, and can be applied with a custom property. Don't use IDs as selectors - keep them for JavaScript.
    Learn JavaScript well, use constants (`const`) for immutable things like arrays and objects (the values they hold can change but they can't mutate into, say, a variable. Use `let` for other variable values. Use objects to store and retrieve collections of simple non-sensitive data (e.g. a 'person', or user prefs), and in localStorage. Learn how to read and write JSON - it's the data backbone of JavaScript and storage and is used by many other languages and online API data sources. Avoid frameworks until you can write some interactive functionality yourself.
    Use online optimisation for all media.
    Finally: develop mobile-first, increase the width and add `@media` breakpoints when the appearance 'breaks' at wider screen widths, but try to keep things flexible and breakpoints to three maximum.


# from second one 
core of JS how it works
encapsulation and other concepts of OOP
testing, test injection
many on many relations and other SQL topics
architecture patterns
patterns
data structure