require("dotenv").config({ path: "./config/config.env" });
const app = require("./app");

const PORT = process.env.PORT || 4000;
let baseUrl = process.env.BASEURL;
app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});
