const newsModel = require("./newsModel");
const newsView = require("./newsView");
const newsClient = require("./newsClient");

// index.js
// ...
const client = new newsClient();
const model = new newsModel();
const view = new newsView(model, client);
view.displayNewsFromAPI();
