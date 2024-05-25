const rootDiv = document.getElementById("root");

const getData = async() => {
  try{
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();
    data.map((el) => {
      const div = document.createElement("div");
      div.className = "cards";
      const h3 = document.createElement("h3");
      h3.textContent = el.title;
      const img = document.createElement("img");
      img.src = el.image;
      img.style.width = "100px";
      const p = document.createElement("p");
      p.textContent = el.description;
      
      div.appendChild(img);
      div.appendChild(h3);
      div.appendChild(p);
      rootDiv.append(div);
    })
  }catch(err){
    throw Exception;
  }
}

getData();