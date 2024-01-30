# MEMBERS ONLY
Welcome to this corner of the secret web! This site is an exclusive clubhouse where veiled within are anonymous musings, obscured data, and cryptic authors. Sound interesting? Then start by joining our elusive fellowship today! 🤫

Early planning goals: sign-up / login authentication, processing user posts and keep database session.


⚠️ This project is currently a WORK IN PROGRESS ⚠️

# Challenges 🔥
When trying to implement the sign-up and login functionality using bcrypt, I ran into a lot of errors with bcrypt missing variables and 500 server issues. A lot of this was partially due to the changing around of my logic for modularity so the initial code had code faults in the logic since app.js contains the bulk of the passport initialization. I eventually fix this through trials and errors by taking a step back and reanalyzing my code logic.

## Installation Guide ⚙️
### Development
> Type in terminal the following : 
``` 
express members-only --view=ejs
cd members-only
npm install 
npm install dotenv --save
npm install passport
npm install passport-local
npm install express-session
npm install mongoose
npm install express-async-handler
npm install express-validator
npm install node-sass-middleware <not sure if I need this anymore>
npm install express sass
npm install bcryptjs
npm install luxon (use TYPESCRIPT: npm install --save @types/luxon)
```

> Reminder to check app.js for all added changes 

### Installing TypeScript & Nodemon:
> Type in terminal the following : 
```
npm i -D typescript @types/express @types/node
npx tsc --init
npm install --save-dev ts-node nodemon
```

> don't forget to uncomment "outDir", "allowJs", & change to "outDir": "./dist" in tsconfig.json

### Production
> Type in terminal the following : 
```
npm install compression
npm install helmet
npm install express-rate-limit
```
> Reminder to change env variables(within host provider) & set node version in our package.json & NODE_ENV = "production"


## Resources and Sources ℹ️
TypeScript setup: https://blog.logrocket.com/how-to-set-up-node-typescript-express/#create-express-server-with-ts-extension
