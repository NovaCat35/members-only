# MEMBERS ONLY
Planning goals: sign-up / login authentication, processing user posts, 

~ Project is currently in early WORK IN PROGRESS ⚠️


## Installation Guide ⚙️
### Development
> Type in terminal the following : 
``` 
express members-only --view=ejs
cd members-only
npm install 
npm install dotenv --save
npm install mongoose
npm install express-async-handler
npm install express-validator
npm install node-sass-middleware --save
npm install express sass
npm install luxon 
```

> Reminder to check app.js for all added changes 

### Installing Typescript & Nodemon:
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


## Resources and Sources
Typescript setup: https://blog.logrocket.com/how-to-set-up-node-typescript-express/#create-express-server-with-ts-extension