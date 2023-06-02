/*Ejercicio 1
Buscar alguna API que ofrezca información de
interés, y “consumirla” para obtener la data
utilizando promesas y luego poder manipular o
mostrarla por pantalla.*/



async function getPersonaje() {
    const apiUrl = `https://rickandmortyapi.com/api/character`;
    
    try {
      const response = await fetch(apiUrl);
      if (response.ok) {
        const data = await response.json();
        return data;
      } else {
        throw new Error("No se pudo obtener la información del personaje.");
      }
    } catch (err) {
      throw new Error(err);
    }
  }

  
const container = document.getElementById("container");
  getPersonaje()
  .then(data => { 
    data.results.forEach(personaje => {
      const card = document.createElement("div");
      card.classList.add("card");
      card.innerHTML += `
        <img src="${personaje.image}" alt="foto personaje">
        <h3>${personaje.name}</h3>
        <p>${personaje.species}</p>
        <p>${personaje.gender}</p>`;

      container.appendChild(card);
    });   
  })
  .catch(err => console.log(err));