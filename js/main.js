const cards = document.getElementById("cards");
const templateCard = document.getElementById("template-card").content;
const fragment = document.createDocumentFragment();
const btnSend = document.getElementById("send");

btnSend.addEventListener("click", (e) => {
  if (e.target.classList.contains("btn-secondary")) {
    getBreed();
  }
});

const getBreed = () => {
  const breed = document.getElementById("buscar").value;
  let urlBreed = breed.replace(/\s/g, "/");
  console.log(urlBreed);
  fetchData(urlBreed);
  
};

const fetchData = async (urlBreed) => {
  const res = await fetch(
    "https://dog.ceo/api/breed/"+urlBreed+"/images/random/5"
  )
    .then((res) => res.json())
    .then((res) => {
        pintarCards(res);
    })
    .catch((err) => 
        alert("No se encontraron resultados, intente con otra raza")
    );
};

const pintarCards = (data) => {
  cards.innerHTML = "";
  data = data.message;
  data.forEach((item) => {
    templateCard.querySelector("img").src = item;

    const clone = templateCard.cloneNode(true);
    fragment.appendChild(clone);
  });
  cards.appendChild(fragment);
};
