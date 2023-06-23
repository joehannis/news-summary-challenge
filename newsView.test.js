/**
 * @jest-environment jsdom
 */

const fs = require("fs");
const NewsView = require("./newsView");
const NewsModel = require("./newsModel");
const NewsClient = require("./newsClient");

jest.mock("./newsClient");

describe("newsView", () => {
  beforeEach(() => {
    // Before each test, reset the mock
    // This helps starting each test case
    // with a "fresh" mocked class
    NewsClient.mockClear();
  });

  it("adds a note from API and displays it", () => {
    document.body.innerHTML = fs.readFileSync("./index.html");
    const mockClient = new NewsClient();
    mockClient.loadNews.mockImplementation((callback) => {
      const data = {
        response: {
          results: [
            {
              id: "politics/live/2023/jun/23/brexit-anniversary-poll-eu-rishi-sunak-jeremy-hunt-inflation-mortgages-uk-politics-live",
              type: "liveblog",
              sectionId: "politics",
              sectionName: "Politics",
              webPublicationDate: "2023-06-23T14:11:29Z",
              webTitle:
                "Dissatisfaction with Rishi Sunak’s government at near record levels, poll suggests – UK politics live",
              webUrl:
                "https://www.theguardian.com/politics/live/2023/jun/23/brexit-anniversary-poll-eu-rishi-sunak-jeremy-hunt-inflation-mortgages-uk-politics-live",
              apiUrl:
                "https://content.guardianapis.com/politics/live/2023/jun/23/brexit-anniversary-poll-eu-rishi-sunak-jeremy-hunt-inflation-mortgages-uk-politics-live",
              fields: {
                thumbnail:
                  "https://media.guim.co.uk/846f8413e58683385c8a31caa85d195275bdb19e/0_0_2224_1334/500.jpg",
              },
              isHosted: false,
              pillarId: "pillar/news",
              pillarName: "News",
            },
          ],
        },
      };
      callback(data);
    });
    const model = new NewsModel();
    const view = new NewsView(model, mockClient);
    view.displayNewsFromAPI();
    console.log("we are here");
    const document = dom.window.document;
    console.log(document.documentElement.outerHTML);
    console.log(document.querySelectorAll("div.article".textContent));
    expect(document.querySelectorAll("div.article")[0].id).toEqual(
      "This is my callback"
    );
  });
});
