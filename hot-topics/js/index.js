let articlesData = [];
let portFolioData = [];

fetch("content/articles.json")
  .then((response) => response.json())
  .then((data) => {
    articlesData = data;
    selectedTab = 1;
    changeContent(articlesData);
  })
  .catch((error) => {
    console.error("Failed to load JSON:", error);
  });

fetch("content/portfolio.json")
  .then((response) => response.json())
  .then((data) => {
    portFolioData = data;
  })
  .catch((error) => {
    console.error("Failed to load JSON:", error);
  });

const contentContainer = document.getElementById("content");
const homeButton = document.getElementById("homeButton");
const portfolioButton = document.getElementById("portfolioButton");
let selectedTab = 1;

homeButton.addEventListener("click", (e) => {
  selectedTab = 1;
  changeContent(articlesData);
});

portfolioButton.addEventListener("click", (e) => {
  selectedTab = 2;
  changeContent(portFolioData);
});

function changeContent(data) {
  contentContainer.innerHTML = "";
  const cardContainer = document.createElement("div");
  data.forEach((i) => {
    const title = document.createElement("h1");
    title.textContent = i.title;

    const image = document.createElement("img");
    image.src = i.image;

    if (selectedTab === 1) {
      cardContainer.setAttribute("class", "cardContainerArticles");
      const articleContainer = document.createElement("div");
      const content = document.createElement("p");
      content.textContent = i.content;
      articleContainer.appendChild(title);
      articleContainer.appendChild(image);
      articleContainer.appendChild(content);
      cardContainer.appendChild(articleContainer);
    }

    if (selectedTab === 2) {
      cardContainer.setAttribute("class", "cardContainerPortfolio");
      const figure = document.createElement("figure");
      const figCaption = document.createElement("figcaption");
      figCaption.appendChild(title);
      figure.appendChild(image);
      figure.appendChild(figCaption);
      cardContainer.appendChild(figure);
    }

    contentContainer.appendChild(cardContainer);
  });
}
