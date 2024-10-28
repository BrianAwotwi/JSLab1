var xhr = new XMLHttpRequest();

var url = "./health_article.json";
var newsUrl = "./news_article.json";

xhr.open("GET", url, true);
xhr.open("GET", newsUrl, true);
xhr.responseType = "json";
xhr.onload = function () {
  var articles = xhr.response.articles;
  var HealthArticlesDiv = document.getElementById("health_articles");

  articles.forEach(function (article) {
    var HealthArticleDiv = document.createElement("div");
    HealthArticleDiv.classList.add("article");

    var title = document.createElement("h2");
    title.textContent = article.title;

    var description = document.createElement("p");
    description.textContent = article.description;

    var waysHeader = document.createElement("h3");
    waysHeader.textContent = "Ways to Achieve:";

    var waysList = document.createElement("ul");
    article.ways_to_achieve.forEach(function (way) {
      var listItem = document.createElement("li");
      listItem.textContent = way;
      waysList.appendChild(listItem);
    });

    var benefitsHeader = document.createElement("h3");
    benefitsHeader.textContent = "Benefits:";

    var benefitsList = document.createElement("ul");
    article.benefits.forEach(function (benefit) {
      var listItem = document.createElement("li");
      listItem.textContent = benefit;
      benefitsList.appendChild(listItem);
    });

    HealthArticleDiv.appendChild(title);
    HealthArticleDiv.appendChild(description);
    HealthArticleDiv.appendChild(waysHeader);
    HealthArticleDiv.appendChild(waysList);
    HealthArticleDiv.appendChild(benefitsHeader);
    HealthArticleDiv.appendChild(benefitsList);

    HealthArticlesDiv.appendChild(HealthArticleDiv);
  });
};

xhr.onload = function () {
  var articles = xhr.response.articles;
  var NewsArticlesDiv = document.getElementById("news_articles");

  articles.forEach(function (article) {
    var NewsArticleDiv = document.createElement("div");
    NewsArticleDiv.classList.add("article");

    var title = document.createElement("h2");
    title.textContent = article.title;

    var description = document.createElement("p");
    description.textContent = article.description;

    var storyHeader = document.createElement("h3");
    storyHeader.textContent = "Story:";

    var storyList = document.createElement("ul");
    article.story.forEach(function (tale) {
      var listItem = document.createElement("li");
      listItem.textContent = tale;
      storyList.appendChild(listItem);
    });

    // var benefitsHeader = document.createElement("h3");
    // benefitsHeader.textContent = "Benefits:";

    // var benefitsList = document.createElement("ul");
    // article.benefits.forEach(function (benefit) {
    //   var listItem = document.createElement("li");
    //   listItem.textContent = benefit;
    //   benefitsList.appendChild(listItem);
    // });

    NewsArticleDiv.appendChild(title);
    NewsArticleDiv.appendChild(description);
    NewsArticleDiv.appendChild(storyHeader);
    NewsArticleDiv.appendChild(storyList);
    // NewsArticleDiv.appendChild(benefitsHeader);
    // NewsArticleDiv.appendChild(benefitsList);

    NewsArticlesDiv.appendChild(NewsArticleDiv);
  });
};

xhr.send();
