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
