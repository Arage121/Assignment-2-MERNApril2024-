const rootDiv = document.getElementById("root");
const loadingDiv = document.getElementById("loading");

let data = {};

const getData = async () => {
  try {
    const res = await fetch("https://dummyjson.com/recipes");
    data = await res.json();
    showData();
  } catch (err) {
    console.error("Error fetching data:", err);
  }
};

getData();

const showData = () => {
  data.recipes.forEach((el) => {
    const parentDiv = document.createElement("div");
    parentDiv.className = "cards";
    const div1 = document.createElement("div");
    const img = document.createElement("img");
    img.src = el.image;
    img.style.width = "200px";
    const div2 = document.createElement("div");
    const h3 = document.createElement("h3");
    h3.textContent = el.name+" ("+el.cuisine+")";
    const h4 = document.createElement('h4');
    h4.style.marginTop = "5px"
    h4.textContent = "Ingredients:-";
    div1.appendChild(img);
    div2.appendChild(h3);
    div2.appendChild(h4);
    const ingredients = el.ingredients;
    ingredients.forEach((el) => {
      const p = document.createElement("p");
      p.textContent = el;
      div2.appendChild(p);
    }) 
    parentDiv.append(div1);
    parentDiv.append(div2);
    rootDiv.append(parentDiv);
  });
}

const filteredData = async () => {
  const searchVal = document.getElementById("searchInp").value.trim();
  
  loadingDiv.style.display = "block";
  rootDiv.innerHTML = '';

  // const data = await getData();

  loadingDiv.style.display = "none";

  const sortedData = data.recipes.filter((el) => el.id == searchVal);

  // const filteredItems = data.filter((el) => el.id == searchVal);
  
  sortedData.forEach((el) => {
    const parentDiv = document.createElement("div");
    parentDiv.className = "cards";
    const div1 = document.createElement("div");
    const img = document.createElement("img");
    img.src = el.image;
    img.style.width = "200px";
    const div2 = document.createElement("div");
    const h3 = document.createElement("h3");
    h3.textContent = el.name+" ("+el.cuisine+")";
    const h4 = document.createElement('h4');
    h4.style.marginTop = "5px"
    h4.textContent = "Ingredients:-";
    div1.appendChild(img);
    div2.appendChild(h3);
    div2.appendChild(h4);
    const ingredients = el.ingredients;
    ingredients.forEach((el) => {
      const p = document.createElement("p");
      p.textContent = el;
      div2.appendChild(p);
    }) 
    parentDiv.append(div1);
    parentDiv.append(div2);
    rootDiv.append(parentDiv);
  });

  if (sortedData.length === 0) {
    const noResultDiv = document.createElement("div");
    noResultDiv.className = "no-results";
    noResultDiv.textContent = "No products found";
    rootDiv.appendChild(noResultDiv);
  }
};

