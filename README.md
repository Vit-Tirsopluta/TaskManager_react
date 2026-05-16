## ⚠️ Note: this server works ONLY ON YOUR LOCALHOST

The task manager was built on Node.js (express), PostgreSQL (Prisma) and React stack.

## How to run it?
**Enter the following commands in your console**

Clone the repository on your computer

`git clone https://github.com/Vit-Tirsopluta/TaskManager_react`;

Go to working directory

`cd MyOwnApp`;

Back-end setting-up ⚙️
1. Install dependencies for the server

`npm install`;
2. Create .env-file in your working directory and enter path to your local database (replace USER, PASSWORD and DATABASE_NAME with your real values)

`DATABASE_URL="postgresql://USER:PASSWORD@localhost:5432/DATABASE_NAME?schema=public"`;
3. Generate Prisma client and migrations for creating tables

`npx prisma generate
 npx prisma migrate dev --name init`;
4.Run back-end server

`npm run dev` or `node server.js`;


Front-end setting-up 🚀
1. Go to the working directory

`cd front-end`;
2. Install dependencies

`npm install`;
3. In new terminal!!! Run command

`npm start`;

If you have any trouble, make sure you've successfully installed the required packages and dependencies, connected your DB, and you ran commnds in correct directories.
Also feel free to post your issues to the 'issues' section on GitHub.
