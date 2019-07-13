// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

const cardsContainer = document.querySelector(".cards-container");

axios
  .get("https://lambda-times-backend.herokuapp.com/articles")
  .then(response => {
    const categories = Object.keys(response.data.articles);
    categories.forEach(category => {
      categories.forEach(article => {
        cardsContainer.append(CardsComponents(article));
      });
    });
    //console.log("DATA:", response);
  })
  .catch(error => {
    console.log("ERROR:", error);
  });

function CardsComponents(object) {
  //CREATE ELEMENTS
  const card = document.createElement("div");
  const headline = document.createElement("div"),
    author = document.createElement("div"),
    imgContainer = document.createElement("div"),
    img = document.createElement("img"),
    name = document.createElement("span");
  //FILL IN CONTENT
  headline.textContent = object;
  img.src = object;
  name.textContent = object;
  //APPEND CHILDREN
  card.append(headline, author, imgContainer, name);
  author.append(imgContainer);
  imgContainer.append(img);
  author.append(name);

  //STYLE ELEMENTS
  card.classList.add("card");
  author.classList.add("author");

  return card;
}
