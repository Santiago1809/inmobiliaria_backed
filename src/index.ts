import { app } from "./server";

const port = 8080;

app.listen(port, () => {
  console.log(`Server listening on port ${port}!`);
});
