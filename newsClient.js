class NewsClient {
  constructor() {}

  loadNews(callback, errorcallback) {
    fetch(
      "https://content.guardianapis.com/search?api-key=0fe85143-8785-411d-a43a-0fd346117444&show-fields=thumbnail"
    )
      .then((response) => response.json())
      .then((data) => {
        callback(data);
      })
      .catch((error) => errorcallback(error));
  }

  // loadNewsSearch(search, callback, errorcallback) {
  //   const encodedSearch = encodeURIComponent(search);
  //   const url = `https://content.guardianapis.com/search?q=${encodedSearch}&api-key=0fe85143-8785-411d-a43a-0fd346117444&show-fields=thumbnail`;

  //   fetch(url)
  //     .then((response) => response.json())
  //     .then((data) => {
  //       callback(data);
  //     })
  //     .catch((error) => errorcallback(error));
  // }
}
module.exports = NewsClient;
