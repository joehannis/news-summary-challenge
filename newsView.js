class NewsView {
  constructor(model, client) {
    this.model = model;
    this.client = client;
    this.mainContainerEl = document.querySelector("#main-container");
    document.querySelector("#search-btn").addEventListener("click", () => {
      let newSearch = document.querySelector("#search-input").value;
      console.log(newSearch);
      this.displayNewsSearch(newSearch);
    });
  }

  displayNewsFromAPI() {
    this.client.loadNews(
      (data) => {
        console.log(data);
        this.model.setNews(data);
        this.displayNews();
      },
      () => {
        // This will be executed if there's an error
        this.displayError();
      }
    );
  }

  displayNewsFromSearch() {
    this.client.loadNewsSearch(
      (data) => {
        console.log(data);
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
    console.log(`This should be news ${news}`);
    const newsResults = news.response.results;
    newsResults.forEach((article) => {
      const newsTitleEl = document.createElement("h2");
      const newsTitleLink = document.createElement("a");
      newsTitleLink.textContent = article.webTitle;
      newsTitleLink.href = article.webUrl;
      newsTitleEl.className = "article";
      newsTitleLink.target = "_blank";
      newsTitleEl.appendChild(newsTitleLink);
      const newsImageEl = document.createElement("img");
      newsImageEl.className = "image";
      newsImageEl.src = article.fields.thumbnail;
      this.mainContainerEl.append(newsTitleEl);
      this.mainContainerEl.append(newsImageEl);
    });
  }
  displayError(error) {
    console.log("display error is running");
    const errorEl = document.createElement("div");
    errorEl.textContent = "Oops, something went wrong!";
    errorEl.className = "error";
    this.mainContainerEl.append(errorEl);
  }

  displayNewsSearch(input) {
    document.querySelectorAll(".article").forEach((element) => {
      element.remove();
    });
    console.log(document.querySelectorAll(".image"));
    document.querySelectorAll(".image").forEach((element) => {
      element.remove();
    });
    const news = this.model.getNews();
    const newsResults = news.response.results;
    newsResults.forEach((article) => {
      if (article.webTitle.toLowerCase().includes(input.toLowerCase())) {
        const linkToHome = document.createElement("h3");
        const linkToHomeLink = document.createElement("a");
        linkToHomeLink.href =
          "file:///Users/makers/news-summary-challenge/index.html";
        linkToHomeLink.textContent = "Back to homepage";
        const newsTitleEl = document.createElement("h2");
        const newsTitleLink = document.createElement("a");
        newsTitleLink.textContent = article.webTitle;
        newsTitleLink.href = article.webUrl;
        newsTitleEl.className = "article";
        newsTitleLink.target = "_blank";
        newsTitleEl.appendChild(newsTitleLink);
        const newsImageEl = document.createElement("img");
        newsImageEl.src = article.fields.thumbnail;
        this.mainContainerEl.append(newsTitleEl);
        linkToHome.append(linkToHomeLink);
        this.mainContainerEl.append(linkToHome);
        this.mainContainerEl.append(newsImageEl);
        console.log(article);
      }
    });
  }
}

module.exports = NewsView;
