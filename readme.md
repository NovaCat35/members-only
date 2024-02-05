# MEMBERS ONLY
Welcome, traveler! This is an exclusive clubhouse for travelers & members from all over to leave their mark on this corner of the universe. Sound interesting? Then start by joining our elusive clubhouse today! 

⚠️ This project is currently a WORK IN PROGRESS 😎

Planning on finishing this within the next 3 days (styling and final testings)

## Features 🎯
- Ability to add messages & replies 
- Authentication & security configuration
- Session continuity
- Users with different abilities and permissions : 
   - Admin: ability to delete posts & see all available users
   - Member: see hidden details, post author, and post date 
   - All users: ability to see profile status and post messages

## Technologies Used 🚀
- **Backend:** Node.js, Express.js, TypeScript
- **Stylesheet Language:** SCSS
- **View Engine:** EJS
- **Database:** MongoDB

## Hosting Platforms 🌐
- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas): for cloud-based MongoDB hosting

## Challenges 🔥
When trying to implement the sign-up and login functionality using bcrypt, I ran into a lot of errors with bcrypt missing variables issues. A lot of this was partially due to the changing around of my logic for modularity so the initial code had code faults in the logic since app.js contains the bulk of the passport initialization. I eventually fix this when I realize my logic of where I was calling authentication and improper use of callbacks was the issue, so I did a double take and redid some earlier code logic.

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


## Resources ℹ️
TypeScript setup: https://blog.logrocket.com/how-to-set-up-node-typescript-express/#create-express-server-with-ts-extension


## Sources 🖌️
Globe img: https://www.vecteezy.com/vector-art/13531093-world-map-connection-futuristic-modern-website-background-or-cover-page-vector-for-technology-and-finance-concept-and-education-future-company

Bebop Crew: https://all-worlds-alliance.fandom.com/wiki/Category:Bebop_Crew
Spike: https://www.pngaaa.com/detail/171396

Portal Icons: https://theportalwiki.com/wiki/Category:Chamber_info_icons

Stars background: https://codepen.io/sarazond/pen/LYGbwj

satellite: https://www.rawpixel.com/image/11721881/png-white-background-galaxy
