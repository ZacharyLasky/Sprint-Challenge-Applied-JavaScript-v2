// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .headerContainer component

function Header() {
  const header = document.createElement("div"),
    date = document.createElement("span"),
    title = document.createElement("h1"),
    temp = document.createElement("span");
  //FILL IN CONTENT
  date.textContent = "SMARCH 28, 2019";
  title.textContent = "Lambda Times";
  temp.textContent = "98°";
  //APPEND CHILDREN
  header.append(date, title, temp);
  //STYLE ELEMENTS
  header.classList.add("header");
  date.classList.add("date");
  temp.classList.add("temp");

  return header;
}

const headerContainer = document.querySelector(".header-container");
headerContainer.append(Header());
