# MEMBERS ONLY
Welcome to this corner of the secret web! This site is an exclusive clubhouse where veiled within are anonymous musings, obscured data, and cryptic authors. You too can unlock the mysteries within by joining our elusive fellowship today!

Early planning goals: sign-up / login authentication, processing user posts and keep database session.


⚠️ This project is currently a WORK IN PROGRESS ⚠️


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
npm install node-sass-middleware
npm install luxon 
npm install bcryptjs
```

> Reminder to check app.js for all added changes 

### Installing TypeScript & Nodemon:
> Type in terminal the following : 
```
npm i -D typescript @types/express @types/node
npx tsc --init
npm install --save-dev ts-node nodemon
```

> don't forget to uncomment "outDir" in tsconfig.json & change to "outDir": "./dist"

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
