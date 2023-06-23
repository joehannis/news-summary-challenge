class NewsView {
  constructor(model, client) {
    this.model = model;
    this.client = client;
    this.mainContainerEl = document.querySelector("#main-container");
  }

  displayNewsFromAPI() {
    this.client.loadNews(
      (data) => {
        this.model.setNews(data);
        this.displayNews();
      },
      () => {
        // This will be executed if there's an error
        this.displayError();
      }
    );
  }

  displayNews() {
    document.querySelectorAll(".article").forEach((element) => {
      element.remove();
    });
    const news = this.model.getNews();
    news.forEach((article) => {
      const newsEl = document.createElement("div");
      newsEl.textContent = article;
      newsEl.className = "article";
      this.mainContainerEl.append(newsEl);
    });
  }
  displayError(error) {
    console.log("display error is running");
    const errorEl = document.createElement("div");
    errorEl.textContent = "Oops, something went wrong!";
    errorEl.className = "error";
    this.mainContainerEl.append(errorEl);
  }
}

module.exports = NewsView;
