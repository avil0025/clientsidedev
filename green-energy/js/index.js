// References to the new methods:
// https://developer.mozilla.org/en-US/docs/Web/API/Element/hasAttribute
// https://developer.mozilla.org/en-US/docs/Web/API/Element/removeAttribute
// https://developer.mozilla.org/en-US/docs/Web/API/Element/setAttribute

// get the reference to your event-target-objects
let btns = document.querySelectorAll("li");

// define function that runs when click event happens
const articleTitle = document.getElementById("content");
const articleContent = document.getElementById("article-content");
const articleImage = document.getElementById("article-img");
const articleLink = document.getElementById("link");

let currentSelected = null;

function handleClick(e) {
  const currentBtn = e.target;
  const btnId = currentBtn.id;

  // Reset previous selection's color
  if (currentSelected && currentSelected !== currentBtn) {
    currentSelected.style.color = "#a5d6a7";
  }

  // Update new selection
  currentSelected = currentBtn;
  currentBtn.style.color = "#2e7d32";

  // Dynamically update content based on original ID
  switch (btnId) {
    case "icon1":
      articleTitle.innerHTML =
        "There’s enough natural hydrogen in the Earth’s crust to help power the green energy transition";
      articleContent.innerHTML =
        "          Since their formation billions of years ago, the oldest parts of the Earth’s continental rocks have generated natural hydrogen in massive amounts. Some of this hydrogen may have accumulated within accessible traps and reservoirs under the Earth’s surface. This store has the potential to contribute to the global hydrogen economy for hundreds of years. This has been demonstrated by the production of near-pure hydrogen from a single gas field in Mali, attracting the attention of governments in the United States, Canada, Australia, the United Kingdom and Europe. There is also interest from major venture capital investors and international resource companies. By the end of 2023, 40 companies were exploring natural hydrogen globally. That has likely doubled since 2024.";
      articleImage.setAttribute("src", "img/photo1.jpg");
      articleLink.innerHTML =
        "https://www.goodgoodgood.co/articles/solar-power-versus-fossil-fuels-cheaper-study";
      break;
    case "icon2":
      articleTitle.innerHTML =
        "Solar is now 41% cheaper than fossil fuels, new UN report finds: 'The sun is rising on a clean energy age' Fifteen years ago, solar power was nearly four times the cost of fossil fuel alternatives.";
      articleContent.innerHTML = `For context, 2010 was back when the iPad was first released, Instagram was launched, and “TiK ToK” by Kesha was the number one song on the Billboard Hot 100 chart.
Needless to say, a lot can change in 15 years — including the affordability of solar power.
According to two new United Nations reports, renewable energy has passed a “positive tipping point,” and solar power is now 41% cheaper than fossil fuels.
“The fossil fuel age is flailing and failing,” UN Secretary-General Antonio Guterres said in a speech on July 22, as the reports were released. “We are in the dawn of a new energy era. An era where cheap, clean, abundant energy powers a world rich in economic opportunity.”
“The sun is rising on a clean energy age. Just follow the money,” Guterres said frankly, pointing to the figures in the reports which found that green energy outpaced fossil fuel investments by $800 billion in 2024 alone.
Last year is evidence of a decade-long trend towards renewable energy — despite federal attempts to slash it under Trump’s second presidency.
“The year 2015 marked a turning point in global climate governance, with the adoption of the landmark Paris Agreement at COP21,” one report, titled “Seizing the moment of opportunity” said, in reference to the promise 195 countries pledged to hold the global average temperature to well below 2 degrees Celsius.
“The cost of utility-scale solar PV has fallen by 80–90% each decade since 1960, whereas the costs of fossil fuels are highly volatile and show no long-term decrease,” it continued.
“New solar PV has been undercutting new coal- and gas-fired power plants in most of the world for six years, and the gap in their average lifetime electricity generation costs continues to widen in favour of solar. Meanwhile, global manufacturing capacity of renewable energy technologies is outstripping demand: Announced solar PV and battery projects can already cover the global deployment needs of the tripling renewable capacity by 2030 goal.”`;
      articleImage.setAttribute("src", "img/photo2.jpg");
      articleLink.innerHTML =
        "https://www.goodgoodgood.co/articles/solar-power-versus-fossil-fuels-cheaper-study";
      break;
    case "icon3":
      articleTitle.innerHTML =
        "China-led study proposes global green-energy network to solve power crisis";
      articleContent.innerHTML = `China - led study proposes global green - energy network to solve power crisis
The world’s energy demands in 2050 could be met by an interconnected global solar - wind energy system producing three times the amount of power needed at a lower cost than independent regional systems, according to a Chinese - led study.
The researchers studied how to create a network drawing on regions with abundant renewable energy potential to provide energy across and between continents to areas with high needs.
While an international renewable energy market could be created by optimising solar and wind renewable energy deployment, the team said setting up such a system must navigate geopolitical boundaries and crises such as the Ukraine war.`;
      articleImage.setAttribute("src", "img/photo3.jpg");
      articleLink.innerHTML =
        "https://www.scmp.com/news/china/science/article/3315587/china-led-study-proposes-global-green-energy-network-solve-power-crisis";
      break;
    default:
      articleTitle.innerHTML =
        "There’s enough natural hydrogen in the Earth’s crust to help power the green energy transition";
      articleContent.innerHTML =
        "Since their formation billions of years ago, the oldest parts of the Earth’s continental rocks have generated natural hydrogen in massive amounts. Some of this hydrogen may have accumulated within accessible traps and reservoirs under the Earth’s surface. This store has the potential to contribute to the global hydrogen economy for hundreds of years. This has been demonstrated by the production of near-pure hydrogen from a single gas field in Mali, attracting the attention of governments in the United States, Canada, Australia, the United Kingdom and Europe. There is also interest from major venture capital investors and international resource companies. By the end of 2023, 40 companies were exploring natural hydrogen globally. That has likely doubled since 2024.";
      articleImage.setAttribute("src", "img/photo1.jpg");
      articleLink.innerHTML =
        "https://www.goodgoodgood.co/articles/solar-power-versus-fossil-fuels-cheaper-study";
  }
}

// register buttons for click event
for (let btn of btns) {
  btn.addEventListener("click", handleClick);
}
