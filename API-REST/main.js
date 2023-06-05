const tablaContainer = document.getElementById("tabla-container");
const tabla = document.querySelector("table");
const btnCargar = document.getElementById("cargar");

const url = "https://647b8af6d2e5b6101db169f3.mockapi.io/Productos";

fetch(url)
.then(res => res.json())
.then(res => {
    
    res.forEach(producto => {
        const row = document.createElement("tr");
        row.innerHTML += `
            
                <td>${producto.id}</td>
                <td>${producto.name}</td>
                <td>${producto.tipo}</td>
                <td>${producto.categoria}</td>
                <td>${producto.stock}</td>
                <td> $ ${producto.precio}</td>
                <td>
                    <button id="delete">
                    <img src="./IMG/borrar.png" alt="borrar">
                    </button>
                    <button id="modificar">
                    <img src="./IMG/editar.png" alt="editar">
                    </button>
                </td>
                 
        `
        tabla.appendChild(row);

    });
})
.catch(err => console.log(err));



const tdNombre= document.getElementById("nombre");
const tdTipo= document.getElementById("tipo");
const tdCat= document.getElementById("categoria");
const tdStock= document.getElementById("stock");
const tdPrecio= document.getElementById("precio");


btnCargar.addEventListener("click", () => {
    const producto = {
        name: tdNombre.value,
        tipo: tdTipo.value,
        precio: tdPrecio.value,
        stock: tdStock.value,
        categoria: tdCat.value,
    }

    fetch(url,{
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(producto)
    })

    .then(datos => { return (datos.json()) })
    .then(datos => {
      console.log(datos),
      window.location.reload()
    })
    .catch(err => { console.log(err) });
    

tdNombre.value = "";
tdTipo.value = "";
tdPrecio.value = "";
tdStock.value = "";
tdCat.value= "";
})


tabla.addEventListener("click", (event) => {
    if (event.target.id === "delete") {
      const row = event.target.parentNode.parentNode;
      const productId = row.querySelector("td:first-child").textContent;
  
      fetch(`${url}/${productId}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(`Producto eliminado: ${data.id}`);
          row.remove(); 
        })
        .catch((err) => console.log(err));
    }
  });


const formularioModificar = document.getElementById("formulario-modificar");
formularioModificar.style.display = "none";//oculto el form para modificar

tabla.addEventListener("click", (event) => {
  if (event.target.id === "modificar") {
    const row = event.target.parentNode.parentNode;
    const productId = row.querySelector("td:first-child").textContent;

    // obtengo los datos del producto
    const nombreActual = row.querySelector("td:nth-child(2)").textContent;
    const tipoActual = row.querySelector("td:nth-child(3)").textContent;
    const precioActual = row.querySelector("td:nth-child(6)").textContent;
    const stockActual = row.querySelector("td:nth-child(5)").textContent;
    const categoriaActual = row.querySelector("td:nth-child(4)").textContent;

    
    formularioModificar.style.display = "block";// Mostrar el formulario 
    formularioModificar.querySelector("#nombre").value = nombreActual;
    formularioModificar.querySelector("#tipo").value = tipoActual;
    formularioModificar.querySelector("#precio").value = precioActual;
    formularioModificar.querySelector("#stock").value = stockActual;
    formularioModificar.querySelector("#categoria").value = categoriaActual;

    formularioModificar.addEventListener("submit", (e) => {
      e.preventDefault();

      // Obtengo los nuevos datos ingresados o modifcados
      const nombreModificado = formularioModificar.querySelector("#nombre").value;
      const tipoModificado = formularioModificar.querySelector("#tipo").value;
      const precioModificado = formularioModificar.querySelector("#precio").value;
      const stockModificado = formularioModificar.querySelector("#stock").value;
      const categoriaModificada = formularioModificar.querySelector("#categoria").value;

      formularioModificar.style.display = "none"; // Oculto el form nuevamente

      const productoModificado = {
        name: nombreModificado,
        tipo: tipoModificado,
        precio: precioModificado,
        stock: stockModificado,
        categoria: categoriaModificada,
      };

      fetch(`${url}/${productId}`, {
        method: "PUT",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(productoModificado)
      })
      .then((res) => res.json())
      .then((data) => {
        console.log(`Producto modificado: ${data.id}`)
        window.location.reload();
      })
      .catch((err) => console.log(err));
    });
  }
});
