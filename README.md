# express-101

## Init Project

- install express-generrator

```
$ npm install express-generator -g
```

- generate project

```
$ express <Your Project Name>
```

- install dependencies

```
$ npm install
```

- say hello express

```
$ npm start
```

express will start at: http://localhost:3000

----
## Hello Backend

For this checkpoint, we will delete all unnecessary code or module which don't relate with backend. Let get started!!!

1. Delete unuse file

   - delete folder bin
   - delete folder public
   - delete folder view

2. create index.js

```javascript
import * as express from "./app";

const port = 3000;

async function start() {
  try {
    const app = await express.buildExpress();
    const server = app.listen(port, () => {
      console.log(`server started at http://localhost:${port}`);
    });
    server.setTimeout(10000);
  } catch (error) {
    console.log(error);
  }
}

start();
```

3. replace all code in app.js with this code

```javascript
import express from "express";
import bodyParser from "body-parser";
import { appRoutes } from "./routes/app.routes";

export const buildExpress = async () => {
  const app = express();
  try {
    app.use(bodyParser.json());
    app.use("/api", appRoutes);
  } catch (error) {
    console.log(error);
  }
  return app;
};
```

4. create app.routes.js under folder routes

```javascript
import express from "express";

export const appRoutes = express.Router();

appRoutes.get("/hello", (req, res) => {
  console.log("Hello backend");
  res.status(200).send("Hello backend");
});
```

5. At file package.json

5.1 Add type module on the top of key

```json
{
  "type": "module"
}
```
5.2 replace script start this project <br>
from

```json
{
  "scripts": {
    "start": "node ./bin/wwww"
  }
}
```

to

```json
{
  "scripts": {
    "start": "nodemon --experimental-modules --es-module-specifier-resolution=node index.js"
  }
}
```


```diff
Note 
step 5.1: why we need to add type: module 
+=> Because if we the start project, we will get some error like this.
- SyntaxError: Cannot use import statement outside a module

step 5.2: why we need to change script start this project
+=> First, we want to make this project start at index.js file. And we don't need to restart the project all the time when we change a piece of code, so we must start this project with nodemon. Nodemon will restart the project automatically when we edit some code or save code.
```

----
## Group Route
For this checkpoint, we will create two group routes. From checkpoint 2, we have an app route that has GET /hello on that. But we don't want to write a handle on a route like that and it should separate route by service.

1. Create user.routes.js under routes folder
```javascript
import express from "express";

export const userRoutes = express.Router();

userRoutes.get("/", (req, res) => {
  res.status(200).send({ firstName: "Aphirat", lastName: "Nimanussonkul" });
});
```

2. Create room.routes.js under routes folder
```javascript
import express from "express";

export const roomRoutes = express.Router();

roomRoutes.get("", (req, res) => {
  res.status(200).send({ roomId: "1", roomNumber: "109" });
});
```

3. change code at app.routes.js file
```javascript
import express from "express";
import { userRoutes } from "./user.routes";
import { roomRoutes } from "./room.routes";

export const appRoutes = express.Router();

appRoutes.use("/user", userRoutes);
appRoutes.use("/room", roomRoutes);
```
4. start project and go to:

    4.1 http://localhost:3000/api/user <br>
    4.2 http://localhost:3000/api/room
    