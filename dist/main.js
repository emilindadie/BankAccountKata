"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
const port = process.env.SERVER_PORT || 3000;
app_1.default.listen(port, () => console.log(`app started at http://localhost:${port}!`));
//# sourceMappingURL=main.js.map