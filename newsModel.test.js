const NewsModel = require("./newsModel");

describe("newsModel", () => {
  it("returns news", () => {
    const model = new NewsModel();
    expect(model.getNews()).toEqual([]);
  });
});
