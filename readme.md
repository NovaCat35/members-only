# Bebop Paradise
Welcome, intergalactic travelers, to Bebop Paradise! This is a silly ol-*ahem* exclusive clubhouse for people from all over the known universe to leave their mark on this corner of the universe. As a member of this app, you get access to additional details regular travelers can't see. Sound interesting? Then start by joining our illustrious clubhouse today! 

Live link: https://bebop-paradise.fly.dev/ 🛰️

<img width="1044" alt="Screenshot 2024-02-12 at 1 57 30 PM" src="https://github.com/NovaCat35/members-only/assets/54908064/6ee5047e-cb51-4355-8326-177e4875ae96">

## Features 🎯
- Ability to add messages 
- Authentication & security configuration
- Session continuity
- Users with different abilities and permissions : 
   - Admin: ability to delete posts & see all available user status (admin access page)
   - Member: see hidden details
   - All users: ability to see profile status and post messages
- Pagination Nav (scalability for large amounts of messages)

Future updates?
- Light/dark mode
- Custom pfp
- Edit messages

## Technologies Used 🚀
- **Backend:** Node.js, Express.js, TypeScript
- **Stylesheet Language:** SCSS
- **View Engine:** EJS
- **Database:** MongoDB

## Hosting Platforms 🌐
- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas): for cloud-based MongoDB hosting
- [fly.io](https://fly.io): for deploying and hosting the application

## Challenges 🔥
When implementing the sign-up and login functionality with bcrypt, I encountered numerous errors related to missing variables from bcrypt. Many of these issues stemmed from reorganizing my code for better modularity. Initially, I placed much of the passport initialization logic in the app.js file, leading to logical errors in the code. I resolved these issues by reassessing my authentication logic and addressing the improper use of callbacks. This required revisiting and refining earlier sections of the codebase.

One of the other major questions I aim to tackle is scalability. Mainly when the website grows with the amount of users and messages, I asked myself what's the best way to showcase everything to the user without losing momentum. For this project, I replicate this by using pagination navigation. In theory, this would take load time away from the extreme of messages needed to be generated. This will be something I will continue to monitor and keep in mind as I develop.

Finally, when I was satisfied with all my code, I didn't realize how convoluted and tangled up my structure for js and ts files was. When the production env started screaming at me about reading ts files and wrong paths, I finally realized my ts files needed to be transpired. I learn that the hard way after hours of monitoring error messages ~ ehe.

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
npm install node-sass-middleware <might not need this anymore bc of script in package.json>
npm install express sass
npm install bcryptjs
npm install luxon (IF TYPESCRIPT: npm install --save @types/luxon)
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

> 2) Run tsc (npx tsc/npm run build) to transpile your TypeScript files to JavaScript. From step 1, we will output this in "./dist". It may be better to just directly link this to script everytime we run devstart

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
ODIN PROJECT (this is an amazing resource): https://www.theodinproject.com/lessons/nodejs-members-only#project-solution

TypeScript setup: https://blog.logrocket.com/how-to-set-up-node-typescript-express/#create-express-server-with-ts-extension

Creating stars background: https://codepen.io/sarazond/pen/LYGbwj

Pagination: https://evdokimovm.github.io/javascript/nodejs/mongodb/pagination/expressjs/ejs/bootstrap/2017/08/20/create-pagination-with-nodejs-mongodb-express-and-ejs-step-by-step-from-scratch.html

## Sources 🖌️
Bebop Crew: https://all-worlds-alliance.fandom.com/wiki/Category:Bebop_Crew

Spike Img: https://www.pngaaa.com/detail/171396

Portal Icons: https://theportalwiki.com/wiki/Category:Chamber_info_icons

Radio sound: https://www.youtube.com/watch?v=bj2FvGcXRKs

Honorable mentions: to all image src that I forgot to note down, truly sorry. Google images just took me places.

Password is `bebop` 🤫
