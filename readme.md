# Bebop Paradise
Welcome, intergalactic travelers! This is an exclusive clubhouse for people from all over the known universe to leave their mark on this corner of the universe. As a member of this MEMBERS ONLY app, you can see additional details regular travelers can't see. Sound interesting? Then start by joining our elusive clubhouse today! 

Live link: https://bebop-paradise.fly.dev/ 🛰️

<img width="977" alt="Screenshot 2024-02-06 at 1 50 47 PM" src="https://github.com/NovaCat35/members-only/assets/54908064/7882ac7d-ee1f-4c7e-926d-68f5683abc80">

## Features 🎯
- Ability to add messages 
- Authentication & security configuration
- Session continuity
- Users with different abilities and permissions : 
   - Admin: ability to delete posts & see all available user status
   - Member: see hidden details
   - All users: ability to see profile status and post messages

- Future updates?
 - Replies
 - PFP

## Technologies Used 🚀
- **Backend:** Node.js, Express.js, TypeScript
- **Stylesheet Language:** SCSS
- **View Engine:** EJS
- **Database:** MongoDB

## Hosting Platforms 🌐
- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas): for cloud-based MongoDB hosting
- [fly.io](https://fly.io): for deploying and hosting the application

## Challenges 🔥
When implementing the sign-up and login functionality with bcrypt, I encountered numerous errors related to missing variables from bcrypt. Many of these issues stemmed from reorganizing my code for better modularity. Initially, I placed much of the passport initialization logic in the app.js file, leading to logical errors in the code. I resolved these issues by reassessing my authentication logic and addressing improper use of callbacks. This required revisiting and refining earlier sections of the codebase.

When I was satisfied with all my code, I didn't realize how convoluted and tangled up my structure for js and ts files were. When the production env started screaming at me about reading ts files and wrong paths, I finally realized my ts file all needs to be transpiled. Definitely learn that the hard way after hours monitoring error messages ~ ehe.

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

> 1) Adjust tsconfig.json: uncomment "outDir", "allowJs", and change "outDir": "./dist" 

> 2) Run tsc (npx tsc/npm run build) to transpile your TypeScript files to JavaScript. From step 1, we will output this in "./dist"

### Production
> Type in terminal the following : 
```
npm install compression
npm install helmet
npm install express-rate-limit
```
> Reminder to change env variables(within host provider) & set node version in our package.json & NODE_ENV = "production"

> NOTE: You must build or transpile the TypeScript files for production environment. Run `npm run build`. Note any path you have to /src may need to be changed to /dist for production.


## Resources ℹ️
TypeScript setup: https://blog.logrocket.com/how-to-set-up-node-typescript-express/#create-express-server-with-ts-extension

Creating stars background: https://codepen.io/sarazond/pen/LYGbwj

## Sources 🖌️
Bebop Crew: https://all-worlds-alliance.fandom.com/wiki/Category:Bebop_Crew

Spike Img: https://www.pngaaa.com/detail/171396

Portal Icons: https://theportalwiki.com/wiki/Category:Chamber_info_icons

Radio sound: https://www.youtube.com/watch?v=bj2FvGcXRKs

Honorable mentions: to all image src that I forgot to note down, truly sorry. Google images just took me places.

