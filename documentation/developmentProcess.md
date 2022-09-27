
# 1. What application? (goal)
	- a language learning app using modern tools and UI where I could practise german language


# 2. Functionality
	- authentication and authorization with all basic functionalities such as login, logout, forgotten password, change password and
	super(admin) user 
	- open ID -> logging through FB and google account
	- an option to change themes (dark & light mode at least)
	- an option to change languages (default 'EN')
	- modern animations
	- saving individual progress of each user
	- an option to change settings of the user
	- payment gate - 2 or more types of memberships
	- chatbox
	- many languages to learn using an algorithm which would count the required periods between practising of phrases
	- each course having different modules containing useful phrases
	- an option to create your own course and publish for other users
	- different communities (groups) to improve motivation to learn and efficiency
	- etc. 

	PS: functionalities will be programmed one by one + more will be added later on


# 3. Languages, Technologies

	FE: react, react-router, typescript, graphql, apollo-client, material-ui, jwt-decode, node-sass, 
	BE: node, express, typescript, graphql, apollo-server, postgres, typeorm, type-graphql, cors, 
	cookie-parser, dotenv, bccrypt, jsonwebtoken

	others: git, Travis|Jenkins(not sure yet)


# 4. Sketch your web app(wireframe)
	- skipped - started with Figma wiregraming instead


# 5. Ideas from other existing applications
	- some inspiration from https://www.duolingo.com/ and https://www.memrise.com/


# 6. Designing Your Web Application
	- saved into documentation/design


# 8. Architect and build your database
	- chosen Postgres SQL
	- each user will have data about himself + his progress
	- also data about courses and phrases is needed

	- 1 table Users
	- 1 table All existing phrases
	- 1 table progress

	- IN PROGRESS


# 9. Build FE and BE
	- set up both FE and BE
	- FE wireframe + structure of UI components / components / layout -> create the index page
	- BE api structure and DB structure(connect with 8. idea)
	- FE add routes, redux? -> reducers, actions, typescript
	- add graphQL / others
	- Do BE/FE validation
	- FE mockData + other pages
	- BE basic api
	...


# 10. Host your web application
	- Buy a domain - Namecheap
	- Buy/Setup an SSL certificate - Let’s Encrypt
	- Choose a cloud provider:
		Amazon
		MS Azure
		Google Cloud Platform
		Lower cost: Digital Ocean / Linode - if you are happy managing your own VMs

	Zeit Now, Heroku, Firebase are interesting alternatives that aim to be faster and easier to get things done
	- you should read about what they offer.

	Choosing one of these hosting options will almost certainly provide you with everything you need. They have ample documentation and community support, and are generally reliable options.


# 11. Deploy your web app
	- How does your application get from Source Control / Your computer to your cloud hosting provider?
	- The following development tools provide continuous integration and will help you with deploying your web app to your cloud hosting:
		GitLab
		Bitbucket
		Jenkins

