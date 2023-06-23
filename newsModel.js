class Model {
  constructor() {
    this.news = [];
  }

  getNews() {
    return this.news;
  }

  setNews(data) {
    this.news = data;
  }
}
module.exports = Model;
